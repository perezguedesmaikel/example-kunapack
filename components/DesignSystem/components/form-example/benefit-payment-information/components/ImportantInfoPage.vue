<script lang="ts" setup>
import DsAlert from "~/components/DesignSystem/components/basic/alert/DsAlert.vue";
import DsTypography from "~/components/DesignSystem/components/basic/typography/DsTypography.vue";
import DsButton from "~/components/DesignSystem/components/basic/button/DsButton.vue";
</script>

<template>
  <DsAlert class="mt-5">
    <DsTypography variant="h3"
      >Información importante sobre su forma de pago
    </DsTypography>
    <hr />
    <DsTypography variant="h4">Sucursal Los Héroes.</DsTypography>
    <DsTypography variant="p">
      Este mes su beneficio será pagado en la forma presencial habitual. Sin
      embargo, si recibió la Tarjeta de Prepago de Los Héroes durante abril o
      marzo, a partir de mayo podrá retirar su pago directamente en cualquier
      cajero automático, esto como medida de protección ante la emergencia
      sanitaria.
    </DsTypography>
    <br />
    <DsTypography variant="h4">Depósito.</DsTypography>
    <DsTypography variant="p">
      Recibirá su pago mediante depósito en una cuenta bancaria. Si hasta marzo
      se pagaba en forma presencial, realizaremos el depósito en su CuentaRUT de
      BancoEstado, como medida de protección ante la emergencia sanitaria.
    </DsTypography>
  </DsAlert>
  <section class="flex flex-col justify-center items-center">
    <div class="flex justify-centers">
      <DsTypography class="mt-5" color="primary" variant="h2"
        >Suscríbete ahora al pago bancario
      </DsTypography>
    </div>
    <div class="flex justify-center">
      <DsButton>Comenzar</DsButton>
    </div>
  </section>
</template>
