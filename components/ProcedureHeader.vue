<template>
  <header class="mb-6">
    <DsTypography variant="span">
      Servicio de información entregado por

      <DsLink class="link"
              href="https://www.chileatiende.gob.cl/instituciones/AL005"
              title="Página web del Instituto de Previsión Social IPS">
        Instituto de Previsión Social
      </DsLink>
    </DsTypography>

    <DsTypography variant="h1">
      {{ title }}
    </DsTypography>
  </header>
</template>

<script setup>


import DsTypography from "~/components/DesignSystem/components/basic/typography/DsTypography.vue";
import DsLink from "~/components/DesignSystem/components/navigation/link/DsLink.vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
