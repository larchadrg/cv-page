'use server'

import { cookies } from 'next/headers'
import { Language } from '@/translations'
import { redirect } from 'next/navigation'

export async function setLanguage(lang: Language) {
  const cookieStore = await cookies()
  cookieStore.set('language', lang)
}

export async function handleLanguageChange(formData: FormData) {
  const lang = formData.get('lang') as Language
  await setLanguage(lang)
  redirect(`/${lang}`)
} 