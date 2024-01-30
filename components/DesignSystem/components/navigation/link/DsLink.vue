<script lang="ts" setup>
import { otherStyle, variantLinkClasses } from "./library";
import type {
  ILinkSize,
  IVariant,
} from "~/components/DesignSystem/components/navigation/link/interface";
import { filterClass } from "~/components/DesignSystem/utils/filterClass";
import { predefinedClasses } from "~/components/DesignSystem/common/propsStyle";

const props = defineProps({
  text: {
    type: String,
    default: "default text",
  },
  color: {
    type: String as () => IVariant,
    default: "primary",
  },
  size: {
    type: String as () => ILinkSize,
    default: "base",
  },
  isTargetBlank: {
    type: Boolean,
    default: false,
  },
  href: {
    type: String,
    default: "#",
  },
  class: {
    type: String,
    default: "",
  },
});
const filterClassComp = computed(() => {
  return filterClass(predefinedClasses, props.class, otherStyle);
});
</script>

<template>
  <NuxtLink
    :class="[
      `text-${size}`,
      variantLinkClasses[color],
      filterClassComp,
      { underline: !filterClassComp.includes('no-underline') },
    ]"
    :target="isTargetBlank ? '_blank' : '_self'"
    :to="href || '#'"
  >
    <slot>{{ text }}</slot>
  </NuxtLink>
</template>
