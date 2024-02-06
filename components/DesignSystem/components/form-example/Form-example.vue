<script lang="ts" setup>
import DsStepper from "~/components/DesignSystem/components/form/stepper/DsStepper.vue";
import Form1 from "~/components/DesignSystem/components/form-example/Form1.vue";
import Form2 from "~/components/DesignSystem/components/form-example/Form2.vue";
import Form3 from "~/components/DesignSystem/components/form-example/Form3.vue";
import Form4 from "~/components/DesignSystem/components/form-example/Form4.vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import DsLink from "~/components/DesignSystem/components/navigation/link/DsLink.vue";
import DsTypography from "~/components/DesignSystem/components/basic/typography/DsTypography.vue";

const step = ref(1);

const formApplicantState = reactive({
  applicant: "",
  reason: null,
  docFile: null,
  date: null,
  phone: "",
  mail: "",
  healthStatus: null,
  residence: null,
  region: null,
  comuna: null,
  address: "",
  number: "",
});
const formAttorneyState = reactive({
  name: "",
  run: "",
  region: null,
  community: null,
  address: "",
  addressNumber: "",
  email: "",
  pensionerRelation: "",
});
const totalData = ref({
  ...{ solicitor: formApplicantState },
  ...{ proxy: formAttorneyState },
  ...{
    warrant: {
      date: "24/10/2020",
      documentUrl: "mandato.pdf",
    },
  },
});
const formApplicantRules = {
  applicant: { required },
  reason: { required },
  docFile: { required },
  date: { required },
  phone: { required },
  mail: { required },
  healthStatus: { required },
  residence: { required },
  region: { required },
  comuna: { required },
  address: { required },
  number: { required },
};
const formAttorneyStateRules = reactive({
  name: { required },
  run: { required },
  region: { required },
  community: { required },
  address: { required },
  addressNumber: { required },
  email: { required },
  pensionerRelation: { required },
});

const form1 = useVuelidate(formApplicantRules, formApplicantState);
const form2 = useVuelidate(formAttorneyStateRules, formAttorneyState);

function handleStep1(value: number) {
  form1.value.$touch();
  if (!form1.value.$invalid) {
    step.value = value;
  }
}

const loading = ref(false);

function handleStep2(value: number) {
  form2.value.$touch();
  if (!form2.value.$invalid) {
    step.value = value;
  }
}

function handleStep3(value: number, type: string) {
  if (type == "mainButton") {
    const dataServer = {
      ...{ solicitor: formAttorneyState },
      ...{ proxy: formApplicantState },
      ...{
        warrant: {
          date: "24/10/2020",
          documentUrl: "mandato.pdf",
        },
      },
    };
    loading.value = true;
    new Promise<void>((resolve, reject) => {
      setTimeout(function () {
        let success = true; // Put your condition here.
        if (success) {
          resolve();
        } else {
          reject();
        }
      }, 2000);
    })
      .then(() => {
        // This function executes when the promise is resolved, i.e., call to server was successful.
        console.log(dataServer);
        step.value = value;
      })
      .catch(() => {
        // This function executes when the promise is rejected, i.e., call to server failed.
        // Handle the error here
      })
      .finally(() => {
        loading.value = false;
      });
  } else {
    step.value = value;
  }
}

function handleChangeStep(value: number, type: string) {
  switch (step.value) {
    case 1:
      handleStep1(value);
      break;
    case 2:
      handleStep2(value);
      break;
    case 3:
      handleStep3(value, type);
      break;
    case 4:
      break;
  }
}
</script>

<template>
  <span class="is-upper-text-title">
    Servicio de información entregado por
    <DsLink>Instituto de Previsión Social</DsLink></span
  >
  <DsTypography class="text-3xl" variant="h1"
    >Solicitud de hora para trámite en residencia del pensionado
  </DsTypography>

  <div class="flex flex-col items-center justify-center mt-6">
    <DsStepper
      v-model="step"
      :error="form1.$error || form2.$error"
      :loading="loading"
      @change-step="handleChangeStep"
    >
      <Form1 v-if="step == 1" v-model="formApplicantState" :validate="form1" />
      <Form2 v-if="step == 2" v-model="formAttorneyState" :validate="form2" />
      <Form3 v-if="step == 3" v-model="totalData" />
      <Form4 v-if="step == 4" />
    </DsStepper>
  </div>
</template>

<style scoped></style>
