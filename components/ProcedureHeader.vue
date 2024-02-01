<template>
  <header class="mb-6">
    <DsTypography variant="span">
      Servicio de información entregado por

      <DsLink href="https://www.chileatiende.gob.cl/instituciones/AL005"
        title="Página web del Instituto de Previsión Social IPS"
        class="link">
        Instituto de Previsión Social
      </DsLink>
    </DsTypography>

    <DsTypography variant="h1">
      {{ title }}
    </DsTypography>
  </header>
</template>

<script setup>
import DsTypography from '@perezguedesmaikel/chile-atiende-ui/components/DesignSystem/components/basic/typography/DsTypography.vue';
import DsLink from '@perezguedesmaikel/chile-atiende-ui/components/DesignSystem/components/navigation/link/DsLink.vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
