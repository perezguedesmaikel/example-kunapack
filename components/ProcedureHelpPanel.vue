<template>
  <div>
    <div class="p-4 rounded-lg border border-neutral-300"
          aria-labelledby="title-RRSS subtitle-RRSS">
      <DsTypography variant="h3" id="title-RRSS">
        ¿Tienes dudas con este trámite?
      </DsTypography>

      <DsTypography variant="p" id="subtitle-RRSS">
        Comunícate con nosotros
      </DsTypography>

      <nav class="my-4 flex items-center">
        <DsLink target="_blank" title="Ir a Twitter"
                class="flex items-center mb-5 text-lg text-primary">
          <DsIcon name="twitter" prefix="lab" size="xlarge" />
        </DsLink>

        <DsLink target="_blank" title="Ir a Facebook"
                class="flex items-center mb-5 text-lg text-primary">
          <DsIcon name="facebook" prefix="lab" size="xlarge" />
        </DsLink>

        <DsLink target="_blank" title="Ir a Instagram"
                class="flex items-center mb-5 text-lg text-primary">
          <DsIcon name="instagram" prefix="lab" size="xlarge" />
        </DsLink>
      </nav>
    </div>
  </div>
</template>

<script lang="ts" setup>
import DsIcon from '@perezguedesmaikel/chile-atiende-ui/components/DesignSystem/components/basic/icon/DsIcon.vue';
import DsTypography from '@perezguedesmaikel/chile-atiende-ui/components/DesignSystem/components/basic/typography/DsTypography.vue';
import DsLink from '@perezguedesmaikel/chile-atiende-ui/components/DesignSystem/components/navigation/link/DsLink.vue';
</script>
