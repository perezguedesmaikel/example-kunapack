<script lang="ts" setup>
import type { ISizeText } from "~/components/DesignSystem/interfaces/elements";
import { sizeSelect } from "~/components/DesignSystem/components/form/select/library";
import type { ISelect } from "~/components/DesignSystem/components/form/select/interfaces";
import { predefinedClasses } from "~/components/DesignSystem/common/propsStyle";
import { filterClass } from "~/components/DesignSystem/utils/filterClass";
import generateUniqueId from "~/components/DesignSystem/utils/generateUniqueId";
import useFocus from "~/components/DesignSystem/composables/useFocus";

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
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
  textDisabledValue: {
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
      {
        value: 3,
        text: "option 3",
      },
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

const uniqueId = generateUniqueId();
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
</script>

<template>
  <label :for="'select-' + uniqueId" class="mb-2"
    >{{ label }}{{ required ? "*" : "" }}</label
  >
  <select
    :id="'select-' + uniqueId"
    ref="selectRef"
    v-model="model"
    :class="[
      filterClassComp,
      { error: error },
      'block',
      'border',
      sizeSelect[size],
      { rounded: rounded },
    ]"
    :disabled="disabled"
    :required="required"
    :value="modelValue"
    @input="handleInput"
  >
    <slot>
      <option :selected="modelValue === 0" :value="0" disabled>
        {{ exampleText ? textDisabledValue : "" }}
      </option>
      <option
        v-for="el in option"
        :key="el.value"
        :selected="el.value == modelValue"
        :value="el.value"
      >
        {{ el.text }}
      </option>
    </slot>
  </select>
  <span v-if="error" class="error-message mt-1">{{ errorMessage }}</span>
</template>
