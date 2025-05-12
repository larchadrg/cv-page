// src/middleware.ts
'use server'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// List of supported languages
const supportedLanguages = ['es', 'en']

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const pathname = request.nextUrl.pathname

  // Check if the pathname already has a language prefix
  const pathnameHasLanguage = supportedLanguages.some(
    lang => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  )

  if (pathnameHasLanguage) return

  // Get the preferred language from the request headers
  const acceptLanguage = request.headers.get('accept-language')
  let language = 'en' // Default language

  if (acceptLanguage) {
    // Get the first language from the Accept-Language header
    const preferredLanguage = acceptLanguage.split(',')[0].split('-')[0]
    if (supportedLanguages.includes(preferredLanguage)) {
      language = preferredLanguage
    }
  }

  // Redirect to the same path with the language prefix
  return NextResponse.redirect(
    new URL(`/${language}${pathname}`, request.url)
  )
}

// Configure the middleware to run on specific paths
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    // required to find images, fonts, icons, logos, etc.
    '/((?!api|_next|static|favicon.ico|images|fonts|icons|logos).*)',  ],
} 