<script lang="ts" setup>
import { elementsSizes, predefinedClasses } from "~/components/DesignSystem/common/propsStyle";
import { filterClass } from "~/components/DesignSystem/utils/filterClass";
import generateUniqueId from "~/components/DesignSystem/utils/generateUniqueId";
import type { ISize } from "~/components/DesignSystem/interfaces/elements";
import { inject } from "vue";

const props = defineProps({
  type: {
    type: String as () => IDropType,
    default: "default",
  },

  class: {
    type: String,
    default: "",
  },

  size: {
    type: String as () => ISize,
    default: "normal",
  },

  label: {
    type: String,
    default: "Default label",
  },

  icon: {
    type: String,
    default: "",
  },

  data: {
    type: Object,
    default: null,
  },
});

const uniqueId = generateUniqueId();
const defaultClasses = "flex items-center text-sm py-1.5 px-4 relative whitespace-nowrap w-full hover:bg-primary-900";

const filterClassComp = computed(() => {
  return filterClass(predefinedClasses, props.class);
});

const cssClasses = computed(() =>
  [
    filterClassComp,
    elementsSizes[props.size],
    defaultClasses,
  ]
);

const { onItemSelected }: any = inject('itemSelected');

const emit = defineEmits(['click'])

const handleClick = (e: any) => {
  const item = {
    target: e.target,
    label: props.label,
    data: props.data,
  };

  emit('click', item);
  onItemSelected( item);
};
</script>

<template>
  <a
    :id="'input-' + uniqueId"
    :class="cssClasses"
    href="#"
    :title="label"
    role="listitem"
    @click.prevent="handleClick"
  >
    <img v-if="icon" class="w-4 mr-2" :src="icon" />
    <slot>{{ label }}</slot>
  </a>
</template>

<style scoped></style>
