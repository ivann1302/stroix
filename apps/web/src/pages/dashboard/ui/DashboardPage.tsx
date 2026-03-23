import { MOCK_PROJECTS } from '@/shared/lib/mock/projects'
import { ProjectStatus } from '@/entities/project'
import { ProjectList } from '@/widgets/project-list'
import styles from './DashboardPage.module.scss'

export function DashboardPage() {
  // Считаем счётчики прямо на странице — в будущем это придёт с сервера
  const total = MOCK_PROJECTS.length
  const active = MOCK_PROJECTS.filter((p) => p.status === ProjectStatus.Active).length
  const completed = MOCK_PROJECTS.filter((p) => p.status === ProjectStatus.Completed).length

  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <h1 className={styles.title}>Проекты</h1>

        {/* Счётчики — быстрый обзор состояния */}
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statValue}>{total}</span>
            <span className={styles.statLabel}>Всего</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>{active}</span>
            <span className={styles.statLabel}>Активных</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>{completed}</span>
            <span className={styles.statLabel}>Завершённых</span>
          </div>
        </div>
      </div>

      <ProjectList projects={MOCK_PROJECTS} />
    </div>
  )
}