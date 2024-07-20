const resumeData = {
  projects: [
    {
      name: "Ticket Booking and Re-sale Mobile App",
      description:
        "Led the front-end development using React Native and Native Wind, optimized features for smooth ticket booking and resale processes, ensured a responsive and visually appealing UI, utilized React Native for cross-platform compatibility, and integrated Firebase for backend functionality.",
      technologies: ["React Native", "Native Wind", "Firebase"],
      role: "Front-end Developer",
    },
    {
      name: "Ticket Resale - Admin Dashboard",
      description:
        "Developed the entire admin dashboard front-end using React.js and integrated Firebase to handle real-time data updates and backend functionalities. Ensured a user-friendly interface and smooth navigation for admin users, focusing on creating a visually appealing and responsive design that meets high-quality standards.",
      technologies: ["React.js", "Firebase"],
      role: "Front-end Developer",
    },
    {
      name: "Bill Management - Web Application",
      description:
        "Led the development of a versatile Bill Generating Web App using HTML, CSS, JavaScript, and Bootstrap. Designed a user-friendly interface for various settings, ensuring a responsive experience across devices. Incorporated dynamic functionalities using JavaScript and created an aesthetically pleasing and functional interface. Developed a flexible solution for diverse business environments, addressing the needs of supermarkets, pharmacies, bakeries, and more with a single application.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      role: "Front-end Developer",
    },
    {
      name: "DevOps Dashboard - Web Application",
      description:
        "Developed the front-end for automating resource creation across major cloud providers using HTML, CSS, JavaScript, and Bootstrap. Created an intuitive, visually appealing interface for easy navigation and ensured responsiveness with Bootstrap's grid system. Collaborated with back-end developers for integration, demonstrating proficiency in front-end development and contributing to project success with a focus on front-end tasks and a seamless user experience.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      role: "Front-end Developer",
    },
  ],
  experience: [
    {
      duration: "1 year",
      type: "Self-taught",
      roles: [
        "Developed responsive web applications using HTML, CSS, and JavaScript",
        "Built dynamic user interfaces with React.js and React Native for cross-platform mobile apps",
        "Styled applications consistently using Bootstrap and Tailwind CSS",
        "Collaborated with designers and backend developers for seamless integration",
        "Actively participated in agile development processes, including sprint planning, stand-up meetings, and retrospectives",
        "Stayed updated with the latest frontend technologies and best practices",
      ],
    },
  ],
  ticketResaleApp: {
    supportedTickets: ["movie tickets", "sports tickets"],
    authentication: "mobile number OTP",
    userTypes: {
      uploader: {
        requirements: ["bank account details"],
      },
      buyer: {
        requirements: ["WhatsApp number", "email"],
      },
    },
  },
};

// Iterating using for loop
for (let i = 0; i < resumeData.projects.length; i++) {
  console.log(resumeData.projects[i].name);
}

// Iterating using for...in loop
for (let key in resumeData) {
  console.log(key);
  if (Array.isArray(resumeData[key])) {
    for (let i = 0; i < resumeData[key].length; i++) {
      console.log(resumeData[key][i]);
    }
  } else {
    console.log(resumeData[key]);
  }
}

// Iterating using for...of loop
for (let project of resumeData.projects) {
  console.log(project.name);
}

// Iterating using forEach loop
resumeData.projects.forEach((project) => {
  console.log(project.name);
});
