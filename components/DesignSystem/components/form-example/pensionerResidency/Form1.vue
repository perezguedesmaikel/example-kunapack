<script lang="ts" setup>
import DsTypography from "~/components/DesignSystem/components/basic/typography/DsTypography.vue";
import DsRadio from "~/components/DesignSystem/components/form/radio/DsRadio.vue";
import DsSelect from "~/components/DesignSystem/components/form/select/DsSelect.vue";
import DsFile from "~/components/DesignSystem/components/form/file/DsFile.vue";
import DsDatePicker from "~/components/DesignSystem/components/form/datePicker/DsDatePicker.vue";
import DsInput from "~/components/DesignSystem/components/form/input/DsInput.vue";
import type { IForm1State } from "~/components/DesignSystem/components/form-example/pensionerResidency/interface";
import { translateError } from "~/components/DesignSystem/utils/translateErrorMessage";
import {
  comunaOption,
  healthStatusOption,
  reasonOption,
  regionOption,
  residenceOption,
  userProfile,
} from "~/components/DesignSystem/components/form-example/pensionerResidency/library";
import type { IVualidateApplicantState } from "~/components/DesignSystem/components/form-example/pensionerResidency/vualidate";
import DsModal from "~/components/DesignSystem/components/container/modal/DsModal.vue";
import FormModal from "~/components/DesignSystem/components/form-example/pensionerResidency/form1Components/FormModal.vue";
import UserCardProfile from "~/components/DesignSystem/components/form-example/pensionerResidency/form1Components/UserCardProfile.vue";
import UserInfo from "~/components/DesignSystem/components/form-example/pensionerResidency/form1Components/UserInfo.vue";

defineProps({
  modelValue: {
    type: Object as () => IForm1State,
    required: true,
  },
  validate: {
    type: Object as () => IVualidateApplicantState,
  },
});

const date = ref(new Date());
const showModal = ref(false);

function handleClick() {
  showModal.value = true;
}
</script>

<template>
  <DsModal v-model="showModal" title="Editar datos de Contacto">
    <FormModal :data-form="userProfile" />
  </DsModal>
  <div class="mt-5 w-full">
    <div id="relleno">
      <DsTypography class="my-4" variant="h2">Formulario</DsTypography>

      <DsTypography aria-hidden="true" class="my-4" variant="p"
        >Los campos marcados con * son obligatorios
      </DsTypography>

      <div class="cont-form-sector">
        <UserCardProfile
          :data-profile="userProfile"
          @button-click="handleClick"
        />
      </div>

      <UserInfo />
    </div>
    <form class="cont-form-sector">
      <header>
        <DsTypography variant="h3"> Información del solicitante</DsTypography>
      </header>

      <div class="cont-form-group">
        <legend id="label_quien_solicita_visita" class="mb-2">
          ¿Quién solicita la visita? *
        </legend>

        <div class="control">
          <DsRadio
            v-model="modelValue.applicant"
            aria-labelledby="label_quien_solicita_visita"
            class="cont-gr"
            label="Pensionado"
            value="Pensionado"
          />
          <DsRadio
            v-model="modelValue.applicant"
            aria-labelledby="label_quien_solicita_visita"
            class="cont-gr"
            label="Familiar directo"
            value="Familiar directo"
          />
          <DsRadio
            v-model="modelValue.applicant"
            :error="translateError(validate?.applicant.$errors[0]?.$message)"
            aria-labelledby="label_quien_solicita_visita"
            class="cont-gr"
            label="Encargado de cuidados u otro"
            value="Encargado de cuidados u otro"
          />
        </div>
      </div>

      <div class="cont-form-group">
        <DsSelect
          v-model="modelValue.reason"
          :error="translateError(validate?.reason.$errors[0]?.$message)"
          :option="reasonOption"
          class="select w-full"
          label="Ingrese el motivo fundado por el cual se está solicitando esta visita"
          placeholder="Motivo fundado"
          required
        />
      </div>

      <div class="cont-form-group">
        <DsFile
          v-model="modelValue.docFile"
          :error="translateError(validate?.docFile.$errors[0]?.$message)"
          class="upload control file-label"
          helpText="PDF, JPG o PNG"
          label="Adjunte documento"
          required
          size="full"
        />
      </div>

      <div>
        <DsDatePicker
          v-model="modelValue.date"
          :error="translateError(validate?.date.$errors[0]?.$message)"
          class="columns is-mobile mb-0"
          label="Fecha de nacimiento"
          required
        />
      </div>

      <div class="cont-form-group">
        <DsInput
          v-model="modelValue.phone"
          :error="translateError(validate?.phone.$errors[0]?.$message)"
          help-message="Ejemplos: Móvil:  91234567 / Fijo: 521234567"
          label="Teléfono del pensionado"
          placeholder="Ingresa el teléfono del pensionado"
          required
          type="phone"
        />
      </div>

      <div class="cont-form-group">
        <DsInput
          v-model="modelValue.mail"
          :error="translateError(validate?.mail.$errors[0]?.$message)"
          label="Correo electrónico del pensionado"
          placeholder="Ingresa el correo electrónico del pensionado"
          required
          type="email"
        />
      </div>

      <div class="cont-form-group">
        <DsSelect
          v-model="modelValue.healthStatus"
          :error="translateError(validate?.healthStatus.$errors[0]?.$message)"
          :option="healthStatusOption"
          class="select w-full"
          label="Estado de salud del pensionado"
          placeholder="Selecciona el estado de salud del pensionado"
          required
        />
      </div>

      <div class="cont-form-group">
        <DsSelect
          v-model="modelValue.residence"
          :error="translateError(validate?.residence.$errors[0]?.$message)"
          :option="residenceOption"
          class="select w-full"
          label="Residencia del pensionado"
          placeholder="Seleccione residencia del pensionado"
          required
        />
      </div>

      <div class="cont-form-group">
        <DsSelect
          v-model="modelValue.region"
          :error="translateError(validate?.region.$errors[0]?.$message)"
          :option="regionOption"
          class="select w-full"
          label="Región"
          placeholder="Selecciona la región del pensionado"
          required
        />
      </div>

      <div class="cont-form-group">
        <DsSelect
          v-model="modelValue.comuna"
          :error="translateError(validate?.comuna.$errors[0]?.$message)"
          :option="comunaOption"
          class="select w-full"
          label="Comuna"
          placeholder="Selecciona la comuna del pensionado"
          required
        />
      </div>

      <div class="cont-form-group">
        <DsInput
          v-model="modelValue.address"
          :error="translateError(validate?.address.$errors[0]?.$message)"
          class="input"
          label="Dirección del pensionado"
          placeholder="Ingresa la dirección del pensionado"
          required
        />
      </div>

      <div class="cont-form-group">
        <DsInput
          v-model="modelValue.number"
          :error="translateError(validate?.number.$errors[0]?.$message)"
          :maxValue="999999"
          :minValue="1"
          class="input"
          label="Número"
          placeholder="Ingrese número de la dirección del pensionado"
          required
          type="number"
        />
      </div>
    </form>
  </div>
</template>
