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
    required: true,
  },

  value: {
    type: String,
    default: null,
  },

  class: {
    type: String,
    default: "",
  },

  group: {
    type: String,
    default: "Default Group",
  },

  size: {
    type: String as () => ISize,
    default: "normal",
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
  <div>
    <div class="flex items-center">
      <input
        :id="'input-' + uniqueId"
        v-model="model"
        :class="cssClasses"
        :disabled="disabled"
        :name="group"
        :required="required"
        :value="value"
        class="w-auto mr-1"
        type="radio"
      />

      <label v-if="label" :for="'radio-' + uniqueId" class="mb-2">
        {{ label }}
        <span v-if="required" class="required-marker">*</span>
      </label>
    </div>
    <span v-if="error" class="error-message mt-1">{{ errorMessage }}</span>
  </div>
</template>
