<script lang="ts" setup>
import DsTypography from "../basic/typography/DsTypography.vue";
import DsInput from "../form/input/DsInput.vue";
import DsSelect from "../form/select/DsSelect.vue";
import type { IForm2State } from "~/components/DesignSystem/components/form-example/interface";
import {
  comunaOption,
  regionOption,
} from "~/components/DesignSystem/components/form-example/library";
import type { IVualidateFormAttorneyState } from "~/components/DesignSystem/components/form-example/vualidate";
import { translateError } from "~/components/DesignSystem/utils/translateErrorMessage";

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
</script>

<template>
  <div class="form-sector mt-5">
    <header>
      <DsTypography variant="h3"> Información del apoderado</DsTypography>
    </header>

    <div class="field">
      <DsInput
        v-model="modelValue.name"
        :error="translateError(validate?.name.$errors[0]?.$message)"
        class="input"
        helpMessage="Ingrese nombre de apoderado"
        label="Nombre del posible apoderado (en caso de realizar esta solicitud por parte de un tercero)"
        required
      />
    </div>

    <div class="field">
      <DsInput
        v-model="modelValue.run"
        :error="translateError(validate?.run.$errors[0]?.$message)"
        class="input"
        helpMessage="Ingrese RUN del apoderado"
        label="Indique el RUN del posible apoderado"
        required
      />
    </div>

    <div class="field">
      <DsSelect
        v-model="modelValue.region"
        :error="translateError(validate?.region.$errors[0]?.$message)"
        :option="regionOption"
        class="select w-full"
        helpMessage="Selecciona la región del apoderado"
        label="Región"
        required
      />
    </div>

    <div class="field">
      <DsSelect
        v-model="modelValue.community"
        :error="translateError(validate?.community.$errors[0]?.$message)"
        :option="comunaOption"
        class="w-full"
        helpMessage="Selecciona la comuna del apoderado"
        label="Comuna"
        required
      />
    </div>

    <div class="field">
      <DsInput
        v-model="modelValue.address"
        :error="translateError(validate?.address.$errors[0]?.$message)"
        class="input"
        helpMessage="Ingresa la dirección del apoderado"
        label="Dirección del apoderado"
        required
      />
    </div>

    <div class="field">
      <DsInput
        v-model="modelValue.addressNumber"
        :error="translateError(validate?.addressNumber.$errors[0]?.$message)"
        :maxValue="999999"
        :minValue="1"
        class="input"
        helpMessage="Ingrese número de la dirección del apoderado"
        label="Número"
        required
        type="number"
      />
    </div>

    <div class="field">
      <DsInput
        v-model="modelValue.email"
        :error="translateError(validate?.email.$errors[0]?.$message)"
        class="input"
        helpMessage="Ingrese correo del apoderado"
        label="Correo electrónico del apoderado que recibirá notificaciones"
        required
        type="email"
      />
    </div>

    <div class="field">
      <DsInput
        v-model="modelValue.pensionerRelation"
        :error="
          translateError(validate?.pensionerRelation.$errors[0]?.$message)
        "
        class="input"
        helpMessage="Ingrese parentesco"
        label="Indique el parentesco o relación con el pensionado"
        required
      />
    </div>
  </div>
</template>

<style scoped></style>
