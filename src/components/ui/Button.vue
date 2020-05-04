<template>
  <b-button v-bind="$props"><slot></slot></b-button>
</template>

<script>
import { BButton } from 'bootstrap-vue/esm/components/button/button';

export default {
  components: { BButton },
  props: {
    ...BButton.options.props,
    color: String,
  },
};
</script>
