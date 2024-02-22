<script lang="ts" setup>
import DsTypography from "../../basic/typography/DsTypography.vue";
import { filterClass } from "~/components/DesignSystem/utils/filterClass";
import { predefinedClasses } from "~/components/DesignSystem/common/propsStyle";

const props = defineProps({
  title: {
    type: String,
    default: "No title defined",
  },

  subtitle: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: "",
  },
});
const filterClassComp = computed(() => {
  return filterClass(predefinedClasses, props.class);
});
</script>

<template>
  <div :class="['container max-w-[800px] mx-auto', filterClassComp]">
    <section>
      <DsTypography class="m-4" variant="h2">
        {{ title }}
      </DsTypography>

      <DsTypography class="mb-4" variant="p">
        {{ subtitle }}
      </DsTypography>

      <slot> [No items defined] </slot>
    </section>
  </div>
</template>
