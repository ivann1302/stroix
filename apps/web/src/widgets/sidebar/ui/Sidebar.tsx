import { NavLink } from "react-router-dom";
import styles from './Sidebar.module.scss'


const NAV_ITEMS = [
  { to: '/dashboard', label: 'Проекты' },
  { to: '/clients', label: 'Клиенты' },
  { to: '/tasks', label: 'Задачи' },
  { to: '/team', label: 'Команда' },
] as const;

interface SidebarProps {
    isOpen: boolean
    onClose: () => void
}
export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    // На мобильном добавляем класс sidebarOpen когда isOpen=true
    <aside className={[styles.sidebar, isOpen ? styles.sidebarOpen : ''].filter(Boolean).join(' ')}>
      <div className={styles.logo}>Строикс</div>

      <nav className={styles.nav}>
        {NAV_ITEMS.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            // При переходе по ссылке закрываем sidebar на мобильном
            onClick={onClose}
            className={({ isActive }) =>
              [styles.navItem, isActive ? styles.navItemActive : ''].filter(Boolean).join(' ')
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
