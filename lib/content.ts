import portfolioData from "@/data/portfolio.json";
import projectsData from "@/data/projects.json";

export const portfolio = portfolioData;
export const projects = projectsData;

export type Portfolio = typeof portfolio;
export type Project = (typeof projects)[number];

export const featuredProjects = projects.filter((project) => project.featured);
