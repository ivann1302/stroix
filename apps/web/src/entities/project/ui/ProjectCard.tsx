import { Project, ProjectStatus } from '../model/types'
import styles from './ProjectCard.module.scss'

interface ProjectCardProps {
  project: Project
}


function getStatusMeta(status: ProjectStatus): { label: string; className: string } {
  switch (status) {
    case ProjectStatus.Active:
      return { label: 'Активный', className: styles.statusActive }
    case ProjectStatus.Completed:
      return { label: 'Завершён', className: styles.statusCompleted }
    case ProjectStatus.Archived:
      return { label: 'Архив', className: styles.statusArchived }
  }
}

function formatBudget(amount: number): string {
  return amount.toLocaleString('ru-RU') + ' ₽'
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { label, className } = getStatusMeta(project.status)

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.name}>{project.name}</h3>
        {/* Бейдж статуса — цвет зависит от className */}
        <span className={[styles.badge, className].join(' ')}>{label}</span>
      </div>

      <p className={styles.address}>{project.address}</p>

      <div className={styles.footer}>
        <span className={styles.budget}>{formatBudget(project.budget)}</span>
        <span className={styles.date}>с {new Date(project.createdAt).toLocaleDateString('ru-RU')}</span>
      </div>
    </div>
  )
}