<script lang="ts" setup>
import DsButton from "~/components/DesignSystem/components/basic/button/DsButton.vue";
import type { IUserProfile } from "~/components/DesignSystem/components/form-example/interface";

defineProps({
  dataProfile: {
    type: Object as () => IUserProfile,
  },
});
const buttonEmit = defineEmits(["buttonClick"]);

function handleClick() {
  buttonEmit("buttonClick");
}
</script>

<template>
  <div>
    <h2>{{ dataProfile?.name }}</h2>
    <h3 class="rut">{{ dataProfile?.ruc }}</h3>
    <div class="cont-gr">
      Fecha de nacimiento<br />
      <strong>{{ dataProfile?.birthday }}</strong>
    </div>
    <div class="cont-gr">
      Dirección<br />
      <strong>{{ dataProfile?.address }}</strong>
    </div>
    <div class="cont-gr">
      Contacto<br />
      <strong>{{ dataProfile?.phoneNumber }}</strong
      ><br />
      <strong>{{ dataProfile?.email }}</strong>
    </div>
    <DsButton color="tertiary" @click="handleClick"
      >Editar datos de contacto
    </DsButton>
  </div>
</template>

<style scoped></style>
