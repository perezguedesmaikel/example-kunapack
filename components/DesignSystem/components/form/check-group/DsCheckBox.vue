<script lang="ts" setup>
import { inject, type Ref } from "vue";
import { filterClass } from "~/components/DesignSystem/utils/filterClass";
import {
  elementSizes,
  predefinedClasses,
} from "~/components/DesignSystem/common/propsStyle";
import type { ISize } from "~/components/DesignSystem/interfaces/elements";
import useFocus from "~/components/DesignSystem/composables/useFocus";

const props = defineProps({
  value: {
    type: String,
    defaultValue: "default-value",
  },
  name: {
    type: String,
    defaultValue: "radio",
  },
  size: {
    type: String as () => ISize,
    default: "normal",
  },
  error: {
    type: String,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
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
const { elementRef: checkRef } = useFocus(
  () => props.focus,
  () => props.error,
);
const filterClassComp = computed(() => {
  return filterClass(predefinedClasses, props.class);
});
const checkGroup = inject("checkGroup") as Ref<string[]>;
const disabledParent = inject("disabled") as Ref<boolean>;
const checked = ref(checkGroup.value.includes(props.value!));
const handleChange = () => {
  checked.value = !checked.value;
  if (checked.value) {
    checkGroup.value.push(props.value!);
  } else {
    checkGroup.value = checkGroup.value.filter((val) => val !== props.value);
  }
};
const defaultClasses = "hover:border-dark-500 border p-2 mb-2 w-auto mr-1";
const hasError = computed(() => !!props.error);

// console.log("Viendo valor inicial", initialValue.value);
</script>

<template>
  <label :class="filterClassComp">
    <input
      ref="checkRef"
      :checked="checked"
      :class="[
        {
          error: hasError,
        },
        defaultClasses,
        elementSizes[props.size],
      ]"
      :disabled="disabled || disabledParent"
      :name="name"
      type="checkbox"
      @change="handleChange"
    />
    <slot></slot>
  </label>
</template>
