<script lang="ts" setup>
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import DsInput from "~/components/DesignSystem/components/form/input/DsInput.vue";
import DsDatePicker from "~/components/DesignSystem/components/form/datePicker/DsDatePicker.vue";
import DsButton from "~/components/DesignSystem/components/basic/button/DsButton.vue";
import ProcedurePage from "~/components/ProcedurePage.vue";
import FormValidatorPanel from "~/components/DesignSystem/components/form/formValidatorPanel/DsFormValidatorPanel.vue";
import { type ComputedRef, nextTick } from "vue";
import type { errorPanelInterface } from "~/components/DesignSystem/components/form/formValidatorPanel/interface";
import { scrollToSection } from "~/components/DesignSystem/utils/scrollToSection";

const model = reactive({
  rut: "",
  date: null,
});

const submitForm = async () => {
  const isValid = await v$.value.$validate();

  if (isValid) {
    navigateTo({
      path: "/consulta-aporte-familiar-middle",
    });
  } else {
    await nextTick(scrollToSection);
  }
};

const rutValidator = (value: string) => {
  if (!value) {
    return true;
  }

  const regex = RegExp("^\\d{2}\\.\\d{3}\\.\\d{3}-\\d$");

  return regex.test(value);
};

const isValidRut = {
  $message: "Formato de RUT incorrecto.",
  $validator: rutValidator,
};

const rutErrors = computed(() => {
  return v$.value.rut.$errors[0]?.$message;
});

const dateErrors = computed(() => {
  return v$.value.date.$errors[0]?.$message;
});

const rules = computed(() => ({
  rut: {
    required,
    isValidRut,
  },

  date: { required },
}));

const v$ = useVuelidate(rules, model);

const errorPanel: ComputedRef<errorPanelInterface[]> = computed(() => [
  {
    id: "rut",
    details: "Ingresa el RUT del beneficiario",
    errorMessage: rutErrors.value,
  },
  {
    id: "date",
    details: "Indica la fecha de nacimiento",
    errorMessage: dateErrors.value,
  },
]);
</script>

<template>
  <ProcedurePage
    title="¿Desea saber si usted es beneficiario del Aporte Familiar Permanente?"
  >
    <div aria-hidden="true" class="my-5">
      <span>Los campos marcados con * son obligatorios</span>
    </div>
    <div class="my-5">
      <FormValidatorPanel id="validator-panel" :errors="errorPanel" />
    </div>
    <form>
      <div class="cont-form-sector">
        <div class="cont-form-group">
          <DsInput
            id="rut"
            v-model="model.rut"
            :error="rutErrors"
            help-message="Ejemplo: 12.345.678-9"
            label="Ingresa el RUT del beneficiario"
            required
          />
        </div>

        <div>
          <DsDatePicker
            id="date"
            v-model="model.date"
            :error="dateErrors"
            label="Indica la fecha de nacimiento"
            required
          />
        </div>
      </div>

      <div class="flex justify-end cont-form-btn my-5">
        <DsButton
          :rounded="false"
          color="primary"
          title="Continuar al paso siguiente"
          @click="submitForm"
        >
          Consultar
        </DsButton>
      </div>
    </form>
  </ProcedurePage>
</template>
