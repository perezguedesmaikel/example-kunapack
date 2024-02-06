<script lang="ts" setup>
import DsTypography from "~/components/DesignSystem/components/basic/typography/DsTypography.vue";
import DsLink from "~/components/DesignSystem/components/navigation/link/DsLink.vue";
import DsButton from "~/components/DesignSystem/components/basic/button/DsButton.vue";
</script>

<template>
  <div class="form-sector mt-5">
    <header class="mb-5">
      <DsTypography variant="h2">Resolución de la solicitud</DsTypography>
    </header>
    <div aria-label="Cuadro de información importante">
      <DsTypography variant="h3"
        >Su solicitud de visita ha sido recepcionada
      </DsTypography>
      <hr aria-hidden="true" />
      <DsTypography variant="p">
        Felipe (RUN 13.432.586-2), la visita ha sido recepcionada, pronto nos
        pondremos en contacto para confirmar la fecha en los próximos XX días
        hábiles.
      </DsTypography>
    </div>
    <div aria-label="Cuadro de información importante">
      <strong>Importante:</strong> En el momento de la visita debe tener
      físicamente la cédula de identidad del apoderado y la cédula de identidad
      del pensionado vigentes.
    </div>
    <div aria-label="Cuadro de información importante">
      <strong
        >Su número de atención es el AB-09082019, por favor imprima este
        comprobante o verifique su correo electrónico donde recibirá la fecha de
        confirmación, ante cualquier consulta comuníquese al teléfono
        101</strong
      >
    </div>
    <div>
      Número de solicitud<br />
      <span><strong>456355345-67</strong></span>
    </div>
    <div>
      Tipo de solicitud<br />
      <span
        ><strong
          >Agendar una visita para el trámite en residencia de
          pensionado</strong
        ></span
      >
    </div>
    <div>
      Estado actual<br />
      <span><strong>Solicitud ingresada</strong></span>
    </div>
    <div>
      Nombre, RUN del pensionado y Caja<br />
      <span><strong>Alberto Martinez Guzman</strong></span
      ><br />
      <span><strong>5.987.678-9</strong></span>
    </div>
    <div>
      Solicitante de la visita<br />
      <span><strong>Familiar directo</strong></span>
    </div>
    <div>
      Motivo fundado<br />
      <span
        ><DsLink
          ><strong>Pensionado con enfermedades graves</strong></DsLink
        ></span
      >
    </div>
    <div>
      Teléfono del solicitante<br />
      <span><strong>+5699456478</strong></span>
    </div>
    <div>
      Teléfono del pensionado<br />
      <span><strong>+5698364937</strong></span>
    </div>
    <div>
      Dirección donde se debe realizar la visita (Residencia particular)<br />
      <span
        ><strong
          >Del Rodeo, #334, Parque Casas de lo Ovalle, Quilicura, Santiago,
          Región Metropolitana.</strong
        ></span
      >
    </div>
    <div>
      Tipo de parentesco con el pensionado<br />
      <span><strong>Sobrino</strong></span>
    </div>
    <div>
      Solicitud presentada a nombre de un tercero<br />
      <span><strong>Magdalena Martinez</strong></span>
    </div>
    <div>
      Correo electrónico del apoderado que recibirá notificaciones<br />
      <span><strong>felipe@gmail.com</strong></span>
    </div>
    <div>
      Oficina IPS/ChileAtiende encargada de coordinar visita<br />
      <span><strong>Oficina ChileAtiende Peñalolen</strong></span>
    </div>
    <div>
      Fecha de resolución<br />
      <span><strong>13-12-2021</strong></span>
    </div>
    <div>
      Archivo digital<br />
      <span
        ><strong><DsLink>DescargarPDF333</DsLink></strong></span
      >
    </div>
    <hr aria-hidden="true" />
    <DsTypography class="mb-5" variant="p">
      Si necesita más información por favor visite una de
      <DsLink>nuestras sucursales IPS/ChileAtiende</DsLink>
      , o llame al 101.
    </DsTypography>
    <div class="field cont-btn">
      <DsButton color="tertiary"> Volver a la ficha</DsButton>
    </div>
  </div>
</template>
