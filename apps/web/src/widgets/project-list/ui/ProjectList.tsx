import { Project } from '@/entities/project'
import { ProjectCard } from '@/entities/project/ui/ProjectCard'
import styles from './ProjectList.module.scss'

interface ProjectListProps {
  projects: Project[]
}

export function ProjectList({ projects }: ProjectListProps) {
  if (projects.length === 0) {
    return <p className={styles.empty}>Проектов пока нет</p>
  }

  return (
    // Сетка карточек — на широком экране 3 колонки, на узком — меньше (через CSS)
    <div className={styles.grid}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}