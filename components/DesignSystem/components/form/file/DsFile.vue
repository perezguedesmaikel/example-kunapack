<script lang="ts" setup>
import DsButton from "../../basic/button/DsButton.vue";
import generateUniqueId from "../../../utils/generateUniqueId";
import {filterClass} from "../../../utils/filterClass";
import {predefinedClasses} from "../../../common/propsStyle";
import type {ISizeText} from "../../../interfaces/elements";
import {sizeSelect} from "../select/library";
import useFocus from "../../../composables/useFocus";
import type {IButtonColor} from "../../basic/button/interfaces";
import {translateError} from "../../../utils/translateErrorMessage";
import buildAriaLabels from "../../../utils/buildAriaLabels";
import type {Ref} from "vue";

//new change defile
interface FileInputRef extends Ref<HTMLInputElement | null> {
}

const props = defineProps({
  modelValue: {
    type: Object as () => { name: string },
    default: null,
  },
  hideLabel: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as () => ISizeText,
    default: "normal",
  },

  required: {
    type: Boolean,
    default: false,
  },

  disabled: {
    type: Boolean,
    default: false,
  },

  focus: {
    type: Boolean,
    default: false,
  },

  error: {
    type: String,
    default: null,
  },

  showPlaceholder: {
    type: Boolean,
    default: true,
  },

  buttonColor: {
    type: String as () => IButtonColor,
    default: "primary",
  },

  label: {
    type: String,
    default: "Attach document",
  },

  placeholder: {
    type: String,
    default: "No hay archivo seleccionado",
  },

  buttonText: {
    type: String,
    default: "Examinar",
  },

  helpMessage: {
    type: String as PropType<string | null>,
    default: null,
  },

  class: {
    type: String,
    default: "",
  },
});

const inputId = computed(() => generateUniqueId("file"));
const labelId = computed(() => `${inputId.value}-label`);
const errorMessageId = computed(() => `${inputId.value}-error-message`);
const helpMessageId = computed(() => `${inputId.value}-help-message`);

const filterClassComp = computed(() => {
  return filterClass(predefinedClasses, props.class);
});

const emit = defineEmits(["fileSelected", "update:modelValue"]);
const selectedFileName = ref(null);
const refFileName: FileInputRef = ref(null);

const {elementRef: fileRef} = useFocus(
  () => props.focus,
  () => props.error,
);

const openFilePicker = () => {
  // document.getElementById("file").click();
  refFileName.value?.click();
};

const handleFileChange = (event: any) => {
  const file = event.target.files[0];
  selectedFileName.value = file.name;

  emit("fileSelected", file);
  emit("update:modelValue", file);
};

const hasError = computed(() => !!props.error);
const errorMessage = computed(() => translateError(props.error));

const ariaLabels = computed(() =>
  buildAriaLabels(props, {
    label: labelId.value,
    error: errorMessageId.value,
    helpMessage: helpMessageId.value,
  }),
);
</script>

<template>
  <div :class="filterClassComp">
    <label v-if="!hideLabel" :id="labelId" :for="inputId" class="block mb-1">
      {{ label }}
      <span v-if="required" aria-hidden="true" class="required-marker">*</span>
    </label>

    <div class="flex">
      <input
        :id="inputId"
        ref="refFileName"
        :disabled="disabled"
        class="hidden"
        name="file"
        type="file"
        @change="handleFileChange"
      />
      <div class="w-full">
        <input
          ref="fileRef"
          :aria-invalid="hasError"
          :aria-labelledby="ariaLabels"
          :aria-required="required"
          :class="[
            'rounded rounded-e-none mb-0',
            { error: hasError },
            sizeSelect[size],
          ]"
          :placeholder="showPlaceholder ? placeholder : ''"
          :value="modelValue?.name"
          @click="openFilePicker"
          @keydown.prevent
        />
      </div>

      <DsButton
        :color="buttonColor"
        :rounded="false"
        :text="buttonText"
        startIcon="file"
        text-color="white"
        variant="buttonFile"
        @click="openFilePicker"
      />
    </div>

    <label
      v-if="hasError"
      :id="errorMessageId"
      class="error-message block mb-0"
    >
      {{ errorMessage }}
    </label>

    <label v-if="helpMessage" :id="helpMessageId" class="help-message block">
      {{ helpMessage }}
    </label>
  </div>
</template>
