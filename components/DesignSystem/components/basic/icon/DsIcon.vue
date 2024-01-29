<script lang="ts" setup>
import type {
  IIconColor,
  IIconSize,
} from "~/components/DesignSystem/interfaces/elements";
import {
  predefinedClasses,
  textColorClasses,
  iconSizeClasses,
} from "~/components/DesignSystem/common/propsStyle";
import { filterClass } from "~/components/DesignSystem/utils/filterClass";

const props = defineProps({
  imageOrAwesome: {
    type: String,
    required: true,
  },

  color: {
    type: String as () => IIconColor,
    default: null,
  },

  size: {
    type: String as () => IIconSize,
    default: "default",
  },

  rotate: {
    type: String,
    default: null,
  },

  class: {
    type: String,
    default: "",
  },
});

const filterClassComp = computed(() => {
  return filterClass(predefinedClasses, props.class);
});

const cssClasses = computed(() => {
  let result = [filterClassComp.value, iconSizeClasses[props.size]];

  if (props.color) {
    result.push(textColorClasses[props.color]);
  }

  if (props.rotate) {
    result.push(`transform rotate-${props.rotate}`);
  }

  return result;
});
const isImageUrl = computed((): boolean | null => {
  if (props.imageOrAwesome) {
    return (
      props.imageOrAwesome.includes(".") && props.imageOrAwesome.includes("/")
    );
  }
  return null;
});
</script>

<template>
  <i v-if="!isImageUrl" :class="[cssClasses, `las la-${imageOrAwesome}`]" />
  <img
    v-else
    :class="['w-6 mr-2 icon-blue', cssClasses]"
    :src="imageOrAwesome"
    alt="icon image"
    aria-hidden="true"
  />
</template>
