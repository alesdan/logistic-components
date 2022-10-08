<template>
  <button :class="classes">{{ label }}</button>
</template>

<script setup lang="ts">
  import { computed } from "vue"
  import type { ButtonColor } from "@/components/Button/types"

  interface ButtonProps {
    label?: string
    color?: ButtonColor
    outline?: boolean
  }

  const props = withDefaults(defineProps<ButtonProps>(), { color: "default" })

  const classes = computed(() => ({
    button: true,
    [`button--${props.color}`]: !!props.color,
    "button--outline": props.outline
  }))
</script>

<style lang="scss">
  $cls: "button";

  .#{$cls} {
    outline: none;
    @apply h-8 px-4 font-medium bg-transparent border border-solid border-transparent rounded cursor-pointer;

    &.#{$cls}--default {
      @apply text-dark-500 border-neutral-300 hover:bg-neutral-100 active:bg-neutral-50;
    }
    &.#{$cls}--primary {
      @apply bg-sky-500 text-light-100 hover:bg-sky-400 active:bg-sky-500;

      &.#{$cls}--outline {
        @apply bg-transparent text-sky-500 border-sky-500 hover:bg-sky-100 active:bg-sky-50;
      }
    }
  }
</style>
