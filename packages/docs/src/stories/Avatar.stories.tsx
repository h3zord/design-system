import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@h3zord-ui-ignite-call/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/h3zord.png',
    alt: 'Lucas Chavarem',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
