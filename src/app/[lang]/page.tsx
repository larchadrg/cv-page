import Cv from "../../components/features/cv";
import Sidebar from "../../components/features/sidebar"
import { translations } from '@/translations';

export default async function Home({ params }: { params: { lang: 'es' | 'en' } }) {
  // Await the entire params object first
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const t = translations[lang];
  
  return (
    <div className="w-full min-h-screen overflow-x-hidden text-wrap">
      {/* Sidebar */}
      <Sidebar lang={lang} t={t} />
      <main className="md:w-[70%] md:ml-[30%] lg:w-[80%] lg:ml-[20%] w-full h-full grow bg-background">
        <Cv t={t} />
      </main>
    </div>
  );
}
