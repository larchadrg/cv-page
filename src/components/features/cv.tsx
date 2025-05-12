import { TranslationType } from "@/translations";
import Link from "next/link";

export default function Cv({t}: {t: TranslationType}) {
  return (
    <div className="flex flex-col p-4 text-black">
      <h1 className="text-4xl font-bold text-left mb-8 text-dark-green">{t.cv.title}</h1>

      {/* Experience Section */}
      <h2 className="text-2xl font-bold text-left text-dark-green">{t.cv.experience.title}</h2>
      <div className="h-px w-full bg-dark-green mb-4"></div>

      {/* Web Developer */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold">{t.cv.experience.webDeveloper.title}</h3>
        <p className="text-lg">
          <Link href="https://www.linkedin.com/company/mavincompany" target="_blank" rel="noopener noreferrer">
        {t.cv.experience.webDeveloper.company}
        </Link>
        </p>
        
        <p className="text-sm italic">{t.cv.experience.webDeveloper.period}</p>
        <ul className="list-disc pl-6 mt-2">
          {t.cv.experience.webDeveloper.description.map((item, index) => (
            <li key={index} className="mb-1">
              {item}
              {index === 1 && (
                <ul className="list-disc pl-6 mt-1">
                  {t.cv.experience.webDeveloper.projects.map((project, projectIndex) => (
                    <li key={projectIndex} className="mb-1">{project}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Teaching Assistant */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold">{t.cv.experience.teachingAssistant.title}</h3>
        <p className="text-lg">{t.cv.experience.teachingAssistant.company}</p>
        <p className="text-sm italic">{t.cv.experience.teachingAssistant.period}</p>
        <ul className="list-disc pl-6 mt-2">
          {t.cv.experience.teachingAssistant.description.map((item, index) => (
            <li key={index} className="mb-1">{item}</li>
          ))}
        </ul>
      </div>

      {/* English Teacher */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold">{t.cv.experience.englishTeacher.title}</h3>
        <p className="text-lg">{t.cv.experience.englishTeacher.company}</p>
        <p className="text-sm italic">{t.cv.experience.englishTeacher.period}</p>
        <ul className="list-disc pl-6 mt-2">
          {t.cv.experience.englishTeacher.description.map((item, index) => (
            <li key={index} className="mb-1">{item}</li>
          ))}
        </ul>
      </div>

      {/* Skills Section */}
      <h2 className="text-2xl font-bold text-left text-dark-green">{t.cv.skills.title}</h2>
      <div className="h-px w-full bg-dark-green mb-4"></div>
      
      {/* Backend */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold">{t.cv.skills.backend.title}</h3>
        <ul className="list-disc pl-6">
          {t.cv.skills.backend.items.map((item, index) => (
            <li key={index} className="mb-1">{item}</li>
          ))}
        </ul>
      </div>

      {/* Frontend */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold">{t.cv.skills.frontend.title}</h3>
        <ul className="list-disc pl-6">
          {t.cv.skills.frontend.items.map((item, index) => (
            <li key={index} className="mb-1">{item}</li>
          ))}
        </ul>
      </div>

      {/*  Tools */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold">{t.cv.skills.other.title}</h3>
        <ul className="list-disc pl-6">
          {t.cv.skills.other.items.map((item, index) => (
            <li key={index} className="mb-1">{item}</li>
          ))}
        </ul>
      </div>
      
      {/* Education Section */}
      <h2 className="text-2xl font-bold text-left text-dark-green">{t.cv.education.title}</h2>
      <div className="h-px w-full bg-dark-green mb-4"></div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold">{t.cv.education.university}</h3>
        <p className="text-lg">{t.cv.education.degree}</p>
        <p className="text-sm italic">{t.cv.education.period}</p>
      </div>

      {/* Courses Section */}
      <h2 className="text-2xl font-bold text-left text-dark-green">{t.cv.courses.title}</h2>
      <div className="h-px w-full bg-dark-green mb-4"></div>
      <ul className="list-disc pl-6 mb-6">
        {t.cv.courses.items.map((course, index) => (
          <li key={index} className="mb-2">{course}</li>
        ))}
      </ul>

      {/* Languages Section */}
      <h2 className="text-2xl font-bold text-left text-dark-green">{t.cv.languages.title}</h2>
      <div className="h-px w-full bg-dark-green mb-4"></div>
      <ul className="list-disc pl-6 mb-6">
        <li>{t.cv.languages.english}</li>
        <li>{t.cv.languages.spanish}</li>
      </ul>
    </div>
  );
}