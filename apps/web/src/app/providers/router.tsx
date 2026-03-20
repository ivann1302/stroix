import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
        // временная загрузка страницы
        lazy: async () => {
            const { LoginPage } = await import('@/pages/auth/ui/LoginPage') 
            return { Component: LoginPage }
        },
    }
])

// AppRouter — компонент-провайдер, который 
// делает роутинг доступным всему приложению
export function AppRouter() {
    return <RouterProvider router={router} />
}