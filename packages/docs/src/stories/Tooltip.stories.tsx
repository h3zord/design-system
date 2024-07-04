import { Box, Button, Tooltip, TooltipProps } from "@h3zord-ui-ignite-call/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {
    children: <Button>Hover Me</Button>,
    content: 'This is a Tooltip',
  },
  argTypes: {
    children: {
      control: {
        type: null
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '$20',
            background: '$gray500'
          }}
        >
          {Story()}
        </Box>
      )
    }
  ]
} as Meta

export const Primary: StoryObj<TooltipProps> = {}