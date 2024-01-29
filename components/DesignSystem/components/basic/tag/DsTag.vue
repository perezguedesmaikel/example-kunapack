<script lang="ts" setup>
import { colorClasses, predefinedClasses } from "../../../common/propsStyle";
import type { IColor } from "~/components/DesignSystem/interfaces/elements";
import { filterClass } from "~/components/DesignSystem/utils/filterClass";

const props = defineProps({
  textTag: {
    default: "Neutral",
  },
  color: {
    type: String as () => IColor,
    default: "neutral",
  },
  class: {
    default: "",
  },
});
const filterClassComp = computed(() => {
  return filterClass(predefinedClasses, props.class, ["font-robotoSlab"]);
});
</script>

<template>
  <span
    :class="[
      filterClassComp,
      colorClasses[color],
      'rounded',
      'text-xs',
      'px-2',
      'py-1',
    ]"
    >{{ textTag }}</span
  >
</template>
