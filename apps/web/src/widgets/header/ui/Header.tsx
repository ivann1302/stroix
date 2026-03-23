import { useNavigate } from 'react-router-dom';
import styles from './Header.module.scss'

// Временные данные — в шаге 11 заменим на реального пользователя из store
const MOCK_USER = { name: 'Иван Директоров' }

export function Header() {
    const navigate = useNavigate();

    function handleLogout() {
        // Заглушка — в шаге 11 добавим реальный выход (очистка токена)
        navigate('/login')
    }

      return (
    <header className={styles.header}>
      <div className={styles.user}>{MOCK_USER.name}</div>
      <button className={styles.logoutBtn} onClick={handleLogout}>
        Выйти
      </button>
    </header>
      )

}
