<script lang="ts" setup>
import DsAccordion from "../container/accordion/DsAccordion.vue";
import DataPanel from "./DataPanel.vue";
import sampleData from "./form3-data";
import type { ITotalData } from "~/components/DesignSystem/components/form-example/interface";

const props = defineProps({
  modelValue: {
    type: Object as () => ITotalData,
  },
});

const emit = defineEmits(["update:modelValue"]);

const model = computed({
  get() {
    return props.modelValue;
  },

  set(value) {
    emit("update:modelValue", value);
  },
});

const data = reactive(sampleData);

const solicitorConfig = reactive([
  {
    title: "Quién solicita la visita",
    field: "applicant",
  },
  {
    title: "Motivo fundado por el cual se está solicitando esta visita",
    field: "reason",
  },
  {
    title: "Certificado adjunto",
    field: "docFile",
  },
  {
    title: "Fecha de nacimiento",
    field: "date",
  },
  {
    title: "Teléfono",
    field: "phone",
  },
  {
    title: "Región",
    field: "region",
  },
  {
    title: "Estado de salud del pensionado",
    field: "healthStatus",
  },
  {
    title: "Residencia del pensionado",
    field: "residence",
  },
  {
    title: "Dirección",
    field: "address",
  },
  {
    title: "Número de teléfono",
    field: "phone",
  },
  {
    title: "Correo Electrónico",
    field: "mail",
  },
]);

const proxyConfig = reactive([
  {
    title: "Nombre del posible apoderado",
    field: "name",
  },
  {
    title: "RUN del posible apoderado",
    field: "run",
  },
  {
    title: "Dirección",
    field: "address",
  },
  {
    title: "Correo Electrónico",
    field: "email",
  },
  {
    title: "Tipo de parentesco o relación con el pensionado",
    field: "pensionerRelation",
  },
]);

const warrantConfig = reactive([
  {
    title: "Fecha de emisión",
    field: "date",
  },
  {
    title: "Documento mandato",
    field: "documentUrl",
  },
]);
</script>

<template>
  <div class="form-sector mt-5">
    <DsAccordion class="mt-2" title="Información del solicitante">
      <DataPanel :config="solicitorConfig" :model="modelValue?.solicitor" />
    </DsAccordion>

    <DsAccordion class="mt-2" title="Información del apoderado">
      <DataPanel :config="proxyConfig" :model="modelValue?.proxy" />
    </DsAccordion>

    <DsAccordion class="mt-2" title="Información de poder/mandato">
      <DataPanel :config="warrantConfig" :model="modelValue?.warrant" />
    </DsAccordion>
  </div>
</template>
