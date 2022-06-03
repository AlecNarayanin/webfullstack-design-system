import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { CustomTextComponent } from './custom-text.component';

export default {
  title: 'UI/CustomText',
  component: CustomTextComponent,
  decorators: [
    moduleMetadata({
      declarations: [CustomTextComponent],
      imports: [CommonModule],
    }),
  ],
};

const Template: Story<CustomTextComponent> = (args: CustomTextComponent) => ({
  props: args,
  template: `
  <custom-text [variant]="variant">
  ceci est du texte
  </custom-text>`,
});

export const Base = Template.bind({});
