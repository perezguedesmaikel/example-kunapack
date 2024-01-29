<script lang="ts" setup>
import DsButton from "~/components/DesignSystem/components/basic/button/DsButton.vue";
import vClickOutside from "~/components/DesignSystem/directives/clickOutsideDirective";
import { predefinedClasses } from "~/components/DesignSystem/common/propsStyle";
import { filterClass } from "~/components/DesignSystem/utils/filterClass";
import type { IDropDirection, IDropType } from "./interfaces";
import type { IButtonSize } from "../button/interfaces";
import { provide, ref } from "vue";
import Menu from "./Menu.vue";

const props = defineProps({
  color: {
    type: String as () => IDropType,
    default: "primary",
  },

  dropDirection: {
    type: String as () => IDropDirection,
    default: "dropdown",
  },
  size: {
    type: String as () => IButtonSize,
    default: "default",
  },

  rounded: {
    type: Boolean,
    default: true,
  },

  disabled: {
    type: Boolean,
    default: false,
  },

  label: {
    type: String,
    default: "Default label",
  },
  class: {
    type: String,
    default: "",
  },
});
const filterClassComp = computed(() => {
  return filterClass(predefinedClasses, props.class);
});

const containerCssClasses = computed(() => {
  return {
    "inline-flex": true,
    relative: true,
    "align-top": true,
    rounded: props.rounded,
  };
});
const menuCssClass = computed(() => {
  return {
    "left-0": true,
    "min-w-[12rem]": true,
    "pt-0": true,
    absolute: true,
    "w-full": true,
    "z-20": true,
    "top-full": props.dropDirection === "dropdown",
    "pb-0 top-auto bottom-full": props.dropDirection === "dropup",
  };
});

const emit = defineEmits(["select"]);
const isMenuVisible = ref(false);

const toggleMenu = () => (isMenuVisible.value = !isMenuVisible.value);

const onItemSelected = (item: any) => {
  isMenuVisible.value = false;

  emit("select", item);
};

provide("itemSelected", {
  onItemSelected,
});
const triggerIcon = computed(() => {
  switch (props.dropDirection) {
    case "dropdown":
      return "las la-angle-down";
    case "dropup":
      return "las la-angle-up";
    default:
      return "";
  }
});

const onClickOutside = () => {
  isMenuVisible.value = false;
};
</script>

<template>
  <div
    v-click-outside="onClickOutside"
    :class="[containerCssClasses, filterClassComp]"
  >
    <div class="dropdown-trigger" @click="toggleMenu">
      <DsButton
        :color="color"
        :disabled="disabled"
        :rounded="rounded"
        :size="size"
        :start-image="triggerIcon"
        aria-haspopup="true"
      >
        {{ " " + label }}
      </DsButton>
    </div>

    <Menu :class-menu="menuCssClass" :show="isMenuVisible">
      <slot />
    </Menu>
  </div>
</template>

<style scoped></style>
