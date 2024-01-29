<script lang="ts" setup>
import { filterClass } from "~/components/DesignSystem/utils/filterClass";
import { predefinedClasses } from "~/components/DesignSystem/common/propsStyle";
import type {
  IButtonColor,
  IButtonSize,
  IButtonType,
} from "~/components/DesignSystem/components/basic/button/interfaces";
import {
  colorButtonClass,
  sizeButtonClass,
} from "~/components/DesignSystem/components/basic/button/library";
import useFocus from "~/components/DesignSystem/composables/useFocus";
import DsIcon from "~/components/DesignSystem/components/basic/icon/DsIcon.vue";

const props = defineProps({
  text: {
    type: String,
    default: "default text",
  },

  color: {
    type: String as () => IButtonColor,
    default: "primary",
  },

  size: {
    type: String as () => IButtonSize,
    default: "default",
  },

  startImage: {
    type: String,
    default: "",
  },

  endImage: {
    type: String,
    default: "",
  },

  type: {
    type: String as () => IButtonType,
    default: "button",
  },

  disabled: {
    type: Boolean,
    default: false,
  },

  rounded: {
    type: Boolean,
    default: true,
  },

  focus: {
    type: Boolean,
    default: false,
  },
  class: {
    type: String,
    default: "",
  },
});

const emit = defineEmits<{
  (event: "click", value: MouseEvent): void;
}>();
const filterClassComp = computed(() => {
  return filterClass(predefinedClasses, props.class);
});

const { elementRef: buttonRef } = useFocus(
  () => props.focus,
  () => false,
);
const buttonClasses = computed(() => {
  let classes = [
    colorButtonClass[props.color],
    sizeButtonClass[props.size],
    filterClassComp.value,
  ];

  if (props.rounded) {
    classes.push("rounded-lg");
  }

  if (props.disabled) {
    classes.push("opacity-50");
  }

  return classes;
});
</script>

<template>
  <button
    ref="buttonRef"
    :class="['flex items-center', buttonClasses]"
    :disabled="disabled"
    :type="type"
    @click="$emit('click', $event)"
  >
    <DsIcon v-if="startImage" :imageOrAwesome="startImage" class="mr-1" />
    <slot>{{ text }}</slot>
    <DsIcon :imageOrAwesome="endImage" class="ml-1" />
  </button>
</template>
