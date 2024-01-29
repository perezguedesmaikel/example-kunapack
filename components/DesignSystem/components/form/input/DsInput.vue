<script lang="ts" setup>
import {
  elementsSizes,
  predefinedClasses,
} from "~/components/DesignSystem/common/propsStyle";

import type {
  ISize,
  ITextType,
} from "~/components/DesignSystem/interfaces/elements";

import { filterClass } from "~/components/DesignSystem/utils/filterClass";
import generateUniqueId from "~/components/DesignSystem/utils/generateUniqueId";
import useFocus from "~/components/DesignSystem/composables/useFocus";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
    required: true,
  },

  type: {
    type: String as () => ITextType,
    default: "text",
  },

  size: {
    type: String as () => ISize,
    default: "normal",
  },

  rounded: {
    type: Boolean,
    default: true,
  },

  disabled: {
    type: Boolean,
    default: false,
  },

  readOnly: {
    type: Boolean,
    default: false,
  },

  required: {
    type: Boolean,
    default: false,
  },

  focus: {
    type: Boolean,
    default: false,
  },

  label: {
    type: String,
    default: "Default label",
  },

  placeholderText: {
    type: String,
    default: "Default placeholder",
  },

  error: {
    type: Boolean,
    default: false,
  },

  errorMessage: {
    type: String,
    default: "Default error message",
  },
  class: {
    type: String,
    default: "",
  },
});

const uniqueId = generateUniqueId({ prefix: "input-" });
const defaultClasses = "hover:border-dark-500 border p-2 block mb-2";

const filterClassComp = computed(() => {
  return filterClass(predefinedClasses, props.class);
});

const cssClasses = computed(() => [
  filterClassComp.value,
  elementsSizes[props.size],
  {
    rounded: props.rounded,
    error: props.error,
  },
  defaultClasses,
]);

const { elementRef: inputRef } = useFocus(
  () => props.focus,
  () => props.error,
);

const emit = defineEmits(["update:modelValue"]);

const model = computed({
  get() {
    return props.modelValue;
  },

  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <div class="mb-4">
    <label v-if="label" :for="uniqueId" class="mb-2">
      {{ label }}
      <span v-if="required" class="required-marker">*</span>
    </label>

    <input
      :id="uniqueId"
      ref="inputRef"
      v-model="model"
      :class="cssClasses"
      :disabled="disabled"
      :placeholder="`${placeholderText}`"
      :readonly="readOnly"
      :required="required"
      :type="`${type}`"
      :value="modelValue"
    />

    <label v-if="error" class="error-message mt-1">
      {{ errorMessage }}
    </label>
  </div>
</template>
