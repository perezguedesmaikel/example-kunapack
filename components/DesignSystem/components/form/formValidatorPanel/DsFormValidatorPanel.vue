<script lang="ts" setup>
import type { errorPanelInterface } from "~/components/DesignSystem/components/form/formValidatorPanel/interface";
import { ref } from "vue";
import generateUniqueId from "~/components/DesignSystem/utils/generateUniqueId";
import DsTypography from "~/components/DesignSystem/components/basic/typography/DsTypography.vue";
import { filterClass } from "~/components/DesignSystem/utils/filterClass";
import { predefinedClasses } from "~/components/DesignSystem/common/propsStyle";
// update repo
const props = defineProps({
  errors: {
    type: Array as () => errorPanelInterface[],
  },
  id: {
    type: String,
  },
  class: {
    type: String,
    default: "",
  },
});

const filterClassComp = computed(() => {
  return filterClass(predefinedClasses, props.class);
});

const uniqueID = ref("");
onMounted(() => {
  uniqueID.value = generateUniqueId("validator-panel");
});
</script>

<template>
  <div
    v-if="errors?.some((el) => typeof el.errorMessage === 'string')"
    :id="id ?? uniqueID"
    :class="[
      'border border-danger-500 rounded-lg overflow-hidden my-5 focus:border-lime-300 focus:shadow-lime-500 focus:shadow focus:outline-0 w-full',
      filterClassComp,
    ]"
    aria-labelledby="title-panel-error text-error"
    tabindex="0"
  >
    <header class="bg-danger-500 p-3">
      <DsTypography id="title-panel-error" class="mb-0 text-white" variant="h3"
        >No puedes continuar, algunos de los datos ingresados tienen errores.
      </DsTypography>
    </header>
    <div class="p-3">
      <DsTypography id="text-error" class="mb-2" variant="p"
        >Revisa los siguientes campos ingresados y complétalos correctamente
        para avanzar.
      </DsTypography>
      <ul class="ul marker:text-danger-500">
        <template v-for="el in errors">
          <li v-if="el?.errorMessage" :key="el.id">
            <a :href="'#' + el.id" class="text-danger-500">{{ el.details }}</a>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>
