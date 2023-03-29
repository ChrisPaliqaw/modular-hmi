import type { ComponentMeta } from '@storybook/react'

import StatusPage from './StatusPage'

export const generated = () => {
  return <StatusPage />
}

export default {
  title: 'Pages/StatusPage',
  component: StatusPage,
} as ComponentMeta<typeof StatusPage>
