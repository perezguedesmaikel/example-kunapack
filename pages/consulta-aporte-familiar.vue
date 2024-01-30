<template>
  <form>
    <div class="columns">
      <div role="main" aria-label="Consulta para saber si usted es el beneficiario del Aporte Familiar Permanente" class="column">
        <header class="mb-6">
          <DsTypography class="is-upper-text-title">
              Servicio de información entregado por
              <a href="https://www.chileatiende.gob.cl/instituciones/AL005"
              title="Página web del Instituto de Previsión Social IPS" class="link">
              Instituto de Previsión Social
              </a>
          </DsTypography>

          <h1>¿Desea saber si usted es beneficiario del Aporte Familiar Permanente?</h1>
        </header>

        <section id="form_global" role="form">
          <div class="form-sector">
              <div class="field">
              <DsInput v-model="data.rut" label="Ingresa el RUT del beneficiario"
                  placeholderText="Ejemplo: 12.345.678-9"
                  required />
              </div>

              <div class="columns is-mobile">
              <div class="column">
                  <div class="field">
                  <DsDatePicker v-model="data.date"
                      labelText="Indica la fecha de nacimiento" required />

                  </div>
              </div>
              </div>
          </div>

          <div class="cont-req">
              <span>Los campos marcados con * son obligatorios</span>
          </div>

          <div class="flex justify-end cont-btn">
              <DsButton color="primary" title="Continuar al paso siguiente">
              Consultar
              </DsButton>
          </div>
        </section>
      </div>
    </div>
  </form>
</template>

<script setup>
import DsInput from '~/components/DesignSystem/components/form/input/DsInput.vue';
import DsDatePicker from '~/components/DesignSystem/components/form/datePicker/DsDatePicker.vue';
import DsButton from '~/components/DesignSystem/components/basic/button/DsButton.vue';
import DsTypography from '~/components/DesignSystem/components/basic/typography/DsTypography.vue';

const data = reactive({
    rut: '',
    date: null,
});

const onSubmit = () => {
    console.log('Submitting');
};

const validateRut = (value) => {
    if (!value) {
    return 'Este campo es requerido';
    }

    const regex = RegExp( '^\\d{2}\\.\\d{3}\\.\\d{3}\\-\\d$');

    if (!regex.test( value)) {
    return 'Formato de RUT incorrecto.'
    }

    return true;
};
</script>
