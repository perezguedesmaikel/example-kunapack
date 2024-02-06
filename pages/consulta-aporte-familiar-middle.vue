<template>
  <ProcedurePage
    ariaTitle="Consulta para saber si usted es el beneficiario del Aporte Familiar Permanente"
    title="¿Desea saber si usted es beneficiario del Aporte Familiar Permanente?">
    <DsAlert type="info">
      <div>
        No se cumple segunda validación. (AFPER)
      </div>
    </DsAlert>

    <div class="cont-btn">
      <DsButton aria-labelledby="form_global"
                color="tertiary"
                title="Consultar otro RUN">
        Consultar otro RUT
      </DsButton>

      <DsButton aria-labelledby="form_global"
                color="tertiary"
                title="Volver al paso anterior"
                @click="goBack">
        <span>Volver</span>
      </DsButton>
    </div>

    <hr/>

    <div class="container pt-10">
      <DsButton :rounded="false" aria-labelledby="form_global"
                color="tertiary"
                title="Continuar al paso siguiente"
                @click="goToNext">
        Continuar
      </DsButton>
    </div>
  </ProcedurePage>
</template>

<script lang="ts" setup>


import DsButton from "~/components/DesignSystem/components/basic/button/DsButton.vue";
import DsAlert from "~/components/DesignSystem/components/basic/alert/DsAlert.vue";

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
