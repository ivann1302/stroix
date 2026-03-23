import { useNavigate } from 'react-router-dom';
import styles from './Header.module.scss'

// Временные данные — в шаге 11 заменим на реального пользователя из store
const MOCK_USER = { name: 'Иван Директоров' }

interface HeaderProps {
    onToggleSidebar: () => void
}

export function Header({ onToggleSidebar }: HeaderProps) {
    const navigate = useNavigate();

    function handleLogout() {
        navigate('/login')
    }

      return (
    <header className={styles.header}>
        <button
            className={styles.burgerBtn}
            onClick={onToggleSidebar}
            aria-label="Открыть меню"
        >
            ☰
        </button>
      <div className={styles.spacer} />
      <div className={styles.user}>{MOCK_USER.name}</div>
      <button className={styles.logoutBtn} onClick={handleLogout}>
        Выйти
      </button>
    </header>
      )

}
