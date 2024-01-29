<script lang="ts" setup>
import { filterClass } from "~/components/DesignSystem/utils/filterClass";
import { predefinedClasses } from "~/components/DesignSystem/common/propsStyle";

const props = defineProps({
  stepCount: {
    type: Number,
    default: 4,
  },
  selected: {
    type: Number,
    default: 1,
  },
  class: {
    type: String,
    default: "",
  },
});

const emitChangeStep = defineEmits(["changeStep"]);
const filterClassComp = computed(() => {
  return filterClass(predefinedClasses, props.class);
});

function handleClick(step: number) {
  emitChangeStep("changeStep", step);
}

const steps = computed(() => {
  // Genera un arreglo de números desde 1 hasta stepCount
  return Array.from({ length: props.stepCount }, (_, i) => i + 1);
});
</script>

<template>
  <div :class="filterClassComp">
    <ol aria-label="Progreso del proceso" class="flex items-center space-x-8">
      <li v-for="item in steps" :key="item" @click="handleClick(item)">
        <span
          :aria-label="'Paso ' + item + ' completado'"
          :class="[
            'h-14 w-14 font-robotoSlab border border-neutral-300  text-dark-500 ' +
              'rounded-full flex align-middle justify-center items-center text-lg font-bold cursor-pointer',
            {
              'border-transparent bg-primary-500 text-white': item === selected,
            },
            {
              'border-primary-500 bg-white text-primary-500': item < selected,
            },
            {
              'border-neutral-300 bg-neutral-100 text-neutral-500':
                item === steps.length,
            },
          ]"
        >
          {{ item }}
        </span>
      </li>
    </ol>
  </div>
</template>

<style scoped></style>
