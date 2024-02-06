<template>
  <div class="container">
    <div class="grid grid-cols-3 gap-2">
      <main :aria-label="ariaTitle" class="col-span-2">
        <ProcedureHeader :title="title"/>

        <section id="main_form">
          <slot/>
        </section>
      </main>

      <ProcedureHelpPanel/>
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
