<script lang="ts" setup>
import DsTypography from "~/components/DesignSystem/components/basic/typography/DsTypography.vue";

const props = defineProps({
  title: {
    type: String,
    default: "No title defined",
  },

  subtitle: {
    type: String,
    default: null
  },
});
</script>

<template>
  <div class="container max-w-[800px] mx-auto">
    <section>
      <DsTypography class="m-4" variant="h2">
        {{ title }}
      </DsTypography>

      <DsTypography class="mb-4" variant="p">
        {{ subtitle }}
      </DsTypography>

      <slot>
        [No items defined]
      </slot>
    </section>
  </div>
</template>
