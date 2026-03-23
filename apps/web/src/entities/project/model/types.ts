export enum ProjectStatus {
    Active = 'active',
    Completed = 'completed',
    Archived = 'archived',
}

export interface Project {
     id: string
  name: string
  address: string   
  status: ProjectStatus
  budget: number     
  createdAt: string   // ISO-дата, например "2024-01-15" 
}