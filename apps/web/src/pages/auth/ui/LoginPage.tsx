import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'
import styles from './LoginPage.module.scss'

export function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        console.log('login:', email, password);
        navigate('/dashboard');
    }

    return (
        <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>Строикс</h1>
        <p className={styles.subtitle}>Войдите в аккаунт</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            label="Email"
            type="email"
            placeholder="director@stroix.ru"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Пароль"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" fullWidth>
            Войти
          </Button>
        </form>
      </div>
    </div>
    )

}