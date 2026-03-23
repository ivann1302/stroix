import { NavLink } from "react-router-dom";
import styles from './Sidebar.module.scss'


const NAV_ITEMS = [
  { to: '/dashboard', label: 'Проекты' },
  { to: '/clients', label: 'Клиенты' },
  { to: '/tasks', label: 'Задачи' },
  { to: '/team', label: 'Команда' },
] as const;


export function Sidebar() {
    return (
    <aside className={styles.sidebar}>
        <div className={styles.logo}>Stroix</div>
        <nav className={styles.nav}>
                {NAV_ITEMS.map(({ to, label }) => (
          // NavLink — как Link, но автоматически добавляет класс "active"
          // когда текущий URL совпадает с to
          <NavLink
            key={to}
            to={to}
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