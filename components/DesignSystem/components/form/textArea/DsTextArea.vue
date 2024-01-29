<script lang="ts" setup>
import {
  predefinedClasses,
  sizeTextAreaClasses,
} from "~/components/DesignSystem/common/propsStyle";
import type { ISizeText } from "~/components/DesignSystem/interfaces/elements";
import { filterClass } from "~/components/DesignSystem/utils/filterClass";
import generateUniqueId from "~/components/DesignSystem/utils/generateUniqueId";
import useFocus from "~/components/DesignSystem/composables/useFocus";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  error: {
    type: Boolean,
    default: false,
  },
  errorMessage: {
    type: String,
    default: "Campo requerido",
  },
  label: {
    type: String,
    default: "Default label",
  },
  size: {
    type: String as () => ISizeText,
    default: "auto",
  },
  radius: {
    type: Boolean,
    default: false,
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
  placeHolderTextValue: {
    type: String,
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

const uniqueId = generateUniqueId();
const emit = defineEmits(["update:modelValue"]);

/* const handleInput = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value);
}; */

const filterClassComp = computed(() => {
  return filterClass(predefinedClasses, props.class);
});

// watch(textAreaValue, (newVal) => {
//   emit("update:modelValue", newVal);
// });
const { elementRef: textAreaRef } = useFocus(
  () => props.focus,
  () => props.error,
);

function handleInput(e: Event) {
  const target = e.target as HTMLInputElement;
  emit("update:modelValue", target.value);
}
</script>

<template>
  <label v-if="label" :for="'textArea-' + uniqueId" class="mb-2"
    >{{ label }}{{ required ? "*" : "" }}</label
  >
  <textarea
    :id="'textArea-' + uniqueId"
    ref="textAreaRef"
    :class="[
      { error: error },
      filterClassComp,
      sizeTextAreaClasses[size],
      'border',
      'block',
      { rounded: radius },
    ]"
    :disabled="disabled"
    :placeholder="placeHolderTextValue ?? 'Textarea'"
    :readonly="readOnly"
    :required="required"
    :value="modelValue"
    @input="handleInput"
  ></textarea>
  <span v-if="error" class="error-message mt-1">{{ errorMessage }}</span>
</template>
