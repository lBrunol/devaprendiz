import { Meta, Story } from '@storybook/react/types-6-0'
import SocialButton from '.'

export default {
  title: 'SocialButton',
  component: SocialButton
} as Meta

export const ComponentSocialButton: Story = () => (
  <SocialButton href="/" type="twitter" />
)
