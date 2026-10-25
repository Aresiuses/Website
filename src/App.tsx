import React, { useState } from 'react';
const profile = {
  name: "Muhammad Adel Rahman Bin Mohammad",
  initials: "AR",
  role: "Software Engineering Undergraduate ",
  location: "Penang, Malaysia",
  email: "adelrahman69@gmail.com",
  phone: "+60 19-910 2265",
  linkedin: "https://www.linkedin.com/in/adelrahman",
  github: "http://github.com/Aresiuses",
  resume: "Adel'sResume.pdf",
  summary:
    "I design and build thoughtful digital products that are clear, useful, and easy to use. I enjoy working closely with teams to turn complex problems into simple experiences.",
  skills: {
      designAndFrontend: ["Product Design", "UI/UX Design", "Prototyping", "Full-Stack development"],
      backendAndLanguages: ["C++", "Java", "Python", "SQL"],
  },
  image: "Profile.png",
};

const projects = [
  {
    title: "GameVerse",
    description:
      "E-commerce website designed for gamers to be able to purchase game for different gaming platform in a single website",
    contribution: "Team Leader, Full Stack developer",
    year: "2026",
    status: "Previous",
    color: "bg-[#e3eee6]",
    label: "GV",
    image: "GameVerse.png",
    link: "https://github.com/Aresiuses/CAT201-Project-GameVerse-",
  },
  {
    title: "NovAi",
    description:
      "A practice website created to test knowledge about React.js and tailwind.css",
    contribution: "Co-Creator, Web designer",
    year: "2026",
    status: "Previous",
    color: "bg-[#f3e3d8]",
    label: "NA",
    image: "NovAi.png",
    link: "https://nov-ai-eta.vercel.app/",
  },
  {
    title: "Smart To-do List",
    description:
      "An application for user to write their to do list with automated tracking",
    contribution: "App Design, Prototyping",
    year: "2025",
    status: "Previous",
    color: "bg-[#e0e9f2]",
    label: "ST",
  },
  {
    title: "Student Networking CLI Application",
    description:
      "A mock social media platform for students built solely using C++ in google colab ",
    contribution: "Back-end Development, Design System, Quality Assurance",
    year: "2024",
    status: "Previous",
    color: "bg-[#ece8d9]",
    label: "SN",
    link: "https://colab.research.google.com/drive/1hCYligEcLmRAwo3HU1WbOjl6cWEb0vw0?usp=sharing",
  },
];

function SunIcon() {
    return (
        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
    );
}

function MoonIcon() {
    return (
        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
    );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 16 16">
      <path d="M3 13 13 3m0 0H5m8 0v8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.5 8.3H3.2V19h3.3V8.3ZM4.85 3A1.92 1.92 0 1 0 4.85 6.84 1.92 1.92 0 0 0 4.85 3ZM19 12.86c0-3.22-1.72-4.72-4.02-4.72a3.5 3.5 0 0 0-3.17 1.74V8.3H8.5V19h3.31v-5.3c0-1.4.27-2.76 2-2.76 1.7 0 1.72 1.6 1.72 2.85V19H19v-6.14Z" />
    </svg>
  );
}

function GitHubIcon() {
    return (
        <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
    );
}

function ResumeIcon() {
    return (
        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
    );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
      <div className={darkMode ? "dark min-h-screen bg-[#121212] text-[#f3f3f3]" : "min-h-screen bg-[#fafafa] text-[#1d1d1f]"}>
          <header className={`sticky top-0 z-50 border-b backdrop-blur-lg ${darkMode ? "border-white/10 bg-[#121212]/90" : "border-black/8 bg-[#fafafa]/90"}`}>
              <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
                  <a className="text-sm font-semibold tracking-tight" href="#top">
                      {"Adel Rahman"}
                  </a >
                  <div className="flex items-center gap-3 md:gap-4">
                      <div className={`flex items-center gap-1 p-1 rounded-full border ${darkMode ? "border-white/10 bg-white/5" : "border-black/8 bg-black/5"}`}>
                          <a className="nav-pill" href="#about">
                              About
                          </a>
                          <a className="nav-pill" href="#projects">
                              Projects
                          </a>
                          <a className="nav-pill" href="#contact">
                              Contact
                          </a>
                      </div>

                      <button
                          onClick={() => setDarkMode(!darkMode)}
                          className={`p-2.5 rounded-full border transition-all duration-160 ${
                              darkMode
                                  ? "border-white/15 bg-white/10 text-yellow-400 hover:bg-white/20"
                                  : "border-black/12 bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
                          }`}
                          aria-label="Toggle theme"
                      >
                          {darkMode ? <SunIcon /> : <MoonIcon />}
                      </button>
                  </div>
              </nav>
          </header>

      <main id="top" className="mx-auto max-w-6xl px-5 md:px-8">
        <section className="grid gap-10 py-16 md:grid-cols-[180px_1fr] md:gap-14 md:py-24">
          <div className="portrait relative h-48 w-48 overflow-hidden rounded-2xl bg-[#e9e7e2] md:h-44 md:w-44">
            <div className="absolute inset-0 grid place-items-center">
                <img
                    src="/Profile.JPG"
                    alt={profile.name}
                    className="h-full w-full object-cover"
                />
            </div>
          </div>

          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-2 text-sm font-medium text-[#357353]">
              <span className="h-2 w-2 rounded-full bg-[#3c9363]" />
              Open to 6 months internship
            </div>
            <h1 className="text-4xl font-semibold tracking-[-0.045em] md:text-6xl">
              Hi, I’m {profile.name}.
            </h1>
            <p className="mt-3 text-xl font-medium text-[#606064] md:text-2xl">
              {profile.role}
            </p>
            <p className="mt-7 max-w-2xl text-base leading-7 text-[#606064] md:text-lg md:leading-8">
              {profile.summary}
            </p>
              <div className="mt-8 flex flex-wrap gap-3">
                  <a className="primary-button" href={`mailto:${profile.email}`}>
                      Get in touch
                  </a>
                  <a
                      className={`secondary-button transition-all duration-200 ${
                          darkMode
                              ? "border-white/15 bg-[#1c1c1e] text-white hover:bg-white/10"
                              : "border-black/12 bg-white text-[#1d1d1f] hover:bg-[#f3f3f3]"
                      }`}
                      href={profile.linkedin}
                      rel="noreferrer"
                      target="_blank"
                  >
                      <LinkedInIcon />
                      LinkedIn
                  </a>
                  <a
                      className={`secondary-button transition-all duration-200 ${
                          darkMode
                              ? "border-white/15 bg-[#1c1c1e] text-white hover:bg-white/10"
                              : "border-black/12 bg-white text-[#1d1d1f] hover:bg-[#f3f3f3]"
                      }`}
                      href={profile.github}
                      rel="noreferrer"
                      target="_blank"
                  >
                      <GitHubIcon />
                      GitHub
                  </a>
                  <a
                      className={`secondary-button transition-all duration-200 ${
                          darkMode
                              ? "border-white/15 bg-[#1c1c1e] text-white hover:bg-white/10"
                              : "border-black/12 bg-white text-[#1d1d1f] hover:bg-[#f3f3f3]"
                      }`}
                      href={profile.resume}
                      rel="noreferrer"
                      target="_blank"
                  >
                      <ResumeIcon />
                      Resume
                  </a>
              </div>
          </div>
        </section>

          <section id="about" className="section-grid">
              <div>
                  <p className="section-label">About</p>
              </div>
              <div className="grid gap-10 sm:grid-cols-2">
                  <div>
                      <h2 className="section-heading">How I work</h2>
                      <p className="mt-4 leading-7 text-[#606064]">
                          I combine user insight, strong visual thinking, and practical
                          execution. I value clear communication, constructive feedback,
                          and making decisions based on what people actually need.
                      </p>
                  </div>
                  <div>
                      <h2 className="section-heading">Core skills</h2>
                      <div className="mt-4 grid grid-cols-2 gap-6">
                          <ul className="space-y-3">
                              {profile.skills.designAndFrontend.map((skill) => (
                                  <li
                                      className="flex items-center gap-3 text-[#606064]"
                                      key={skill}
                                  >
                                      <span className="h-1.5 w-1.5 rounded-full bg-[#1d1d1f]" />
                                      {skill}
                                  </li>
                              ))}
                          </ul>
                          <ul className="space-y-3">
                              {profile.skills.backendAndLanguages.map((skill) => (
                                  <li
                                      className="flex items-center gap-3 text-[#606064]"
                                      key={skill}
                                  >
                                      <span className="h-1.5 w-1.5 rounded-full bg-[#1d1d1f]" />
                                      {skill}
                                  </li>
                              ))}
                          </ul>
                      </div>
                  </div>
              </div>
          </section>

        <section id="projects" className="section-grid">
          <div>
            <p className="section-label">Selected work</p>
          </div>
          <div>
            <div className="mb-9 flex items-end justify-between gap-5">
              <div>
                <h2 className="section-heading">Projects</h2>
                <p className="mt-2 text-sm text-[#737377]">
                  Current and previous work
                </p>
              </div>
              <p className="hidden text-sm text-[#737377] sm:block">
                {projects.length} selected projects
              </p>
            </div>

              <div className="grid gap-5 sm:grid-cols-2">
                  {projects.map((project) => {
                      const CardWrapper = project.link ? "a" : "div";
                      const wrapperProps = project.link
                          ? {
                              href: project.link,
                              target: "_blank",
                              rel: "noreferrer",
                              className: `project-card overflow-hidden rounded-2xl border block group transition-all duration-200 ${
                                  darkMode ? "border-white/10 bg-[#1c1c1e] text-[#f3f3f3]" : "border-black/8 bg-white text-[#1d1d1f]"
                              }`,
                          }
                          : {
                              className: `project-card overflow-hidden rounded-2xl border ${
                                  darkMode ? "border-white/10 bg-[#1c1c1e] text-[#f3f3f3]" : "border-black/8 bg-white text-[#1d1d1f]"
                              }`,
                          };

                      return (
                          <CardWrapper key={project.title} {...wrapperProps}>
                              {project.image ? (
                                  <div className="grid aspect-[16/10] place-items-center border-b border-black/5 overflow-hidden bg-gray-100">
                                      <img
                                          src={project.image}
                                          alt={project.title}
                                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                      />
                                  </div>
                              ) : (
                                  <div
                                      className={`${project.color} grid aspect-[16/10] place-items-center border-b ${darkMode ? "border-white/10 opacity-90" : "border-black/5"}`}
                                  >
                                      <div className={`grid h-20 w-20 place-items-center rounded-2xl text-2xl font-semibold tracking-[-0.06em] shadow-sm ${
                                          darkMode ? "bg-[#2c2c2e] text-[#f3f3f3]" : "bg-white/75 text-[#1d1d1f]"
                                      }`}>
                                          {project.label}
                                      </div>
                                  </div>
                              )}

                              <div className="p-5">
                                  <div className="flex items-center justify-between gap-3">
                                      <h3 className="text-lg font-semibold tracking-[-0.02em] group-hover:underline">
                                          {project.title}
                                      </h3>
                                      <span
                                          className={
                                              project.status === "Current"
                                                  ? "status-current"
                                                  : "status-previous"
                                          }
                                      >
              {project.status}
            </span>
                                  </div>
                                  <p className="mt-3 text-sm leading-6 text-[#606064]">
                                      {project.description}
                                  </p>
                                  <div className="mt-5 flex items-end justify-between gap-3 border-t border-black/8 pt-4">
                                      <div>
                                          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#919195]">
                                              My role
                                          </p>
                                          <p className="mt-1 text-xs font-medium">
                                              {project.contribution}
                                          </p>
                                      </div>
                                      <span className="text-xs text-[#737377]">{project.year}</span>
                                  </div>
                              </div>
                          </CardWrapper>
                      );
                  })}
              </div>
          </div>
        </section>

        <section id="contact" className="section-grid border-b-0">
          <div>
            <p className="section-label">Contact</p>
          </div>
          <div>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              Interested in working together?
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-[#606064]">
              I’d be happy to share more about my work, experience, and the way
              I approach new challenges.
            </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <a
                      className={`contact-card group transition-all duration-200 ${
                          darkMode ? "border-white/10 bg-[#1c1c1e] text-white hover:border-white/30" : "border-black/8 bg-white text-[#1d1d1f]"
                      }`}
                      href={`mailto:${profile.email}`}
                  >
                    <span>
                      <span className={`contact-label ${darkMode ? "text-gray-400" : "text-[#919195]"}`}>Email</span>
                      <span className="contact-value">{profile.email}</span>
                    </span>
                      <ArrowIcon />
                  </a>

                  <a
                      className={`contact-card group transition-all duration-200 ${
                          darkMode ? "border-white/10 bg-[#1c1c1e] text-white hover:border-white/30" : "border-black/8 bg-white text-[#1d1d1f]"
                      }`}
                      href={profile.linkedin}
                      rel="noreferrer"
                      target="_blank"
                  >
                    <span>
                      <span className={`contact-label ${darkMode ? "text-gray-400" : "text-[#919195]"}`}>Professional profile</span>
                      <span className="contact-value">LinkedIn</span>
                    </span>
                      <ArrowIcon />
                  </a>

                  <a
                      className={`contact-card group transition-all duration-200 ${
                          darkMode ? "border-white/10 bg-[#1c1c1e] text-white hover:border-white/30" : "border-black/8 bg-white text-[#1d1d1f]"
                      }`}
                      href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  >
                    <span>
                      <span className={`contact-label ${darkMode ? "text-gray-400" : "text-[#919195]"}`}>Phone</span>
                      <span className="contact-value">{profile.phone}</span>
                    </span>
                      <ArrowIcon />
                  </a>

                  <div
                      className={`contact-card ${
                          darkMode ? "border-white/10 bg-[#1c1c1e] text-white" : "border-black/8 bg-white text-[#1d1d1f]"
                      }`}
                  >
                    <span>
                      <span className={`contact-label ${darkMode ? "text-gray-400" : "text-[#919195]"}`}>Location</span>
                      <span className="contact-value">{profile.location}</span>
                    </span>
                  </div>
              </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-7 text-xs text-[#737377] sm:flex-row sm:items-center sm:justify-between md:px-8">
          <p>© 2026 {profile.name}</p>
          <a className="hover:text-[#1d1d1f]" href="#top">
            Back to top
          </a>
        </div>
      </footer>
    </div>
  );
}
