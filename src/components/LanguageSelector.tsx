'use client'

import { Language } from '@/translations'
import { handleLanguageChange } from '@/app/actions'

export default function LanguageSelector({ currentLang }: { currentLang: Language }) {
  return (
    <form action={handleLanguageChange}>
      <select 
        name="lang"
        defaultValue={currentLang}
        className="px-4 py-2 rounded-lg bg-light-green text-dark-green border-black border-1 cursor-pointer"
        onChange={(e) => e.target.form?.requestSubmit()}
      >
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>
    </form>
  )
} 