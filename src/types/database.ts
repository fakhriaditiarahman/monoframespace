// Database types based on PRD schema

export interface Order {
  id: string
  created_at: string
  name: string
  email: string
  phone: string
  service: 'monobox' | 'monodev' | 'studio'
  package?: string
  event_date?: string
  message: string
  status: 'pending' | 'in_progress' | 'completed' | 'rejected'
}

export interface Portfolio {
  id: string
  service: 'monobox' | 'monodev' | 'studio'
  title: string
  description: string
  image_url: string
  created_at: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  rating: number
  image_url?: string
  created_at: string
}

export interface PageContent {
  id: string
  page: string
  key: string
  content: string
  updated_at: string
}

export interface Settings {
  id: string
  key: string
  value: string
  updated_at: string
}

export interface Profile {
  id: string
  email: string
  role: 'admin' | 'user'
  created_at: string
}
