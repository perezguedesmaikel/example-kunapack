<script lang="ts" setup>
import DsTypography from "~/components/DesignSystem/components/basic/typography/DsTypography.vue";
import DsLink from "~/components/DesignSystem/components/navigation/link/DsLink.vue";
import DsAlert from "~/components/DesignSystem/components/basic/alert/DsAlert.vue";
import DsInput from "~/components/DesignSystem/components/form/input/DsInput.vue";
import DsButton from "~/components/DesignSystem/components/basic/button/DsButton.vue";
import { required } from "@vuelidate/validators";
import { isValidRUT } from "~/components/DesignSystem/utils/isValidRut";
import { useVuelidate } from "@vuelidate/core";
import { translateError } from "~/components/DesignSystem/utils/translateErrorMessage";
import PaymentInfo from "./components/PaymentInfo.vue";
import ImportantInfoPage from "~/components/DesignSystem/components/form-example/benefit-payment-information/components/ImportantInfoPage.vue";

const step = ref(1);
const form = reactive({ rut: "" });
const loading = ref(false);

const rutValidate = {
  $message: "No es un run valido",
  $validator: isValidRUT,
};
const formRules = reactive({
  rut: { required, rutValidate },
});
const validateForm = useVuelidate(formRules, form);

function handleSubmit() {
  validateForm.value.$touch();
  if (!validateForm.value.$invalid) {
    // Activar el spinner de carga
    loading.value = true;
    console.log("Envío del formulario iniciado");

    // Simular conexión API con setTimeout
    setTimeout(() => {
      console.log("Conexion con API simulada finalizada");

      // Aquí es donde se maneja la integración, después de que se "conecte" con la API.
      step.value = 2;
      window.scrollTo({ top: 0, behavior: "smooth" });
      validateForm.value.$reset();
      form.rut = "";

      // Detener el spinner de carga
      loading.value = false;
    }, 1000);
  }
}
</script>

<template>
  <div class="column">
    <section>
      <header>
        <DsTypography variant="h4"
          >Servicio de información entregado por
          <DsLink
            href="https://www.chileatiende.gob.cl/instituciones/AL005"
            title="Instituto de Previsión Social"
            >Instituto de Previsión Social
          </DsLink>
        </DsTypography>
        <DsTypography variant="h1"
          >Consulta la fecha y forma de pago de tus beneficios
        </DsTypography>
        <DsTypography variant="p">
          Permite a beneficiarios de pensiones previsionales, Pensión Básica
          Solidaria, Subsidio Familiar y otros beneficios del IPS conocer
          detalles de su próximo pago.
          <DsLink
            href="https://www.chileatiende.gob.cl/fichas/5212"
            target="_blank"
            title="Más información"
            >Más información.
          </DsLink>
        </DsTypography>
      </header>
      <section>
        <DsAlert v-if="step === 1">
          <DsTypography variant="p">
            Nuevo: hemos actualizado la forma de pago de los beneficiarios que
            retiraban su orden de pago en sucursales IPS – ChileAtiende.
          </DsTypography>
          <DsTypography variant="p">
            Si en los resultados visualiza dos registros con la misma
            información, es porque usted cuenta con un pago rezagado de un mes
            anterior, el cual podrá ser cobrado según la fecha y forma de pago
            indicada.
          </DsTypography>
          <DsTypography variant="p">
            Bono de Emergencia COVID-19: Consulta si eres beneficiario en
            <a class="link" href="#"> www.bonocovid.cl</a>
          </DsTypography>
        </DsAlert>
        <DsAlert v-if="step === 2">
          <DsTypography variant="p">
            - Bono de Emergencia COVID-19: Revisa si eres beneficiario en
            <DsLink
              href="https://www.bonocovid.cl"
              target="_blank"
              title="Más información"
              >www.bonocovid.cl
            </DsLink>
          </DsTypography>
          <DsTypography variant="p">
            - Ingreso Familiar de Emergencia (IFE): Consulta si lo recibirás o
            si debes solicitarlo en
            <DsLink
              href="https://www.ingresodeemergencia.cl"
              target="_blank"
              title="Más información"
              >www.ingresodeemergencia.cl
            </DsLink>
          </DsTypography>
        </DsAlert>
        <form @submit.prevent="handleSubmit">
          <div class="cont-form-sector">
            <DsInput
              v-model="form.rut"
              :error="translateError(validateForm?.rut.$errors[0]?.$message)"
              :focus="validateForm.rut.$invalid && validateForm.rut.$dirty"
              help-message="Los campos marcados con * son obligatorios, Ejemplo: 17.231.182-4"
              label="Ingresa el RUT del beneficiario"
              required
            />
          </div>
          <div class="flex justify-end">
            <DsButton
              :loading="loading"
              class="m-1 mt-3"
              color="primary"
              type="submit"
            >
              Consultar
            </DsButton>
          </div>
        </form>
        <PaymentInfo v-if="step == 2" />
        <ImportantInfoPage v-if="step == 2" />
      </section>
    </section>
  </div>
</template>
