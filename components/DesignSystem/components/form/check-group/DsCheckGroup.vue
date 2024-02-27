<script lang="ts" setup>
import { type PropType, ref } from "vue";
import generateUniqueId from "~/components/DesignSystem/utils/generateUniqueId";
import useFocus from "~/components/DesignSystem/composables/useFocus";
import { filterClass } from "~/components/DesignSystem/utils/filterClass";
import { predefinedClasses } from "~/components/DesignSystem/common/propsStyle";

const props = defineProps({
  modelValue: {
    type: Object,
    defaultValue: [],
  },
  id: {
    type: String,
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
    type: String,
    default: null,
  },
  helpMessage: {
    type: String as PropType<string | null>,
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
const { elementRef: selectRef } = useFocus(() => props.focus);
const filterClassComp = computed(() => {
  return filterClass(predefinedClasses, props.class);
});
const uniqueID = ref("");
onMounted(() => {
  uniqueID.value = generateUniqueId("check");
});
const initialValue = ref(props.modelValue);
const checkGroup = ref(initialValue);
provide("checkGroup", checkGroup);
provide("disabled", props.disabled);
const emit = defineEmits(["update:modelValue"]);
watch(
  checkGroup,
  (newValue) => {
    emit("update:modelValue", newValue);
  },
  { immediate: true },
);
const hasError = computed(() => !!props.error);
</script>

<template>
  <div
    :id="uniqueID"
    ref="selectRef"
    :class="['flex flex-col justify-center', filterClassComp]"
    tabindex="0"
  >
    <label v-if="label" :for="uniqueID" class="mb-2">
      {{ label }}
      <span v-if="required" aria-hidden="true" class="required-marker">*</span>
    </label>
    <slot></slot>
    <label v-if="hasError" class="error-message block mb-0">
      {{ error }}
    </label>

    <label v-if="helpMessage" class="help-message block">
      {{ helpMessage }}
    </label>
  </div>
</template>
