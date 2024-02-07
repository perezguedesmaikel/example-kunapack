<template>
  <ProcedurePage
    title="¿Desea saber si usted es beneficiario del Aporte Familiar Permanente?"
  >
    <DsAlert
      title=" Su solicitud de Aporte Familiar Permanente 2020 ha sido realizada con éxito."
      type="success"
    >
      <div>
        <div>
          Según la solicitud con la que cuenta el Instituto de Previsión Social,
          eres potencial beneficiario del
          <strong>Aporte Familiar Permanente 2020</strong>.

          <DsLink
            class="link"
            href="http://ipsenlinea.cl"
            target="_blank"
            title="Ir a Página web de IPS en Línea"
            >Ingresa a IPS en Línea
          </DsLink>

          y comienza tu postulación
        </div>
      </div>
    </DsAlert>
    <div class="my-5">
      <DsTypography variant="p">
        Este año, usted es beneficiario del Aporte Familiar Permanente y
        recibirá
        <strong>$43.042 (cuarenta y tres mil, cuarenta y dos pesos)</strong>,
        por cada causante de subsidio o carga familiar debidamente acreditada al
        31 de Diciembre de 2020.
      </DsTypography>

      <DsTypography variant="p">
        Su pago total es de <strong>$43.042</strong> pesos, el que podrá cobrar
        presentando su cédula de identidad, a partir del 01.03.2021, en el local
        de la Caja de Compensación Los Héroes contratado por el IPS, en la
        comuna de Santiago.
      </DsTypography>

      <DsTypography variant="p">
        El derecho al cobro del beneficiario vence impostergablemente a los
        nueve meses desde la fecha de emisión de pago.
      </DsTypography>
    </div>
    <div class="cont-btn">
      <DsButton aria-labelledby="form_global" color="tertiary">
        <span>Consultar otro RUT</span>
      </DsButton>
    </div>
    <hr class="m-5" />

    <DsButton
      aria-labelledby="form_global"
      color="secondary"
      title="Volver al paso anterior"
      @click="goBack"
    >
      <span>Ver resultado anterior</span>
    </DsButton>
  </ProcedurePage>
</template>

<script lang="ts" setup>
import DsButton from "~/components/DesignSystem/components/basic/button/DsButton.vue";
import DsTypography from "~/components/DesignSystem/components/basic/typography/DsTypography.vue";
import DsLink from "~/components/DesignSystem/components/navigation/link/DsLink.vue";
import DsAlert from "~/components/DesignSystem/components/basic/alert/DsAlert.vue";

const goBack = () => {
  navigateTo({
    path: "/consulta-aporte-familiar-middle",
  });
};
</script>
