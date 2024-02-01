<template>
  <ProcedurePage
    title="¿Desea saber si usted es beneficiario del Aporte Familiar Permanente?"
    ariaTitle="Consulta para saber si usted es el beneficiario del Aporte Familiar Permanente">
    <DsAlert type="info">
      <div>
        No se cumple segunda validación. (AFPER)
      </div>
    </DsAlert>

    <div class="cont-btn">
      <DsButton color="tertiary"
        title="Consultar otro RUN"
        aria-labelledby="form_global">
        Consultar otro RUT
      </DsButton>

      <DsButton color="tertiary"
        title="Volver al paso anterior"
        aria-labelledby="form_global"
        @click="goBack">
        <span>Volver</span>
      </DsButton>
    </div>

    <hr />

    <div class="container pt-10">
      <DsButton color="tertiary" :rounded="false"
        title="Continuar al paso siguiente"
        aria-labelledby="form_global"
        @click="goToNext">
        Continuar
      </DsButton>
    </div>
  </ProcedurePage>
</template>

<script lang="ts" setup>
import DsButton from '@perezguedesmaikel/chile-atiende-ui/components/DesignSystem/components/basic/button/DsButton.vue';
import DsAlert from '@perezguedesmaikel/chile-atiende-ui/components/DesignSystem/components/basic/alert/DsAlert.vue';

const goBack = () => {
  navigateTo({
    path: '/consulta-aporte-familiar-start',
  });
};

const goToNext = () => {
  navigateTo({
    path: '/consulta-aporte-familiar-end',
  });
};

</script>
