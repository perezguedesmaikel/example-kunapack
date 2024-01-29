<script lang="ts" setup>
import {
  elementsSizes,
  predefinedClasses,
} from "~/components/DesignSystem/common/propsStyle";

import type { ISize } from "~/components/DesignSystem/interfaces/elements";

import { filterClass } from "~/components/DesignSystem/utils/filterClass";
import generateUniqueId from "~/components/DesignSystem/utils/generateUniqueId";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
    required: true,
  },

  class: {
    type: String,
    default: "",
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

  required: {
    type: Boolean,
    default: false,
  },

  label: {
    type: String,
    default: "Default label",
  },

  error: {
    type: Boolean,
    default: false,
  },

  errorMessage: {
    type: String,
    default: "Default error message",
  },
});

const uniqueId = generateUniqueId();
const defaultClasses = "hover:border-dark-500 border p-2 mb-2";

const filterClassComp = computed(() => {
  return filterClass(predefinedClasses, props.class);
});

const cssClasses = computed(() => [
  filterClassComp,
  elementsSizes[props.size],
  {
    rounded: props.rounded,
    error: props.error,
  },
  defaultClasses,
]);

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
  <div class="flex items-center">
    <input
      :id="'input-' + uniqueId"
      v-model="model"
      :checked="modelValue"
      :class="cssClasses"
      :disabled="disabled"
      :required="required"
      class="w-auto mr-1"
      type="checkbox"
    />

    <label v-if="label" :for="'checkbox-' + uniqueId" class="mb-2">
      {{ label }}
      <span v-if="required" class="required-marker">*</span>
    </label>
  </div>

  <label v-if="error" class="error-message mt-1">
    {{ errorMessage }}
  </label>
</template>
