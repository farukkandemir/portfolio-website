import BlogApp from "../assets/images/Blog.png";
import JobApp from "../assets/images/Job1.png";
import Todo from "../assets/images/Todo.png";
import YoutubeApp from "../assets/images/YoutubeApp.png";
import MovieApp from "../assets/images/MovieApp.png";
import WeatherApp from "../assets/images/WeatherApp.png";
import Calculator from "../assets/images/Calculator.png";
import NoteApp from "../assets/images/NoteApp.png";
import ExpenseApp from "../assets/images/ExpenseApp.png";

export const projects = [
  {
    name: "Youtube",
    section: "React",
    href: YoutubeApp,
    github: "https://github.com/farukkandemir/youtube-clone",
    live: "https://fk-media.netlify.app",
  },
  {
    name: "Mern-BlogApp",
    section: "Mern",
    href: BlogApp,
    github: "https://github.com/farukkandemir/Mern-BlogApp",
    live: "https://mern-blog.onrender.com",
  },
  {
    name: "MovieHell",
    section: "React",
    href: MovieApp,
    github: "https://github.com/farukkandemir/movieApp",
    live: "https://fk-moviehell.netlify.app",
  },
  {
    name: "WeatherApp",
    section: "React",
    href: WeatherApp,
    github: "https://github.com/farukkandemir/weatherApp",
    live: "",
  },
  {
    name: "Mern-JobTracker",
    section: "Mern",
    href: JobApp,
    github: "https://github.com/farukkandemir/Mern-JobTracker",
    live: "https://mern-job.onrender.com",
  },
  {
    name: "Calculator",
    section: "React",
    href: Calculator,
    github: "https://github.com/farukkandemir/calculator",
    live: "https://farukkandemir.github.io/calculator",
  },
  {
    name: "NoteApp",
    section: "React",
    href: NoteApp,
    github: "https://github.com/farukkandemir/NoteApp",
    live: "https://farukkandemir.github.io/NoteApp",
  },
  {
    name: "Mern-Todo",
    section: "Mern",
    href: Todo,
    github: "https://github.com/farukkandemir/Mern-Todo",
    live: "https://mern-todo-ap9u.onrender.com",
  },
  {
    name: "ExpenseApp",
    section: "React",
    href: ExpenseApp,
    github: "https://github.com/farukkandemir/budgetplanner",
    live: "https://farukkandemir.github.io/budgetplanner",
  },
];

export const categories = [{name: "All"}, {name: "Mern"}, {name: "React"}];

export const skills = [
  {class: "devicon-javascript-plain", name: "JavaScript"},
  {class: "devicon-html5-plain-wordmark", name: "HTML5"},
  {class: "devicon-css3-plain", name: "CSS"},
  {class: "devicon-tailwindcss-plain", name: "TailwindCss"},
  {class: "devicon-react-original", name: "React"},
  {class: "devicon-nodejs-plain", name: "NodeJs"},
  {class: "devicon-bootstrap-plain", name: "Bootstrap"},
  {class: "devicon-mongodb-plain", name: "MongoDb"},
  {class: "devicon-redux-plain", name: "Redux"},
  {class: "devicon-materialui-plain", name: "MaterialUI"},
];

export const navlinks = [
  {id: "I.", name: "Home", href: "#"},
  {id: "II.", name: "About", href: "#about"},
  {id: "III.", name: "Work", href: "#work"},

  {id: "V.", name: "Contact", href: "#contact"},
];
