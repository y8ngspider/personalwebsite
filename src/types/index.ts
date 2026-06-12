export interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  category: 'SWE' | 'Finance' | 'Tools'
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}

export interface Experience {
  id: string
  role: string
  company: string
  location: string
  startDate: string
  endDate: string
  bullets: string[]
  type: 'Internship' | 'Research' | 'Military' | 'Leadership'
}

export interface SkillGroup {
  category: string
  skills: string[]
}

export interface BlogPost {
  id: string
  title: string
  date: string
  description: string
  tags: string[]
}
