/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PortfolioData } from "./types";

export const INITIAL_PORTFOLIO_DATA: PortfolioData = {
  name: "Ragulan Karunanithi",
  role: "Hello, I'm Ragulan Karunanithi",
  highlightRole: "Research Assistant | AI ML Enthusiast",
  description: "Solving complex problems with machine learning and engineering innovations",
  profileImage: "/Ragul.jpg",
  about: {
    whoIAm: "I am an adaptable and responsible graduate seeking an entry-level position in engineering that will utilize the technical and creative skills developed as an undergraduate during professional training sessions. I have a clear, logical mind with a practical approach to problem-solving and a drive to see things through to completion.",
    whatIDo: "Specializing in Machine Learning and Computer Vision applications within the engineering domain, focusing on predictive modeling and automation.",
    careerObjectives: "Seeking roles as ML Engineer, Automobile Engineer, or AI Engineer roles where I can contribute to engineering innovations.",
  },
  skills: [
    { category: "Programming", items: ["Python", "MATLAB", "C++"] },
    { category: "Engineering Design", items: ["SOLIDWORKS", "Ansys"] },
    { category: "Technical Skills", items: ["CFD", "Statistical Analysis", "Predictive Modeling"] },
    { category: "Soft Skills", items: ["Problem Solving", "Leadership", "Team Building"] },
  ],
  projects: [
    {
      id: "1",
      title: "Smart Fish Box Cooler",
      description: "An IoT-enabled temperature-controlled cooling system for fish transportation, optimizing shelf life.",
      category: "Mechanical Engineering",
      tags: ["IoT", "Thermal Systems", "SolidWorks"],
      imageUrl: "https://images.unsplash.com/photo-1519750783826-e2420f4d687f?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "2",
      title: "Automatic Kottu Roti Machine",
      description: "Designed a fully automated mechanical system for Kottu Roti preparation, improving efficiency and hygiene.",
      category: "Mechanical Engineering",
      tags: ["Automation", "Robotics", "CAD"],
      imageUrl: "https://images.unsplash.com/photo-1547514701-42784112450f?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "3",
      title: "Multiphysics + ML Research",
      description: "Combining Computational Fluid Dynamics with Machine Learning for high-fidelity predictive modeling.",
      category: "Research",
      tags: ["CFD", "Scikit-Learn", "Python"],
      imageUrl: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "4",
      title: "Bottle Count Monitoring System",
      description: "Real-time monitoring system using ESP8266 and a custom Python GUI for production lines.",
      category: "Software Development",
      tags: ["ESP8266", "Python", "GUI"],
      imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    },
  ],
  experience: [
    {
      id: "exp0",
      date: "May 15, 2025 - Feb 15, 2026",
      role: "Instructor",
      organization: "SLIIT-Malabe",
      location: "Malabe, Colombo",
      description: "Instructed laboratory sessions, assessed student reports, participated in departmental meetings, and supported academic responsibilities.",
      skills: ["Teaching", "Academic Oversight", "Laboratory Management"],
      imageUrl: "/Ragul 1.jpg",
    },
    {
      id: "exp1",
      date: "Sep 15, 2024 - May 15, 2025",
      role: "Research Assistant",
      organization: "University of Peradeniya & Mokpo National University",
      location: "Collaborative Project",
      description: "Creation of a digital twin for centrifugal pumps, starting with 3D modeling, ICEM meshing and ANSYS CFX simulations.",
      skills: ["Digital Twin", "ANSYS CFX", "3D Modeling"],
    },
    {
      id: "exp2",
      date: "July 2023 - Oct 2023",
      role: "Machine Learning Intern",
      organization: "International Distillers Ltd (IDL)",
      location: "Malabe, Colombo",
      description: "Developed hardware system with ESP8266 for bottle counting, stored data in MySQL, and created a Python Tkinter GUI app for data analysis.",
      skills: ["ESP8266", "MySQL", "Tkinter"],
    },
    {
      id: "exp3",
      date: "July 2022 - Sep 2022",
      role: "Mechanical Engineering Intern on MEP",
      organization: "National Water Supply",
      location: "Kandy, Sri Lanka",
      description: "Worked on developing and optimizing water treatment processes, conducted pump tests, and designed centrifugal pumps using ANSYS CFX.",
      skills: ["MEP", "Pump Testing", "ANSYS CFX"],
    },
  ],
  education: [
    {
      id: "edu0",
      date: "March 16, 2026 - Present",
      degree: "M.Sc. Student in Mechanical Engineering",
      institution: "Mokpo National University",
      details: "CFD analysis of a two-stage pump as turbine evaluating hydraulic performance and internal flow characteristics.",
      skills: ["CFD", "Hydraulic Performance", "Fluid Dynamics"],
    },
    {
      id: "edu1",
      date: "2020 - 2024",
      degree: "B.Sc. Eng (Hons) in Mechanical Engineering",
      institution: "University of Peradeniya",
      gpa: "3.3 / 4.0",
      details: "Won Professor T.D.M.A. Samuel Prize for Enthusiasm and Excellence in Engineering Mathematics.",
      skills: ["Thermodynamics", "Control Systems", "Machine Design"],
    },
    {
      id: "edu2",
      date: "2017 - 2019",
      degree: "GCE Advanced Level",
      institution: "J/Hartley College",
      details: "Winning grade 11 province-level Olympiad.",
      skills: ["Mathematics", "Physics"],
    },
  ],
  version: 2,
  contact: {
    email: "e18269@eng.pdn.ac.lk",
    phone: "+94 76 573 4486",
    location: "Kandy, Sri Lanka",
    social: {
      github: "https://github.com/Ragulan-K",
      linkedin: "https://www.linkedin.com/in/ragulan-karunanithi-29b401220/",
      instagram: "https://www.instagram.com/ragulankarunanithi_17/?hl=en",
    },
  },
};
