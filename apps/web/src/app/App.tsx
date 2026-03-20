import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'

import { AppRouter } from './providers/router'

export function App() {
  return (
    <MantineProvider>
      <Notifications />
      {/* AppRouter рендерит нужную страницу в зависимости от текущего URL */}
      <AppRouter />
    </MantineProvider>
  )
}
