<script lang="ts" setup>
import DsIcon from "../icon/DsIcon.vue";
import { filterClass } from "~/components/DesignSystem/utils/filterClass";
import { predefinedClasses } from "~/components/DesignSystem/common/propsStyle";

// Props are packed into an object
const props = defineProps({
  awesome: {
    type: String,
    default: "",
  },
  count: {
    type: Number,
    default: 0,
  },
  class: {
    type: String,
    default: "",
  },
});
const filterClassComp = computed(() => {
  return filterClass(predefinedClasses, props.class);
});
// State using Composition API
</script>

<template>
  <div
    :class="[
      filterClassComp,
      'group relative w-12 h-12 rounded-full flex justify-center items-center',
    ]"
  >
    <DsIcon :image-or-awesome="awesome" size="large" />

    <!-- <i :class="`la-${awesome}`" class="las la-2x"></i> -->

    <span
      v-if="count > 0"
      class="absolute top-0 right-0 h-5 w-5 rounded-full text-xs ring-2 ring-white bg-blue-400 text-white font-bold flex items-center justify-center"
    >
      {{ count }}
    </span>
  </div>
</template>
