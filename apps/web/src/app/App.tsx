import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'

export function App() {
  return (
    <MantineProvider>
      <Notifications />
      <h1>Строикс</h1>
    </MantineProvider>
  )
}
