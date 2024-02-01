<template>
  <div class="container">
    <div class="grid grid-cols-3 gap-2">
      <main class="col-span-2"
        aria-label="Consulta para saber si usted es el beneficiario del Aporte Familiar Permanente">
        <header class="mb-6">
          <DsTypography>
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

        <section role="form">
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
        </section>
      </main>

      <div>
        <div class="p-4 rounded-lg border border-neutral-300"
             aria-labelledby="title-RRSS subtitle-RRSS">
          <DsTypography variant="h3" id="title-RRSS">
            ¿Tienes dudas con este trámite?
          </DsTypography>

          <DsTypography variant="p" id="subtitle-RRSS">
            Comunícate con nosotros
          </DsTypography>

          <nav class="my-4 flex justify-cente">
            <DsLink target="_blank" title="Ir a Twitter"
                    class="flex items-center mb-5 text-lg text-primary"
                    aria-label="Twitter">
              <DsIcon name="twitter" prefix="lab" size="xlarge"/>
            </DsLink>

            <DsLink target="_blank" title="Ir a Facebook"
                    class="flex items-center mb-5 text-lg text-primary"
                    aria-label="Facebook">
              <DsIcon name="facebook" prefix="lab" size="xlarge" />
            </DsLink>

            <DsLink target="_blank" title="Ir a Instagram"
                    class="flex items-center mb-5 text-lg text-primary"
                    aria-label="Instagram">
              <DsIcon name="instagram" prefix="lab" size="xlarge" />
            </DsLink>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup type="ts">
import DsButton from '@perezguedesmaikel/chile-atiende-ui/components/DesignSystem/components/basic/button/DsButton.vue';
import DsIcon from '@perezguedesmaikel/chile-atiende-ui/components/DesignSystem/components/basic/icon/DsIcon.vue';
import DsTypography from '@perezguedesmaikel/chile-atiende-ui/components/DesignSystem/components/basic/typography/DsTypography.vue';
import DsDatePicker from '@perezguedesmaikel/chile-atiende-ui/components/DesignSystem/components/form/datePicker/DsDatePicker.vue';
import DsInput from '@perezguedesmaikel/chile-atiende-ui/components/DesignSystem/components/form/input/DsInput.vue';
import DsLink from '@perezguedesmaikel/chile-atiende-ui/components/DesignSystem/components/navigation/link/DsLink.vue';
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

const v$ = useVuelidate( rules, model);
</script>
