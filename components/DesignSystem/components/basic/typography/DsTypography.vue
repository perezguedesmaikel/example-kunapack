<script lang="ts" setup>
import { elements, otherStyle } from "./data";
import type {
  DsElementNameType,
  IDsTypographyElement,
} from "~/components/DesignSystem/components/basic/typography/interfaces";
import { filterClass } from "~/components/DesignSystem/utils/filterClass";
import { predefinedClasses } from "~/components/DesignSystem/common/propsStyle";
import generateUniqueId from "~/components/DesignSystem/utils/generateUniqueId";

const props = defineProps({
  text: {
    default: "default text",
  },
  variant: {
    type: String as () => DsElementNameType,
    default: "p",
  },
  class: {
    default: "",
  },
});
const uniqueId = generateUniqueId();
const element = computed((): IDsTypographyElement => {
  const el = elements.find((el) => el.name === props.variant);
  if (el) {
    return {
      ...el,
      name: el.name as DsElementNameType,
    };
  }
  throw new Error("Element not found");
});
const filterClassComp = computed(() => {
  return filterClass(predefinedClasses, props.class, otherStyle);
});
</script>

<template>
  <component
    :is="element.component"
    :id="'typography-' + uniqueId"
    :class="filterClassComp"
  >
    <slot>{{ text }}</slot>
  </component>
</template>
