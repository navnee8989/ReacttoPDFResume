import React from "react";
import './ResumeStyles.css'; // Link to a custom CSS file for better control over styles

const ResumePrint = () => {
  // Function to handle navigation
  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="resume-container p-4 bg-white mx-auto">
      {/* Header Section */}
      <header className="text-center mb-6 ">
        <h1 className="text-5xl font-bold text-primary">Navneet Sondarva</h1>
        <p className="text-md text-gray-700 mt-2">
          Ahmedabad, Gujarat 380019 | (+91) 96877-26421 |{" "}
          <span className="text-accent" onClick={() => openLink("mailto:mp760800@gmail.com")}>
            mp760800@gmail.com
          </span>
        </p>
        <p className="text-md text-gray-700">
          Website:{" "}
          <span
            className="text-accent"
            onClick={() => openLink("https://modernreact-jade.vercel.app/")}
          >
            modernreact-jade.vercel.app
          </span>{" "}
          | LinkedIn:{" "}
          <span
            className="text-accent"
            onClick={() => openLink("https://www.linkedin.com/in/navneet-sondarva-46123b193/")}
          >
            LinkedIn Profile
          </span>
        </p>
      </header>

      {/* Personal Summary Section */}
      <section>
        <h2 className="section-title">Personal Summary</h2>
        <p className="section-text">
          Aspiring frontend developer seeking an entry-level position to leverage my passion for web development. 
          Committed to delivering user-friendly websites with strong technical skills and eager to contribute to 
          a dynamic team while enhancing my skills through high-quality frontend solutions.
        </p>
      </section>

      {/* Skills Section */}
      <section className="mt-6">
        <h2 className="section-title">Skills</h2>
        <ul className="list-disc ml-6 section-text">
          <li>HTML, CSS, JavaScript (ES6)</li>
          <li>RESTful API Integration</li>
          <li>Bootstrap, Tailwind CSS, jQuery</li>
          <li>ReactJS, Redux</li>
          <li>Postman, NodeJS</li>
          <li>MySQL, Version Control (Git)</li>
          <li>WordPress</li>
        </ul>
      </section>

      {/* Experience Section */}
      <section className="mt-6">
        <h2 className="section-title">Experience</h2>
        <div className="mb-4">
          <h3 className="job-title">Front End Developer</h3>
          <p className="text-sm text-gray-600">
            Technowire Data Science Pvt. Ltd., Ahmedabad | Apr 2024 - September 2024
          </p>
          <ul className="list-disc ml-6 section-text">
            <li>Developed user-facing webpages using HTML, CSS, JavaScript, and jQuery.</li>
            <li>Integrated frontend code with server-side logic to create dynamic pages.</li>
            <li>Designed responsive interfaces optimizing layouts for various devices.</li>
            <li>Debugged and optimized code for performance and scalability.</li>
            <li>Collaborated with backend developers to integrate UI elements.</li>
            <li>Developed applications using ReactJS with Redux and RESTful APIs.</li>
          </ul>
        </div>
      </section>

      {/* Education Section */}
      <section className="mt-6 pt-24">
        <h2 className="section-title">Education</h2>
        <p className="section-text">
          <strong>Bachelor of Commerce (B.Com)</strong> | N.P. Arts & Commerce College, Keshod | May 2021
        </p>
        <p className="section-text">
          <strong>H.S.C. (12th Grade)</strong> | Dudalal Dhanji Ladani High School, Keshod | May 2016
        </p>
        <p className="section-text">
          <strong>S.S.C. (10th Grade)</strong> | Shree Hathisinhji Vinay Mandir, Keshod | May 2014
        </p>
      </section>

      {/* Certifications Section */}
      <section className="mt-6">
        <h2 className="section-title">Certifications</h2>
        <p className="section-text">
          <strong>Frontend Development</strong> - TOPS Technologies | HTML, CSS, JavaScript, ReactJS, Redux,
          Bootstrap, jQuery | 11/01/22 - 08/31/23
        </p>
      </section>

      {/* Projects Section */}
      <section className="mt-6">
        <h2 className="section-title">Projects</h2>
        <div className="mb-4">
          <h3 className="project-title">Flight Booking App</h3>
          <ul className="list-disc ml-6 section-text">
            <li>Developed a React-based flight booking app with API integration for flight searches, ticket views, and secure payments.</li>
            <li>Created a dashboard for ticket and user information management.</li>
          </ul>
          <p className="section-text">Technologies: React, JavaScript, CSS, HTML, Airline API, Payment API</p>
        </div>

        <div className="mb-4">
          <h3 className="project-title">Admin Panel</h3>
          <ul className="list-disc ml-6 section-text">
            <li>Built an admin panel using React and Redux for efficient data management and user role-based access.</li>
          </ul>
          <p className="section-text">Technologies: React, Redux, Tailwind</p>
        </div>
      </section>

      {/* Languages Section */}
      <section className="mt-6">
        <h2 className="section-title">Languages</h2>
        <ul className="list-disc ml-6 section-text">
          <li>Gujarati</li>
          <li>Hindi</li>
          <li>English</li>
        </ul>
      </section>

      {/* Links Section */}
      <section className="mt-6">
        <h2 className="section-title">Links</h2>
        <ul className="section-text">
          <li>
            Portfolio:{" "}
            <span
              className="text-accent"
              onClick={() => openLink("https://modernreact-jade.vercel.app/")}
            >
             https://modernreact-jade.vercel.app/
            </span>
          </li>
          <li>
            LinkedIn:{" "}
            <span
              className="text-accent"
              onClick={() => openLink("https://www.linkedin.com/in/navneet-sondarva-46123b193/")}
            >
              https://www.linkedin.com/in/navneet-sondarva-46123b193/
            </span>
          </li>
          <li>
            GitHub:{" "}
            <span
              className="text-accent"
              onClick={() => openLink("https://github.com/navnee8989")}
            >
              https://github.com/navnee8989
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ResumePrint;
