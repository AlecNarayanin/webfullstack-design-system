import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from "projects/webfullstack-design-system/src/lib/button/button.component";

export default {
  title: 'UI/Button',
  component: ButtonComponent,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg']
      }
    },
    type: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'info']
      }
    },
  }
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
  template:
  `<lib-button [size]="size" [type]="type">
        Label
    </lib-button>`
});

export const Default = Template.bind({});

