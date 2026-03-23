import { Outlet } from "react-router-dom"; // Outlet — специальный компонент React Router, который рендерит дочерний маршрут.
import { Sidebar } from "@/widgets/sidebar";
import { Header } from "@/widgets/header";
import styles from './MainLayout.module.scss'


export function MainLayout() {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.content}>
        <Header />
        <main className={styles.main}>
          <Outlet />
        </main> 
      </div>
    </div>
  )
}