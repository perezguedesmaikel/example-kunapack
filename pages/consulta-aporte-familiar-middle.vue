<template>
  <ProcedurePage
    title="¿Desea saber si usted es beneficiario del Aporte Familiar Permanente?"
  >
    <DsAlert type="info">
      <div>No se cumple segunda validación. (AFPER)</div>
    </DsAlert>

    <div class="cont-btn my-5z">
      <DsButton aria-labelledby="form_global" color="tertiary"
        >Consultar otro RUN
      </DsButton>
    </div>

    <hr class="my-5" />

    <DsButton
      :rounded="false"
      aria-labelledby="form_global"
      color="secondary"
      @click="goToNext"
    >
      Ver otro resultado
    </DsButton>
  </ProcedurePage>
</template>

<script lang="ts" setup>
import DsButton from "~/components/DesignSystem/components/basic/button/DsButton.vue";
import DsAlert from "~/components/DesignSystem/components/basic/alert/DsAlert.vue";

const goToNext = () => {
  navigateTo({
    path: "/consulta-aporte-familiar-end",
  });
};
</script>
