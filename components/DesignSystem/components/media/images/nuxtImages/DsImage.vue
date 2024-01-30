<script lang="ts" setup>
import {
  predefinedClasses,
  sizeImagesClasses,
} from "~/components/DesignSystem/common/propsStyle";
import { filterClass } from "~/components/DesignSystem/utils/filterClass";

type ISize =
  | "xSmall"
  | "small"
  | "medium"
  | "large"
  | "xLarge"
  | "xxLarge"
  | "auto";
const props = defineProps({
  radius: {
    type: Boolean,
  },
  size: {
    type: String as () => ISize,
  },
  alt: {
    type: String,
    default: "Text for description",
  },
  src: {
    type: String,
    default: "/images/sample-image.jpg",
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
  <NuxtImg
    :alt="alt"
    :class="[filterClassComp, { rounded: radius }, sizeImagesClasses[size]]"
    :src="`${imageSrc}`"
  />
</template>
