import type { ComponentMeta } from '@storybook/react'

import TeleoperationPage from './TeleoperationPage'

export const generated = () => {
  return <TeleoperationPage />
}

export default {
  title: 'Pages/TeleoperationPage',
  component: TeleoperationPage,
} as ComponentMeta<typeof TeleoperationPage>
