<template>
  <ProcedurePage
    ariaTitle="Consulta para saber si usted es el beneficiario del Aporte Familiar Permanente"
    title="¿Desea saber si usted es beneficiario del Aporte Familiar Permanente?">
    <form>
      <div class="cont-form-sector">
        <div class="cont-form-group">
          <DsInput
            v-model="model.rut"
            :error="rutErrors"
            label="Ingresa el RUT del beneficiario"
            placeholder="Ejemplo: 12.345.678-9"
            required/>
        </div>

        <div>
          <DsDatePicker
            v-model="model.date"
            :error="dateErrors"
            labelText="Indica la fecha de nacimiento"
            required/>
        </div>
      </div>

      <div class="my-5">
        <span>Los campos marcados con * son obligatorios</span>
      </div>

      <div class="flex justify-end cont-btn">
        <DsButton :rounded="false" color="primary"
                  title="Continuar al paso siguiente"
                  @click="submitForm">
          Consultar
        </DsButton>
      </div>
    </form>
  </ProcedurePage>
</template>

<script lang="ts" setup>
import {useVuelidate} from '@vuelidate/core'
import {required, helpers} from '@vuelidate/validators'
import DsInput from "~/components/DesignSystem/components/form/input/DsInput.vue";
import DsDatePicker from "~/components/DesignSystem/components/form/datePicker/DsDatePicker.vue";
import DsButton from "~/components/DesignSystem/components/basic/button/DsButton.vue";

const model = reactive({
  rut: '',
  date: null,
});

const submitForm = async () => {
  const isValid = await v$.value.$validate();

  if (isValid) {
    navigateTo({
      path: '/consulta-aporte-familiar-middle',
    });
  }
};

const rutValidator = (value: string) => {
  if (!value) {
    return true;
  }

  const regex = RegExp('^\\d{2}\\.\\d{3}\\.\\d{3}-\\d$');

  return regex.test(value);


};

const isValidRut = {
  $message: 'Formato de RUT incorrecto.',
  $validator: rutValidator,
};

const rutErrors = computed(() => {
  return fieldErrors(v$.value.rut);
});

const dateErrors = computed(() => {
  return fieldErrors(v$.value.date);
});

const fieldErrors = (field: any) => {
  return field.$errors.map((error: any) => error.$message).join('<br/>');
};

const rules = computed(() => ({
  rut: {
    required,
    isValidRut,
  },

  date: {required},
}));

const v$ = useVuelidate(rules, model);
</script>