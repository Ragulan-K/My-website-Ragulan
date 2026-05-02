/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  category: "Mechanical Engineering" | "Software Development" | "Research" | string;
  tags: string[];
  imageUrl: string;
  projectUrl?: string;
  detailsUrl?: string;
}

export interface Experience {
  id: string;
  date: string;
  role: string;
  organization: string;
  location: string;
  description: string;
  skills: string[];
  imageUrl?: string;
}

export interface Education {
  id: string;
  date: string;
  degree: string;
  institution: string;
  gpa?: string;
  details?: string;
  skills?: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface PortfolioData {
  name: string;
  role: string;
  highlightRole: string;
  description: string;
  profileImage: string;
  about: {
    whoIAm: string;
    whatIDo: string;
    careerObjectives: string;
  };
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  version?: number;
  contact: {
    email: string;
    phone: string;
    location: string;
    social: {
      github?: string;
      linkedin?: string;
      twitter?: string;
      instagram?: string;
    };
  };
}
