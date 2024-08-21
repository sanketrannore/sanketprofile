import { link } from "fs";
import { IconType } from "react-icons";
import { FaInfoCircle, FaProjectDiagram, FaQuoteRight, FaEnvelope, FaHome } from "react-icons/fa";

interface NavItem {
  name: string;
  link: string;
  icon: IconType;
}

export const navItems: NavItem[] = [
  //   { name: "Home", link: "#", icon: FaHome },
  { name: "About", link: "#about", icon: FaInfoCircle },
  { name: "Work Experience", link: "#work-experience", icon: FaQuoteRight },
  { name: "Projects", link: "#projects", icon: FaProjectDiagram },

  //   { name: "Contact", link: "#contact", icon: FaEnvelope },
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
    iconLists: ["/re.svg", "/tail.svg", "/fm.svg", "/git.svg"],
  },
  {
    id: 2,
    title: "Senior Software Developer",
    des: `As a senior software developer. I’ve played a key role in developing high-performance, 
    scalable applications that cater to both user expectations and business goals. My focus has been on optimizing code
     for maximum speed and efficiency, and designing solutions that effortlessly scale as user demands increase.`,
    date: "2022 - Present",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg", "/three.svg", "/fm.svg", "/git.svg", "/vercel.svg"],
  },
];
export const projects = [
  {
    id: 1,
    title: "Audienz.ai",
    des: `Audienz.ai is a platform that simplifies customer data collection and utilization for sales and marketing teams.
     As the lead developer, I led a team in designing the UX and implementing the application using React, 
     Frontegg, and Material UI. We integrated powerful features directly with cloud data warehouses, enabling users
      to access and segment customer data in minutes without coding.I also introduced and implemented the error tracking
       tool HyperDX to enhance the platform's reliability. The result is a flexible audience-building tool that allows users
        to visualize audience size, composition, and overlaps for deeper insights and more effective marketing strategies.`,
    date: "2021 - 2022",
    link: "https://connect.portqii.com/",
    iconLists: ["/audienz1img.png", "/audienz2image.png", "/audienz3img.png", "/audienz4img.png", "/audienz5img.png"],
  },
  {
    id: 2,
    title: "Deliver.ai",
    des: `As a senior software developer.Lead frontend development for a business management SASS application, leveraging 
    Material UI to craft intuitive dashboards, successfully implemented features for Contact and 
    Account resolutions, optimized user experience.Demonstrated commitment to excellence in web design and project execution `,
    date: "2023 - Present",
    iconLists: [
      "/delivery5img.png",
      "/delivery2img.png",
      "/delivery3img.png",
      "/delivery4img.png",
      "/delivery1img.png",
    ],
    link: "https://dev.cdpresolution.com/",
  },
  {
    id: 2,
    title: "Octate.ai",
    des: `As a software developer, I played a key role in developing Octate.ai, a powerful tool designed for the social
     B2B marketplace. Octate.ai connects buyers and vendors on a large scale, providing buyers with relevant product
      analysis to assist in purchasing decisions, while enabling vendors to effectively sell their products. The platform was
       built using React.js, React Native, Tailwind CSS, and integrated with Google Analytics and Zoho Chat Bot to enhance
        user experience and performance.`,
    date: "2023 - Present",
    iconLists: ["/octate1img.png", "/octate2img.png", "/octate3img.png", "/octate4img.png", "/octate5img.png"],
    link: "https://octate.ai/",
  },
];
export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Next.js",
    title: "Director of AlphaStream Technologies",
    icon: "/next.svg",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "React.js",
    title: "Director of AlphaStream Technologies",
    icon: "/re.svg",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Framer Motion",
    title: "Director of AlphaStream Technologies",
    icon: "/fm.svg",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Tailwind CSS",
    title: "Director of AlphaStream Technologies",
    icon: "/tail.svg",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Three.js",
    title: "Director of AlphaStream Technologies",
    icon: "/three.svg",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Type Script",
    title: "Director of AlphaStream Technologies",
    icon: "/ts.svg",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Git",
    title: "Director of AlphaStream Technologies",
    icon: "/git.svg",
  },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Vercel",
  //   title: "Director of AlphaStream Technologies",
  //   icon: "/vercel.svg",
  // },
];
