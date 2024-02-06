<template>
  <ProcedurePage
    ariaTitle="Consulta para saber si usted es el beneficiario del Aporte Familiar Permanente"
    title="¿Desea saber si usted es beneficiario del Aporte Familiar Permanente?">
    <DsAlert aria-label="Cuadro de información importante" type="success">
      <div>
        <div>
          <DsTypography variant="h3">
            Su solicitud de Aporte Familiar Permanente 2020 ha sido realizada con éxito.
          </DsTypography>

          <hr aria-hidden="true">

          Según la solicitud con la que cuenta el Instituto de Previsión Social,
          eres potencial beneficiario del <strong>Aporte Familiar Permanente 2020</strong>.

          <DsLink class="link" target="_blank" title="Página web de IPS en Línea">
            Ingresa a IPS en Línea
          </DsLink>

          y comienza tu postulación
        </div>
      </div>
    </DsAlert>

    <DsTypography class="mb-2">
      Este año, usted es beneficiario del Aporte Familiar Permanente y recibirá
      <strong>$43.042 (cuarentaytres mil, cuarenta y dos pesos)</strong>,
      por cada causante de subsidio o carga familiar debidamente acreditada al
      31 de Diciember de 2020.
    </DsTypography>

    <DsTypography class="mb-2">
      Su pago total es de <strong>$43.042</strong> pesos, el que podrá cobrar presentando
      su cédula de identidad, a partir del 01.03.2021, en el local de
      la Caja de Compensación Los Héroes contratado por el IPS, en la comuna de Santiago.
    </DsTypography>

    <DsTypography class="mb-2">
      El derecho al cobro del beneficiario vence impostergadamente a los nueve meses
      desde la fecha de emisión de pago.
    </DsTypography>

    <div class="cont-btn">
      <DsButton aria-labelledby="form_global"
                color="tertiary"
                title="Consultar otro RUT">
        <span>Consultar otro RUT</span>
      </DsButton>

      <DsButton aria-labelledby="form_global"
                color="tertiary"
                title="Volver al paso anterior"
                @click="goBack">
        <span>Volver</span>
      </DsButton>
    </div>
  </ProcedurePage>
</template>

<script lang="ts" setup>


import DsButton from "~/components/DesignSystem/components/basic/button/DsButton.vue";
import DsTypography from "~/components/DesignSystem/components/basic/typography/DsTypography.vue";
import DsLink from "~/components/DesignSystem/components/navigation/link/DsLink.vue";
import DsAlert from "~/components/DesignSystem/components/basic/alert/DsAlert.vue";

const goBack = () => {
  navigateTo({
    path: '/consulta-aporte-familiar-middle',
  });
};
</script>
