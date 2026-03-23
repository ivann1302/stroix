import { useState } from 'react';
import { Outlet } from "react-router-dom"; // Outlet — специальный компонент React Router, который рендерит дочерний маршрут.
import { Sidebar } from "@/widgets/sidebar";
import { Header } from "@/widgets/header";
import styles from './MainLayout.module.scss'


export function MainLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    function toggleSidebar() {
        setIsSidebarOpen((prev) => !prev);
    }

    function closeSidebar() {
        setIsSidebarOpen(false);
    }

  return (
    <div className={styles.layout}>
        {/*Оверлей затемнение на мобильной версии*/}
        {isSidebarOpen && (
            <div className={styles.overlay} onClick={closeSidebar} />
        )}
        {/*isOpen передаем в Sidebar чтобы он знал показываться или нет*/}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <div className={styles.content}>
        {/*onToggleSidebar передаем в Header для кнопки гамбургера*/}
        <Header onToggleSidebar={toggleSidebar} />
        <main className={styles.main}>
          <Outlet />
        </main> 
      </div>
    </div>
  )
}