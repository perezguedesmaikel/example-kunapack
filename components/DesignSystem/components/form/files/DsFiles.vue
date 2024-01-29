<script lang="ts" setup>
import type { Ref } from "vue";
import DsButton from "~/components/DesignSystem/components/basic/button/DsButton.vue";
import generateUniqueId from "~/components/DesignSystem/utils/generateUniqueId";
import { filterClass } from "~/components/DesignSystem/utils/filterClass";
import { predefinedClasses } from "~/components/DesignSystem/common/propsStyle";
import type { ISizeText } from "~/components/DesignSystem/interfaces/elements";
import { sizeSelect } from "~/components/DesignSystem/components/form/select/library";
import useFocus from "~/components/DesignSystem/composables/useFocus";

type IButtonColor = "default" | "primary" | "danger";

interface FileInputRef extends Ref<HTMLInputElement | null> {}

const props = defineProps({
  hideLabel: {
    type: Boolean,
    default: false,
  },
  errorMessage: {
    type: String,
    default: "Campo requerido",
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
    type: Boolean,
    default: false,
  },
  isPlaceHolderText: {
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
  placeHolderText: {
    type: String,
    default: "No hay archivo seleccionado",
  },
  buttonText: {
    type: String,
    default: "Examinar",
  },
  class: {
    type: String,
    default: "",
  },
});
const filterClassComp = computed(() => {
  return filterClass(predefinedClasses, props.class);
});
const emit = defineEmits(["selectedFiles"]);
const selectedFileName = ref(null);
const refFileName: FileInputRef = ref(null);
const { elementRef: fileRef } = useFocus(
  () => props.focus,
  () => props.error,
);
const openFilePicker = () => {
  // document.getElementById("file").click();
  refFileName.value?.click();
};

const handleFileChange = (event: { target: { files: any[] } }) => {
  const file = event.target.files[0];
  selectedFileName.value = file.name;
  emit("selectedFiles", file);
};
const uniqueId = generateUniqueId();
</script>
<template>
  <div :class="filterClassComp">
    <label v-if="!hideLabel" class="block mb-1">{{ label }}</label>
    <div class="flex">
      <input
        :id="'file-' + uniqueId"
        ref="refFileName"
        :disabled="disabled"
        class="hidden"
        name="file"
        type="file"
        @change="handleFileChange"
      />
      <div>
        <input
          ref="fileRef"
          :class="[
            'hover:border-dark-500 border p-2 rounded rounded-e-none font-roboto',
            { error: error },
            sizeSelect[size],
          ]"
          :placeholder="!isPlaceHolderText ? '' : placeHolderText"
          :required="required"
          :value="selectedFileName"
          readonly
        />
      </div>
      <DsButton
        :color="buttonColor"
        :text="buttonText"
        awesome-left="las la-search"
        text-color="white"
        @click="openFilePicker"
      />
    </div>
    <span v-if="error" class="error-message mt-1">{{ errorMessage }}</span>
  </div>
</template>
