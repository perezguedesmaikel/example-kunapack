<script lang="ts" setup>
import DsTypography from "~/components/DesignSystem/components/basic/typography/DsTypography.vue";
</script>

<template>
  <article class="mb-5">
    <DsTypography class="mb-4" variant="p"
      >Es muy importante que el agendamiento de visitas se puede solicitar
      únicamente bajo <strong>condiciones excepcionales</strong> que son las
      siguientes:
    </DsTypography>
    <div class="columns is-mobile">
      <div class="column is-one-fifth-mobile is-2-tablet is-1-desktop">
        <span class="tag is-warning is-rounded"><span>1</span></span>
      </div>
      <div class="column">Pensionados en hospitales o cárceles</div>
    </div>
    <div class="columns is-mobile">
      <div class="column is-one-fifth-mobile is-2-tablet is-1-desktop">
        <span class="tag is-warning is-rounded"><span>2</span></span>
      </div>
      <div class="column">Pensionados con discapacidad mental</div>
    </div>
    <div class="columns is-mobile">
      <div class="column is-one-fifth-mobile is-2-tablet is-1-desktop">
        <span class="tag is-warning is-rounded"><span>3</span></span>
      </div>
      <div class="column">Pensionados con enfermedades graves</div>
    </div>
    <div class="columns is-mobile">
      <div class="column is-one-fifth-mobile is-2-tablet is-1-desktop">
        <span class="tag is-warning is-rounded"><span>4</span></span>
      </div>
      <div class="column">Pensionados en hospitales psiquiatricos</div>
    </div>
    <div class="columns is-mobile">
      <div class="column is-one-fifth-mobile is-2-tablet is-1-desktop">
        <span class="tag is-warning is-rounded"><span>5</span></span>
      </div>
      <div class="column">Pensionados en casas de reposo</div>
    </div>
    <div class="columns is-mobile">
      <div class="column is-one-fifth-mobile is-2-tablet is-1-desktop">
        <span class="tag is-warning is-rounded"><span>6</span></span>
      </div>
      <div class="column">Orfandad del ex SSS</div>
    </div>
  </article>
  <div
    aria-label="Cuadro de información importante"
    class="msg msg-info"
    role="alert"
  >
    En el momento de la visita debe tener fisicamente la cédula de identidad del
    apoderado y la cédula de identidad del pensionado vigentes
  </div>
</template>

<style scoped></style>
