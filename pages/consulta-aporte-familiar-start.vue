<template>
  <ProcedurePage
    title="¿Desea saber si usted es beneficiario del Aporte Familiar Permanente?"
    ariaTitle="Consulta para saber si usted es el beneficiario del Aporte Familiar Permanente">
    <form>
      <div class="cont-form-sector">
        <div class="cont-form-group">
          <DsInput
            v-model="model.rut"
            label="Ingresa el RUT del beneficiario"
            placeholder="Ejemplo: 12.345.678-9"
            :error="rutErrors"
            required />
        </div>

        <div>
          <DsDatePicker
            v-model="model.date"
            labelText="Indica la fecha de nacimiento"
            :error="dateErrors"
            required  />
        </div>
      </div>

      <div class="my-5">
        <span>Los campos marcados con * son obligatorios</span>
      </div>

      <div class="flex justify-end cont-btn">
        <DsButton color="primary" :rounded="false"
          title="Continuar al paso siguiente"
          @click="submitForm">
          Consultar
        </DsButton>
      </div>
    </form>
  </ProcedurePage>
</template>

<script lang="ts" setup>
import DsButton from '@perezguedesmaikel/chile-atiende-ui/components/DesignSystem/components/basic/button/DsButton.vue';
import DsDatePicker from '@perezguedesmaikel/chile-atiende-ui/components/DesignSystem/components/form/datePicker/DsDatePicker.vue';
import DsInput from '@perezguedesmaikel/chile-atiende-ui/components/DesignSystem/components/form/input/DsInput.vue';
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'

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

  const regex = RegExp( '^\\d{2}\\.\\d{3}\\.\\d{3}\\-\\d$');

  if (!regex.test( value)) {
    return false;
  }

  return true;
};

const isValidRut = {
  $message: 'Formato de RUT incorrecto.',
  $validator: rutValidator,
};

const rutErrors = computed(() => {
  return fieldErrors( v$.value.rut);
});

const dateErrors = computed(() => {
  return fieldErrors( v$.value.date);
});

const fieldErrors = (field: any) => {
  return field.$errors.map( (error: any) => error.$message).join( '<br/>');
};

const rules = computed(() => ({
  rut: {
    required,
    isValidRut,
  },

  date: { required },
}));

const v$ = useVuelidate( rules, model);
</script>
