<template>
  <div>
    <div aria-labelledby="title-RRSS subtitle-RRSS"
         class="p-4 rounded-lg border border-neutral-300">
      <DsTypography id="title-RRSS" variant="h3">
        ¿Tienes dudas con este trámite?
      </DsTypography>

      <DsTypography id="subtitle-RRSS" variant="p">
        Comunícate con nosotros
      </DsTypography>

      <nav class="my-4 flex items-center">
        <DsLink class="flex items-center mb-5 text-lg text-primary" target="_blank"
                title="Ir a Twitter">
          <DsIcon name="twitter" prefix="lab" size="xlarge"/>
        </DsLink>

        <DsLink class="flex items-center mb-5 text-lg text-primary" target="_blank"
                title="Ir a Facebook">
          <DsIcon name="facebook" prefix="lab" size="xlarge"/>
        </DsLink>

        <DsLink class="flex items-center mb-5 text-lg text-primary" target="_blank"
                title="Ir a Instagram">
          <DsIcon name="instagram" prefix="lab" size="xlarge"/>
        </DsLink>
      </nav>
    </div>
  </div>
</template>

<script lang="ts" setup>

import DsTypography from "~/components/DesignSystem/components/basic/typography/DsTypography.vue";
import DsLink from "~/components/DesignSystem/components/navigation/link/DsLink.vue";
import DsIcon from "~/components/DesignSystem/components/basic/icon/DsIcon.vue";
</script>
