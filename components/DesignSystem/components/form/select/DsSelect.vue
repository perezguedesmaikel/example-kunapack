<script lang="ts" setup>
import type { ISizeText } from "../../../interfaces/elements";
import { sizeSelect } from "./library";
import type { ISelect } from "./interfaces";
import { predefinedClasses } from "../../../common/propsStyle";
import { filterClass } from "../../../utils/filterClass";
import generateUniqueId from "../../../utils/generateUniqueId";
import useFocus from "../../../composables/useFocus";
import { translateError } from "../../../utils/translateErrorMessage";
import buildAriaLabels from "../../../utils/buildAriaLabels";

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },

  error: {
    type: String,
    default: null,
  },

  label: {
    type: String,
    default: "Default label",
  },

  size: {
    type: String as () => ISizeText,
    default: "normal",
  },

  rounded: {
    type: Boolean,
    default: false,
  },

  disabled: {
    type: Boolean,
    default: false,
  },

  required: {
    type: Boolean,
    default: false,
  },

  exampleText: {
    type: Boolean,
    default: true,
  },

  helpMessage: {
    type: String as PropType<string|null>,
    default: null,
  },

  placeholder: {
    type: String,
    default: "Selecciona una opción",
  },

  focus: {
    type: Boolean,
    default: false,
  },

  option: {
    type: Array as () => ISelect[],
    default: [
      { value: 1, text: "option 1" },
      { value: 2, text: "option 2" },
      { value: 3, text: "option 3" },
    ],
  },

  class: {
    type: String,
    default: "",
  },
});

const { elementRef: selectRef } = useFocus(
  () => props.focus,
  () => props.error,
);

const inputId = computed(() => generateUniqueId('select'));
const labelId = computed(() => `${inputId.value}-label`);
const errorMessageId = computed(() => `${inputId.value}-error-message`);
const helpMessageId = computed(() => `${inputId.value}-help-message`);

const filterClassComp = computed(() => {
  return filterClass(predefinedClasses, props.class);
});

const emit = defineEmits(["update:modelValue", "select"]);

function handleInput(e: Event) {
  emit("select", e);
}

const model = computed({
  get() {
    return props.modelValue;
  },

  set(value) {
    emit("update:modelValue", value);
  },
});

const hasError = computed(() => !!props.error);
const errorMessage = computed(() => translateError( props.error));

const ariaLabels = computed(() => buildAriaLabels( props, {
  label: labelId.value,
  error: errorMessageId.value,
  helpMessage: helpMessageId.value,
}));
</script>

<template>
  <label v-if="label" :id="labelId" :for="inputId" class="mb-2">
    {{ label }}
    <span v-if="required" class="required-marker" aria-hidden="true">*</span>
  </label>

  <select
    :id="inputId"
    ref="selectRef"
    v-model="model"
    :class="[
      filterClassComp,
      { error: hasError },
      'block',
      'border',
      sizeSelect[size],
      { rounded: rounded },
    ]"
    :disabled="disabled"
    :aria-required="required"
    :aria-invalid="hasError"
    :aria-labelledby="ariaLabels"
    @input="handleInput"
  >
    <slot>
      <option :value="!modelValue ? null : 0" disabled>
        {{ exampleText ? placeholder : "" }}
      </option>
      <option v-for="el in option" :key="el.value" :value="el.value">
        {{ el.text }}
      </option>
    </slot>
  </select>

  <label v-if="hasError" :id="errorMessageId" class="error-message block mb-0">
    {{ errorMessage }}
  </label>

  <label v-if="helpMessage" :id="helpMessageId" class="help-message block">
    {{ helpMessage }}
  </label>
</template>
