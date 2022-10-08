<template>
  <Story auto-props-disabled>
    <template #controls>
      <HstSelect v-model="state.icon" title="icon" :options="iconOptions" />
      <HstSelect v-model="state.variant" title="variant" :options="iconVariantOptions" />
      <HstSelect v-model="state.size" title="size" :options="iconSizeOptions" />
    </template>

    <Variant title="Default">
      <Icon :icon="state.icon" :variant="state.variant" :size="state.size" />
    </Variant>

    <Variant title="Icons">
      <div class="icons">
        <Icon v-for="icon in getAllIcons()" :icon="icon" :key="icon" :size="state.size" />
      </div>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
  import Icon from "./Icon.vue"
  import { reactive } from "vue"
  import type { IconSize, IconType, IconVariant } from "@/components/Icon/types"
  import { icons, iconSizes, iconVariants } from "@/components/Icon/types"

  const state = reactive({
    icon: "check" as IconType,
    variant: "default" as IconVariant,
    size: "medium" as IconSize
  })

  const iconOptions = Object.keys(icons).map((key) => ({ label: key, value: key }))
  const iconVariantOptions = Object.values(iconVariants).map((value) => ({ label: value, value: value }))
  const iconSizeOptions = Object.values(iconSizes).map((value) => ({ label: value, value: value }))

  const getAllIcons = () => Object.keys(icons).map((icon) => icon as IconType)
</script>

<style lang="scss">
  .icons {
    @apply grid grid-cols-10 gap-4 min-w-10 max-w-lg;
  }
</style>
