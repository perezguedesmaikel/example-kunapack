<script lang="ts" setup>
import { filterClass } from "../../../utils/filterClass";
import { predefinedClasses } from "../../../common/propsStyle";
import type {
  IButtonColor,
  IButtonSize,
  IButtonType,
} from "./interfaces";
import {
  colorButtonClass,
  sizeButtonClass,
} from "./library";
import useFocus from "../../../composables/useFocus";
import DsIcon from "../../basic/icon/DsIcon.vue";

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

  startIcon: {
    type: String,
    default: "",
  },

  endIcon: {
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
  () => '',
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
    @click="$emit('click', $event)">
    <DsIcon v-if="startIcon" :name="startIcon" class="mr-1" />

    <slot>{{ text }}</slot>

    <DsIcon v-if="endIcon" :name="endIcon" class="ml-1" />
  </button>
</template>
