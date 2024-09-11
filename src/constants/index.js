import todoProject from '../assets/projects/todo-project.png';
import weatherProject from '../assets/projects/weather-project.png';
import portfolioProject from '../assets/projects/portfolio-project.png';

export const HERO_CONTENT = `I am a dedicated Full Stack Web Developer with a passion for continuous learning and growth in coding. With a strong foundation in front-end technologies like React and Python, paired with back-end expertise in Node.js and MongoDB, I strive to create innovative and impactful digital experiences. My goal is to continuously refine my skills while delivering high-quality, memorable work.`;

export const ABOUT_TEXT = `I am a dedicated student of my craft, driven by a passion for creating high-quality applications. With 2 years of coding experience and a Full Web Development certification from CareerFoundry’s comprehensive bootcamp, I’m constantly pushing myself to grow and refine my skills. My coding journey has just begun, and I’m committed to continuous learning, always seeking to improve in areas that need enhancement. I thrive in collaborative environments, where teamwork and shared goals lead to innovative solutions and stronger results.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Fullstack Web Developer Student",
    company: "CareerFoundry",
    description: `Completed a comprehensive full-stack web development course, gaining hands-on experience with front-end and back-end technologies. Developed a variety of projects, including API based applications, task management apps, and chat/blog platforms.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB", "Python", "Django"],
  },
];

export const PROJECTS = [
  {
    title: "Weather App",
    image: weatherProject,
    description:
      "Online Weather app that uses an API to fetch weather data for any city in the world.",
    technologies: ["HTML", "CSS", "React", "Node.js"],
    website: "https://drewschmidt145.github.io/weather-app/",
    github: "https://github.com/drewschmidt145/weather-app",
  },
  {
    title: "Task Management App",
    image: todoProject,
    description:
      "App thats allows users to create, view, and edit tasks for the user to keep track of their daily assignments.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    website: "https://drewschmidt145.github.io/react-todo/",
    github: "https://github.com/drewschmidt145/react-todo",
  },
  {
    title: "Portfolio Website",
    image: portfolioProject,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    website: "drewschmidt.com",
    github: "https://github.com/drewschmidt145/react-portfolio",
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153",
  phoneNo: "480-710-9662",
  email: "DrewSchmidt145@gmail.com",
};
