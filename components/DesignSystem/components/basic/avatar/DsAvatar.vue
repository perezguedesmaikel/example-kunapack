<script lang="ts" setup>
import {
  predefinedClasses,
  sizeAvatarClasses,
} from "~/components/DesignSystem/common/propsStyle";
import { filterClass } from "~/components/DesignSystem/utils/filterClass";

type ISize = "xSmall" | "small" | "medium" | "large" | "xLarge";

const props = defineProps({
  size: {
    type: String as () => ISize,
    default: "large",
  },
  alt: {
    type: String,
    default: "Jimena Contreras",
  },
  src: {
    type: String,
    default: "/images/avatar.jpg",
  },
  class: {
    type: String,
    default: "",
  },
});
const filterClassComp = computed(() => {
  return filterClass(predefinedClasses, props.class);
});
const imageSrc = computed(() => {
  return props.src;
});
</script>

<template>
  <img
    :alt="alt"
    :class="['mr-3 rounded-full', filterClassComp, sizeAvatarClasses[size]]"
    :src="`${imageSrc}`"
  />
</template>
