import { Box, ToastProps, Toast, Text, Button } from "@ignite-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Challenge/Toast",
  component: Toast,
  args: {
    toasts: [
      {
        title: "Agendamento realizado",
        description: "Quarta-feira, 23 de Outubro às 16h",
      },
    ],
  },
} as Meta<ToastProps>;

export const Primary: StoryObj<ToastProps> = {
  args: {},
};

export const AutoClose: StoryObj<ToastProps> = {
  args: {
    toasts: [
      {
        title: "Agendamento realizado",
        description: "Quarta-feira, 23 de Outubro às 16h",
        timer: 5 * 1000,
      },
    ],
  },
  decorators: [
    (Story) => (
      <Box>
        <Text>O Toast irá sumir depois de 5 segundos</Text>
        {Story()}
      </Box>
    ),
  ],
};
