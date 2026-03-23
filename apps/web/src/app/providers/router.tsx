import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';

const router = createBrowserRouter([
    {
        path: '/login',
        // lazy import - страница загружается по запросу
        // когда пользователь переходит на эту страницу
        lazy: async () => {
            const { LoginPage } = await import('@/pages/auth/ui/LoginPage')
            return { Component: LoginPage }
        },
    },
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true, // маршрут по умолчанию
                lazy: async () => {
                    const { DashboardPage } = await import('@/pages/dashboard/index')
                    return { Component: DashboardPage }
                },
            },
            {
                path: 'dashboard',
                lazy: async () => {
                const { DashboardPage } = await import('@/pages/dashboard/index')
                return { Component: DashboardPage }
        },
            }
        ]
    },
])

// AppRouter — компонент-провайдер, который 
// делает роутинг доступным всему приложению
export function AppRouter() {
    return <RouterProvider router={router} />
}