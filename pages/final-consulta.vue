<template>
  <DsButtonContainer role="main"
       aria-label="Consulta para saber si usted es el beneficiario del Aporte Familiar Permanente"
       class="column">
    <header class="mb-6">
      <DsTypography class="is-upper-text-title">
        Servicio de información entregado por

        <DsLink href="https://www.chileatiende.gob.cl/instituciones/AL005"
           title="Página web del Instituto de Previsión Social IPS"
           class="link">
          Instituto de Previsión Social
        </DsLink>
      </DsTypography>

      <DsTypography variant="h1">
        ¿Desea saber si usted es beneficiario del Aporte Familiar Permanente?
      </DsTypography>
    </header>

    <section id="form_global" role="form">
      <DsAlert type="info">
        <div class="columns is-mobile">
          <div class="column">
            No se cumple segunda validación. (AFPER)
          </div>
        </div>
      </DsAlert>

      <DsButtonContainer>
        <DsButton color="secondary"
          title="Consultar otro RUN"
          aria-labelledby="form_global"
          class="button is-default">
          Consultar otro RUN
        </DsButton>

        <DsButton color="secondary" :rounded="false"
          title="Continuar al paso siguiente"
          aria-labelledby="form_global"
          class="button btn-ref is-default">
          Continuar
        </DsButton>
      </DsButtonContainer>
    </section>
  </DsButtonContainer>
</template>

<script setup>
import DsButton from '@perezguedesmaikel/chile-atiende-ui/components/DesignSystem/components/basic/button/DsButton.vue';
import DsTypography from '@perezguedesmaikel/chile-atiende-ui/components/DesignSystem/components/basic/typography/DsTypography.vue';
import DsLink from '@perezguedesmaikel/chile-atiende-ui/components/DesignSystem/components/navigation/link/DsLink.vue';
import DsAlert from '@perezguedesmaikel/chile-atiende-ui/components/DesignSystem/components/basic/alert/DsAlert.vue';
</script>
