<template>
  <form>
    <div class="columns">
      <div role="main"
           aria-label="Consulta para saber si usted es el beneficiario del Aporte Familiar Permanente"
           class="column">
        <header class="mb-6">
          <DsTypography class="is-upper-text-title">
              Servicio de información entregado por
              <DsLink href="https://www.chileatiende.gob.cl/instituciones/AL005"
                      title="Página web del Instituto de Previsión Social IPS"
                      class="link">
                Instituto de Previsión Social
              </DsLink>
          </DsTypography>

          <DsTypography variant="h1">
            ¿Desea saber si usted es beneficiario del Aporte Familiar Permanente?
          </DsTypography>
        </header>

        <section id="form_global" role="form">
          <div class="form-sector">
            <div class="field">
              <DsInput v-model="state.rut" label="Ingresa el RUT del beneficiario"
                  placeholderText="Ejemplo: 12.345.678-9"
                  :error="rutErrors"
                  :errorMessage="rutErrors"
                  required />
            </div>

            <div class="columns is-mobile">
              <div class="column">
                <div class="field">
                  <DsDatePicker v-model="state.date"
                      labelText="Indica la fecha de nacimiento"
                      :error="dateErrors"
                      :errorMessage="dateErrors"
                      required  />
                </div>
              </div>
            </div>
          </div>

          <div class="cont-req">
            <span>Los campos marcados con * son obligatorios</span>
          </div>

          <div class="flex justify-end cont-btn">
            <DsButton color="primary" :rounded="false"
              title="Continuar al paso siguiente"
              @click="submitForm">
              Consultar
            </DsButton>
          </div>
        </section>
      </div>
    </div>
  </form>
</template>

<script setup type="ts">
import DsInput from '~/components/DesignSystem/components/form/input/DsInput.vue';
import DsDatePicker from '~/components/DesignSystem/components/form/datePicker/DsDatePicker.vue';
import DsButton from '~/components/DesignSystem/components/basic/button/DsButton.vue';
import DsTypography from '~/components/DesignSystem/components/basic/typography/DsTypography.vue';
import DsLink from '~/components/DesignSystem/components/navigation/link/DsLink.vue';
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'

const state = reactive({
  rut: '',
  date: null,
});


const submitForm = async () => {
  const isValid = await v$.value.$validate();

  if (isValid) {
    navigateTo({
      path: '/final-consulta',
    });
  }
};

const rutValidator = (value) => {
  if (!value) {
    return true;
  }

  const regex = RegExp( '^\\d{2}\\.\\d{3}\\.\\d{3}\\-\\d$');

  if (!regex.test( value)) {
    return false;
  }

  return true;
};

const isValidRut = helpers.withMessage(
  'Formato de RUT incorrecto.',
  rutValidator
);

const rutErrors = computed(() => {
  return fieldErrors( v$.value.rut);
});

const dateErrors = computed(() => {
  return fieldErrors( v$.value.date);
});

const fieldErrors = (field) => {
  return field.$errors.map( (error) => error.$message).join( '<br/>');
};

const rules = () => ({
  rut: {
    required,
    isValidRut,
  },

  date: { required },
});

const v$ = useVuelidate( rules, state);
</script>
