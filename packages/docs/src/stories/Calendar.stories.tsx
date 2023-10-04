import { Box, Calendar, CalendarProps } from "@ignite-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Challenge/Calendar",
  component: Calendar,
  decorators: [
    (Story) => {
      return <Box css={{ display: "flex", padding: "10px" }}>{Story()}</Box>;
    },
  ],
} as Meta<CalendarProps>;

export const Primary: StoryObj<CalendarProps> = {
  args: {},
};
