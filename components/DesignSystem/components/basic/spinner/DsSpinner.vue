<script lang="ts" setup>
import { spinnerColor } from "~/components/DesignSystem/components/basic/spinner/library";

defineProps({
  color: {
    type: String as () => "white" | "red" | "blue" | "gray",
    value: "white",
  },
});
</script>

<template>
  <div
    :class="[
      'ml-1 w-5 h-5 border-2 border-t-4  rounded-full animate-spin',
      spinnerColor[color],
    ]"
  ></div>
</template>

<style scoped></style>
