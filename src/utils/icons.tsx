import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faEnvelope,
  faGlobe,
  faMoon,
  faPhone,
  faSun,
  faArrowUpRightFromSquare,
  faDownload,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBootstrap,
  faGithub,
  faLinkedin,
  faReact,
  faSquareJs,
  faCss3,
  faHtml5,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

export const iconMap = {
  html: faHtml5,
  css: faCss3,
  js: faSquareJs,
  ts: faCode,
  tailwind: faCode,
  bootstrap: faBootstrap,
  react: faReact,
  api: faGlobe,
  github: faGithub,
  linkedin: faLinkedin,
  email: faEnvelope,
  phone: faPhone,
  moon: faMoon,
  sun: faSun,
  external: faArrowUpRightFromSquare,
  download: faDownload,
  menu: faBars,
  close: faXmark,
  git: faGitAlt,
};

export function SkillIcon({ name }: { name: keyof typeof iconMap }) {
  return <FontAwesomeIcon icon={iconMap[name]} aria-hidden="true" />;
}