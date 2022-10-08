<template>
  <Iconify :icon="iconValue" :class="classes" />
</template>

<script setup lang="ts">
  import { Icon as Iconify } from "@iconify/vue/dist/offline"
  import type { IconSize, IconType, IconVariant } from "@/components/Icon/types"
  import { computed, ref, watch } from "vue"
  import { loadIcon } from "@iconify/vue"
  import { icons } from "@/components/Icon/types"

  interface IconProps {
    icon: IconType
    variant?: IconVariant
    size?: IconSize
  }

  const props = withDefaults(defineProps<IconProps>(), {
    size: "medium"
  })

  const iconValue = ref()

  watch(
    () => [props.icon, props.variant],
    () => {
      const rawIcon =
        props.variant && props.variant !== "default" ? `${icons[props.icon]}-${props.variant}` : icons[props.icon]

      loadIcon(rawIcon).then((value) => (iconValue.value = value))
    },
    { immediate: true }
  )

  const classes = computed(() => ({
    icon: true,
    [`icon--${props.size}`]: !!props.size
  }))
</script>

<style lang="scss">
  $cls: icon;

  .#{$cls} {
    &.#{$cls}--small {
      @apply text-xs;
    }
    &.#{$cls}--medium {
      @apply text-base;
    }
    &.#{$cls}--large {
      @apply text-xl;
    }
  }
</style>
