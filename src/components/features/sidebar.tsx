import { Language, TranslationType } from "@/translations";
import Image from "next/image";
import LanguageSelector from "../LanguageSelector";

export default function Sidebar({lang, t}: {lang: Language, t: TranslationType}) {
  return (
    <div className="w-full h-auto md:h-screen md:fixed md:top-0 md:w-[30%] lg:w-[20%] flex flex-col items-center p-4 bg-dark-green">
        {/* Logo */}
        <Image src="/images/sidebar-main.svg" alt="sidebar-main" width={300} height={300} 
        className="bg-light-green rounded-full my-4" />
        {/* Title */}
        <div className="flex flex-col items-center justify-center text-center my-4">
          <h1 className="text-white text-3xl font-bold">
            {t.title}
          </h1>
          <p className="text-white max-w-sm">{t.description}</p>
        </div>
        {/* Social Media */}
        <div className="flex flex-row items-center justify-center gap-4">
          <a href="https://www.linkedin.com/in/lara-combina/" target="_blank" rel="noopener noreferrer" 
          className="hover:cursor-pointer hover:scale-110 transition-all duration-300 bg-light-green rounded-full p-2">
            <Image 
              src="/icons/linkedin.svg" 
              alt="linkedin" 
              width={24} 
              height={24}
              priority
            />
          </a>
          <a href="https://github.com/larchadrg" target="_blank" rel="noopener noreferrer" 
          className="hover:cursor-pointer hover:scale-110 transition-all duration-300 bg-light-green rounded-full p-2">
            <Image 
              src="/icons/github.svg" 
              alt="github" 
              width={24} 
              height={24}
              priority
            />
          </a>
          <a href="mailto:lara.combina@gmail.com" target="_blank" rel="noopener noreferrer" 
          className="hover:cursor-pointer hover:scale-110 transition-all duration-300 bg-light-green rounded-full p-2">
            <Image 
              src="/icons/mail.svg" 
              alt="mail" 
              width={24} 
              height={24}
              priority
            />
          </a>
        </div>
        {/* control buttons */}
        <div className="flex w-full justify-center my-8">
          <LanguageSelector currentLang={lang} />
        </div>
        <p className="text-white text-sm mt-auto mb-2 ">{t.lastUpdate}</p>
      </div>
  );
}