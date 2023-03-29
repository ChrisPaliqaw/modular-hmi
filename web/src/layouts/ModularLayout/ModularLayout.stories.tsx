import type { ComponentMeta, ComponentStory } from '@storybook/react'

import ModularLayout from './ModularLayout'

export const generated: ComponentStory<typeof ModularLayout> = (args) => {
  return <ModularLayout {...args} />
}

export default {
  title: 'Layouts/ModularLayout',
  component: ModularLayout,
} as ComponentMeta<typeof ModularLayout>
