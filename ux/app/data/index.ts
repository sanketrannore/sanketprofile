import { IconType } from "react-icons";
import { FaInfoCircle, FaProjectDiagram, FaQuoteRight, FaEnvelope, FaHome } from "react-icons/fa";

interface NavItem {
  name: string;
  link: string;
  icon: IconType;
}

export const navItems: NavItem[] = [
  { name: "Home", link: "#", icon: FaHome },
  { name: "About", link: "#about", icon: FaInfoCircle },
  { name: "Projects", link: "#projects", icon: FaProjectDiagram },
  { name: "Testimonials", link: "#testimonials", icon: FaQuoteRight },
  { name: "Contact", link: "#contact", icon: FaEnvelope },
];

export const workExp = [
  {
    id: 1,
    title: "Software Developer",
    des: `As a recent graduate entering the tech industry, I’ve already had the opportunity to apply my skills in
            building real-world applications. One of my key projects, 'Portqii Campaign Orchestrator,' allowed me to
            dive deep into React development, where I contributed to creating a dynamic, user-friendly interface for
            orchestrating marketing campaigns.`,
    date: "2021 - 2022",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
  },
  {
    id: 2,
    title: "Senior Software Developer",
    des: `As a senior software developer. I’ve played a key role in developing high-performance, 
    scalable applications that cater to both user expectations and business goals. My focus has been on optimizing code
     for maximum speed and efficiency, and designing solutions that effortlessly scale as user demands increase.`,
    date: "2023 - Present",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
  },
];
export const projects = [
  {
    id: 1,
    title: "Software Developer",
    des: `As a recent graduate entering the tech industry, I’ve already had the opportunity to apply my skills in
              building real-world applications. One of my key projects, 'Portqii Campaign Orchestrator,' allowed me to
              dive deep into React development, where I contributed to creating a dynamic, user-friendly interface for
              orchestrating marketing campaigns.`,
    date: "2021 - 2022",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
  },
  {
    id: 2,
    title: "Senior Software Developer",
    des: `As a senior software developer. I’ve played a key role in developing high-performance, 
      scalable applications that cater to both user expectations and business goals. My focus has been on optimizing code
       for maximum speed and efficiency, and designing solutions that effortlessly scale as user demands increase.`,
    date: "2023 - Present",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
  },
];
