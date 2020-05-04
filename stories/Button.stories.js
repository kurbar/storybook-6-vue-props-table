import BButton from '../src/components/ui/Button.vue';

export default {
  title: 'Buttons',
  component: BButton,
};

export const buttons = () => ({
  components: {
    BButton,
  },
  template: `
    <div>
      <b-button variant="primary">Primary Button</b-button>
      <b-button>Secondary Button</b-button>
    </div>
  `,
});

buttons.story = {
  parameters: {
    docs: {
      transformSource() {
        return `
<div>
  <b-button variant="primary">Primary Button</b-button>
  <b-button>Secondary Button</b-button>
</div>
        `;
      },
    },
  },
};
