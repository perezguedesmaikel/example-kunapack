<template>
  <div class="container">
    <main :aria-label="ariaTitle" class="col-span-2">
      <ProcedureHeader :title="title" />

      <section id="main_form">
        <slot />
      </section>
    </main>
  </div>
</template>

<script setup>
import ProcedureHelpPanel from "./ProcedureHelpPanel.vue";
import ProcedureHeader from "./ProcedureHeader.vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },

  ariaTitle: {
    type: String,
  },
});
</script>
