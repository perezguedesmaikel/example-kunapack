<script lang="ts" setup>
import DsTypography from "../../basic/typography/DsTypography.vue";
import DsInput from "../../form/input/DsInput.vue";
import DsSelect from "../../form/select/DsSelect.vue";
import type { IForm2State } from "~/components/DesignSystem/components/form-example/pensionerResidency/interface";
import {
  comunaOption,
  regionOption,
} from "~/components/DesignSystem/components/form-example/pensionerResidency/library";
import type { IVualidateFormAttorneyState } from "~/components/DesignSystem/components/form-example/pensionerResidency/vualidate";
import { translateError } from "~/components/DesignSystem/utils/translateErrorMessage";
import { isFieldFirstError } from "~/components/DesignSystem/utils/isFieldFirstError";

const props = defineProps({
  modelValue: {
    type: Object as () => IForm2State,
    required: true,
  },
  validate: {
    type: Object as () => IVualidateFormAttorneyState,
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
const errors = computed(() => ({
  name: props.validate?.name.$errors[0]?.$message,
  run: props.validate?.run.$errors[0]?.$message,
  region: props.validate?.region.$errors[0]?.$message,
  community: props.validate?.community.$errors[0]?.$message,
  address: props.validate?.address.$errors[0]?.$message,
  addressNumber: props.validate?.addressNumber.$errors[0]?.$message,
  email: props.validate?.email.$errors[0]?.$message,
  pensionerRelation: props.validate?.pensionerRelation.$errors[0]?.$message,
}));
</script>

<template>
  <header class="mt-5 w-full">
    <DsTypography aria-hidden="true" class="text-left my-4" variant="p"
      >Los campos marcados con * son obligatorios
    </DsTypography>
  </header>
  <div class="cont-form-sector mt-5 w-full">
    <header class="mb-5">
      <DsTypography variant="h3"> Información del apoderado</DsTypography>
    </header>

    <div class="cont-form-group">
      <DsInput
        v-model="modelValue.name"
        :error="translateError(validate?.name.$errors[0]?.$message)"
        :focus="isFieldFirstError(errors, 'name')"
        class="input"
        label="Nombre del posible apoderado (en caso de realizar esta solicitud por parte de un tercero)"
        required
      />
    </div>

    <div class="cont-form-group">
      <DsInput
        v-model="modelValue.run"
        :error="translateError(validate?.run.$errors[0]?.$message)"
        :focus="isFieldFirstError(errors, 'run')"
        class="input"
        help-message="Ejemplo: 17.231.182-4"
        label="Indique el RUN del posible apoderado"
        required
      />
    </div>

    <div class="cont-form-group">
      <DsSelect
        v-model="modelValue.region"
        :error="translateError(validate?.region.$errors[0]?.$message)"
        :focus="isFieldFirstError(errors, 'region')"
        :option="regionOption"
        class="select w-full"
        label="Seleccione la región"
        required
      />
    </div>

    <div class="cont-form-group">
      <DsSelect
        v-model="modelValue.community"
        :error="translateError(validate?.community.$errors[0]?.$message)"
        :focus="isFieldFirstError(errors, 'community')"
        :option="comunaOption"
        class="w-full"
        label="Seleccione la comuna"
        required
      />
    </div>

    <div class="cont-form-group">
      <DsInput
        v-model="modelValue.address"
        :error="translateError(validate?.address.$errors[0]?.$message)"
        :focus="isFieldFirstError(errors, 'address')"
        class="input"
        label="Ingrese la dirección del apoderado"
        required
      />
    </div>

    <div class="cont-form-group">
      <DsInput
        v-model="modelValue.addressNumber"
        :error="translateError(validate?.addressNumber.$errors[0]?.$message)"
        :focus="isFieldFirstError(errors, 'addressNumber')"
        :maxValue="999999"
        :minValue="1"
        class="input"
        label="Ingrese número de la dirección del apoderado"
        required
        type="number"
      />
    </div>

    <div class="cont-form-group">
      <DsInput
        v-model="modelValue.email"
        :error="translateError(validate?.email.$errors[0]?.$message)"
        :focus="isFieldFirstError(errors, 'email')"
        class="input"
        label="Ingrese el correo electrónico del apoderado donde recibirá las notificaciones"
        required
        type="email"
      />
    </div>

    <div class="cont-form-group">
      <DsInput
        v-model="modelValue.pensionerRelation"
        :error="
          translateError(validate?.pensionerRelation.$errors[0]?.$message)
        "
        :focus="isFieldFirstError(errors, 'pensionerRelation')"
        class="input"
        label="Indique el parentesco o relación con el pensionado"
        required
      />
    </div>
  </div>
</template>

<style scoped></style>
