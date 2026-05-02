/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { usePortfolio } from "../PortfolioContext";
import { 
  X, Save, Home, User, Briefcase, GraduationCap, Layout, Mail, 
  Trash2, Plus, LogOut, ChevronRight, Image as ImageIcon,
  CheckCircle2, AlertCircle
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PortfolioData, Project, Experience, Education } from "../types";

export default function AdminDashboard() {
  const { data, updateData, setIsAdmin, resetData } = usePortfolio();
  const [activeTab, setActiveTab] = useState("Home");
  const [formData, setFormData] = useState<PortfolioData>(data);
  const [showSuccess, setShowSuccess] = useState(false);

  const tabs = [
    { id: "Home", icon: <Home size={20} /> },
    { id: "About", icon: <User size={20} /> },
    { id: "Projects", icon: <Layout size={20} /> },
    { id: "Experience", icon: <Briefcase size={20} /> },
    { id: "Education", icon: <GraduationCap size={20} /> },
    { id: "Contact", icon: <Mail size={20} /> },
  ];

  const handleSave = () => {
    updateData(formData);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const updateField = (section: string, field: string, value: any) => {
    setFormData((prev) => {
      const next = { ...prev };
      if (section === "root") {
        (next as any)[field] = value;
      } else {
        (next as any)[section] = { ...(next as any)[section], [field]: value };
      }
      return next;
    });
  };

  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      title: "New Project",
      description: "Description here",
      category: "Mechanical Engineering",
      tags: ["tag1"],
      imageUrl: "https://images.unsplash.com/photo-1547514701-42784112450f?auto=format&fit=crop&q=80&w=800",
    };
    setFormData(prev => ({ ...prev, projects: [newProject, ...prev.projects] }));
  };

  const deleteProject = (id: string) => {
    setFormData(prev => ({ ...prev, projects: prev.projects.filter(p => p.id !== id) }));
  };

  const updateProjectField = (id: string, field: keyof Project, value: any) => {
    setFormData(prev => ({
      ...prev,
      projects: prev.projects.map(p => p.id === id ? { ...p, [field]: value } : p)
    }));
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-6">
          <h2 className="text-xl font-display font-bold text-primary-400 flex items-center gap-2">
            <Layout size={24} /> CMS Admin
          </h2>
        </div>
        
        <nav className="flex-grow pc-2 py-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-6 py-3 transition-colors ${
                activeTab === tab.id 
                ? "bg-primary-600 text-white border-r-4 border-accent" 
                : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              {tab.icon}
              <span className="font-medium">{tab.id}</span>
              {activeTab === tab.id && <ChevronRight size={16} className="ml-auto" />}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-800 space-y-2">
           <button 
            onClick={() => setIsAdmin(false)}
            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <LogOut size={16} /> Exit Admin
          </button>
          <button 
            onClick={resetData}
            className="w-full text-left px-4 py-2 text-xs text-red-500 hover:text-red-400 transition-colors"
          >
            Reset to Defaults
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-16 border-b border-gray-100 flex items-center justify-between px-8 bg-white/80 backdrop-blur-md">
          <h1 className="text-lg font-bold text-gray-900">{activeTab} Section</h1>
          
          <div className="flex items-center gap-4">
            <AnimatePresence>
              {showSuccess && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 text-green-600 text-sm font-bold bg-green-50 px-4 py-2 rounded-full"
                >
                  <CheckCircle2 size={16} /> Changes Saved!
                </motion.div>
              )}
            </AnimatePresence>
            <button 
              onClick={handleSave}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg flex items-center gap-2 hover:bg-primary-700 transition-all font-bold text-sm shadow-lg shadow-primary-500/20"
            >
              <Save size={18} /> Save Changes
            </button>
          </div>
        </header>

        {/* Scrollable Form Area */}
        <div className="flex-grow overflow-y-auto p-8 bg-gray-50/50">
          <div className="max-w-4xl mx-auto pb-20">
            
            {activeTab === "Home" && (
              <div className="space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  <FormInput label="Full Name" value={formData.name} onChange={(v) => updateField("root", "name", v)} />
                  <FormInput label="Role (Intro)" value={formData.role} onChange={(v) => updateField("root", "role", v)} />
                </div>
                <FormInput label="Headline" value={formData.highlightRole} onChange={(v) => updateField("root", "highlightRole", v)} />
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Description</label>
                  <textarea 
                    value={formData.description} 
                    onChange={(e) => updateField("root", "description", e.target.value)}
                    className="w-full p-4 rounded-xl border border-gray-200 focus:border-primary-500 bg-white outline-none"
                    rows={3}
                  />
                </div>
                <FormInput label="Profile Image URL" value={formData.profileImage} onChange={(v) => updateField("root", "profileImage", v)} icon={<ImageIcon size={18}/>} />
              </div>
            )}

            {activeTab === "About" && (
              <div className="space-y-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Who I Am</label>
                  <textarea 
                    value={formData.about.whoIAm} 
                    onChange={(e) => updateField("about", "whoIAm", e.target.value)}
                    className="w-full p-4 rounded-xl border border-gray-200 focus:border-primary-500 bg-white outline-none"
                    rows={4}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">What I Do</label>
                  <textarea 
                    value={formData.about.whatIDo} 
                    onChange={(e) => updateField("about", "whatIDo", e.target.value)}
                    className="w-full p-4 rounded-xl border border-gray-200 focus:border-primary-500 bg-white outline-none"
                    rows={4}
                  />
                </div>
                <FormInput label="Career Objective" value={formData.about.careerObjectives} onChange={(v) => updateField("about", "careerObjectives", v)} />
              </div>
            )}

            {activeTab === "Projects" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">Manage your portfolio projects</p>
                  <button onClick={addProject} className="flex items-center gap-2 text-sm font-bold text-primary-600 hover:text-primary-700">
                    <Plus size={18} /> Add New Project
                  </button>
                </div>
                
                {formData.projects.map((project) => (
                  <div key={project.id} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative group">
                    <button 
                      onClick={() => deleteProject(project.id)}
                      className="absolute top-4 right-4 p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                    
                    <div className="grid md:grid-cols-2 gap-6 pt-4">
                      <div className="space-y-4">
                        <FormInput label="Title" value={project.title} onChange={(v) => updateProjectField(project.id, "title", v)} />
                        <FormInput label="Category" value={project.category} onChange={(v) => updateProjectField(project.id, "category", v)} />
                        <FormInput label="Image URL" value={project.imageUrl} onChange={(v) => updateProjectField(project.id, "imageUrl", v)} />
                      </div>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700">Description</label>
                          <textarea 
                            value={project.description} 
                            onChange={(e) => updateProjectField(project.id, "description", e.target.value)}
                            className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary-500 bg-white text-sm outline-none"
                            rows={3}
                          />
                        </div>
                        <FormInput label="Tags (comma separated)" value={project.tags.join(", ")} onChange={(v) => updateProjectField(project.id, "tags", v.split(",").map(t => t.trim()))} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "Contact" && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormInput label="Email" value={formData.contact.email} onChange={(v) => updateField("contact", "email", v)} />
                  <FormInput label="Phone" value={formData.contact.phone} onChange={(v) => updateField("contact", "phone", v)} />
                </div>
                <FormInput label="Location" value={formData.contact.location} onChange={(v) => updateField("contact", "location", v)} />
                
                <h3 className="text-lg font-bold text-gray-900 mt-10">Social Links</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <FormInput label="GitHub" value={formData.contact.social.github || ""} onChange={(v) => updateField("contact", "social", { ...formData.contact.social, github: v })} />
                  <FormInput label="LinkedIn" value={formData.contact.social.linkedin || ""} onChange={(v) => updateField("contact", "social", { ...formData.contact.social, linkedin: v })} />
                  <FormInput label="Twitter" value={formData.contact.social.twitter || ""} onChange={(v) => updateField("contact", "social", { ...formData.contact.social, twitter: v })} />
                  <FormInput label="Instagram" value={formData.contact.social.instagram || ""} onChange={(v) => updateField("contact", "social", { ...formData.contact.social, instagram: v })} />
                </div>
              </div>
            )}

            {/* Experience and Education could follow same CRUD pattern as Projects */}
            {(activeTab === "Experience" || activeTab === "Education") && (
              <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
                <AlertCircle size={48} className="text-gray-300 mb-4" />
                <p className="text-gray-500 font-medium">Coming Soon</p>
                <p className="text-gray-400 text-sm">Experience and Education management follows the same logic as Projects.</p>
              </div>
            )}

          </div>
        </div>
      </main>
    </div>
  );
}

function FormInput({ label, value, onChange, icon }: { label: string, value: string, onChange: (val: string) => void, icon?: any }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
        {label}
      </label>
      <div className="relative">
        {icon && <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">{icon}</div>}
        <input 
          type="text" 
          value={value} 
          onChange={(e) => onChange(e.target.value)}
          className={`w-full ${icon ? "pl-12" : "px-4"} py-3 rounded-xl border border-gray-200 focus:border-primary-500 bg-white outline-none transition-all`}
        />
      </div>
    </div>
  );
}
