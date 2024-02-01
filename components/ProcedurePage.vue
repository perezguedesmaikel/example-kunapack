<template>
  <div class="container">
    <div class="grid grid-cols-3 gap-2">
      <main class="col-span-2" :aria-label="ariaTitle">
        <ProcedureHeader :title="title"/>

        <section role="form" id="main_form">
          <slot />
        </section>
      </main>

      <ProcedureHelpPanel />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },

  ariaTitle: {
    type: String,
    required: true,
  },
});
</script>
