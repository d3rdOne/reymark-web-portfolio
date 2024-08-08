import { Technology } from "./technology";

export interface Project {
  snapshot: string,
  title: string,
  url: string,
  description: string,
  technologies: Technology[]
}