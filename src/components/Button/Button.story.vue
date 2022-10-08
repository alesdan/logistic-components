<template>
  <Story auto-props-disabled>
    <template #controls>
      <HstText v-model="state.label" title="label" />
      <HstSelect
        v-model="state.color"
        title="color"
        :options="[
          { label: 'default', value: 'default' },
          { label: 'primary', value: 'primary' }
        ]"
      />
      <HstCheckbox v-model="state.outline" title="outline" />
    </template>

    <Variant title="Default">
      <Button :label="state.label" :color="state.color" :outline="state.outline" />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
  import Button from "./Button.vue"
  import { reactive } from "vue"
  import type { ButtonColor } from "@/components/Button/types"

  const state = reactive({
    label: "Button",
    color: "default" as ButtonColor,
    outline: false
  })
</script>

<style lang="scss" scoped>
  .button + .button {
    @apply ml-4;
  }
</style>
