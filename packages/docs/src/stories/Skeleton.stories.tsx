import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from '@h3zord-ui-ignite-call/react'
import { SkeletonProps } from '@h3zord-ui-ignite-call/react'

export default {
  title: 'Surfaces/Skeleton',
  component: Skeleton,
  args: {
    variant: 'rounded',
    animation: 'pulse',
    width: '300px',
    height: '100px',
  },
  argTypes: {
    animation: {
      options: ['pulse', 'wave'],
      control: {
        type: 'inline-radio',
      },
    },
    variant: {
      options: ['rounded', 'circular', 'rectangular', 'text'],
      control: {
        type: 'inline-radio',
      },
    },
  }
} as Meta<SkeletonProps>

export const Primary: StoryObj<SkeletonProps> = {}
