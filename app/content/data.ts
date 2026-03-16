import { FiZap, FiTool, FiSmartphone, FiLayers } from "react-icons/fi";
import {
    FaReact,
    FaGitAlt,
    FaFigma,
    FaGithub,
    FaTelegramPlane,
} from "react-icons/fa";

import {
    SiTypescript,
    SiTailwindcss,
    SiWebpack,
    SiJest,
    SiVite,
    SiRedux,
    SiNextdotjs,
    SiEslint,
    SiVercel,
} from "react-icons/si";

import { FiGlobe, FiActivity, FiMonitor } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";

export const navLinks = [
    { href: "#about", key: "about" },
    { href: "#skills", key: "skills" },
    { href: "#projects", key: "projects" },
    { href: "#contact", key: "contact" },
];

export const heroContent = {
    skills: ["React", "TypeScript", "Next.js"],
};

export const aboutContent = {
    plaques: [
        { title: "ES6+", key: "es6" },
        { title: "Git", key: "git" },
        { title: "15+", key: "projects" },
        { title: "100%", key: "details" },
    ],
    items: [
        { icon: FiZap, key: "optimization" },
        { icon: FiTool, key: "stack" },
        { icon: FiSmartphone, key: "adaptive" },
        { icon: FiLayers, key: "components" },
    ],
};

export const skillContent = {
    skills: [
        { icon: FaReact, name: "React" },
        { icon: SiTypescript, name: "TypeScript" },
        { icon: SiTailwindcss, name: "Tailwind" },
        { icon: SiWebpack, name: "Webpack" },
        { icon: FaGitAlt, name: "Git" },
        { icon: FaFigma, name: "Figma" },
        { icon: SiJest, name: "Jest" },
        { icon: SiVite, name: "Vite" },
        { icon: SiRedux, name: "Redux" },
        { icon: SiNextdotjs, name: "Next.js" },
        { icon: SiEslint, name: "ESLint" },
        { icon: FiGlobe, name: "REST API" },
        { icon: FiActivity, name: "WebSocket" },
        { icon: SiVercel, name: "Vercel" },
        { icon: FiMonitor, name: "SPA" },
    ],
};

type Project = {
    key: string;
    img: string;
    link: string;
    gradient?: string;
    tags: string[];
};

export const projectsContent = {
    projects: <Project[]>[
        {
            key: "manicure",
            img: "/projects/1.png",
            link: "https://asimo-git.github.io/lightweight-template/",
            tags: ["JavaScript", "CSS", "Vite"],
        },
        {
            key: "rickmorty",
            img: "/projects/2.png",
            link: "https://asimo-git.github.io/rick-and-morty-task",
            tags: ["React", "JavaScript", "WebSocket"],
        },
        {
            key: "coffee",
            img: "/projects/3.png",
            link: "https://asimo-git.github.io/coﬀee-house",
            tags: ["CSS", "JavaScript"],
        },
        {
            key: "calendar",
            img: "/projects/4.png",
            link: "https://asimo-git.github.io/rick-and-morty-task",
            tags: ["React", "TypeScript", "Next.js", "Vercel", "SPA"],
        },
        {
            key: "crypto",
            img: "/projects/5.png",
            link: "https://crypto-tracker-asimo.vercel.app/",
            tags: [
                "React",
                "Redux Toolkit",
                "WebSocket",
                "Next.js",
                "TypeScript",
                "Vercel",
            ],
        },
        {
            key: "arendomania",
            img: "/projects/6.png",
            link: "https://daily-rent-of-housing-fontend-react.vercel.app/",
            tags: ["React", "Redux Toolkit", "Next.js", "TypeScript", "Vercel"],
        },
    ],
};

export const contactsContent = {
    items: [
        {
            label: "Email",
            href: "mailto:rvolenc@gmail.com",
            icon: HiOutlineMail,
            text: "rvolenc@gmail.com",
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/ekaterina-kovaleva-93a466335",
            icon: BsLinkedin,
            text: "LinkedIn",
        },
        {
            label: "GitHub",
            href: "https://github.com/asimo-git",
            icon: FaGithub,
            text: "GitHub",
        },
        {
            label: "Telegram",
            href: "https://t.me/AsimoRi",
            icon: FaTelegramPlane,
            text: "Telegram",
        },
    ],
};
