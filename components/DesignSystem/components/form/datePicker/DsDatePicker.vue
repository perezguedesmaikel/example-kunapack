<script lang="ts" setup>
import { months } from "~/components/DesignSystem/components/form/datePicker/library";
import {
  days,
  years,
} from "~/components/DesignSystem/components/form/datePicker/utils";
import type { InputType } from "~/components/DesignSystem/components/form/datePicker/interface";
import type { Ref } from "vue";
import DsSelect from "~/components/DesignSystem/components/form/select/DsSelect.vue";
import { filterClass } from "~/components/DesignSystem/utils/filterClass";
import { predefinedClasses } from "~/components/DesignSystem/common/propsStyle";
//version estable
const props = defineProps({
  error: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  focus: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: Date,
    default: null,
  },
  isHideLabel: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  labelText: {
    type: String,
    default: "Fecha",
  },
  required: {
    type: Boolean,
    default: false,
  },
  class: {
    type: String,
    default: "",
  },
});
const filterClassComp = computed(() => {
  return filterClass(predefinedClasses, props.class);
});
const calculateValue = (type: "finalDay" | "finalMonth" | "finalYear") =>
  computed(() => {
    switch (type) {
      case "finalDay":
        return props.modelValue?.getDate();
      case "finalYear":
        return props.modelValue?.getFullYear();
      case "finalMonth":
        return !isNaN(props.modelValue?.getMonth())
          ? props.modelValue?.getMonth() + 1
          : 0;
    }
  });

const finalDay = calculateValue("finalDay");
const finalMonth = calculateValue("finalMonth");
const finalYear = calculateValue("finalYear");
const day = ref(finalDay.value);
const month = ref(finalMonth.value);
const year = ref(finalYear.value);

watch(finalDay, (newValue) => {
  day.value = newValue;
});
watch(finalYear, (newValue) => {
  year.value = newValue;
});
watch(finalMonth, (newValue) => {
  month.value = newValue;
});
const emit = defineEmits(["update:modelValue"]);

// Function to handle the input event and update dateParts
const inputs: Record<InputType, Ref<number>> = { day, month, year };

function handleInput(e: Event, type: InputType) {
  const target = e.target as HTMLInputElement;
  // Actualizar la ref relevante basándose en 'type'
  if (inputs[type]) {
    inputs[type].value = parseInt(target.value);
  }
}

// Function to evaluate if date is complete and emit event
function emitIfComplete() {
  if (day.value && month.value !== 0 && year.value) {
    emit("update:modelValue", new Date(year.value, month.value - 1, day.value));
  }
}

// Wrapper function for input event handling and emission
function emitCompleteDate(e: Event, type: InputType) {
  handleInput(e, type);
  emitIfComplete();
  return null;
}
</script>

<template>
  <div :class="filterClassComp">
    <span v-if="!isHideLabel" class="mb-2">{{ labelText }}</span>
    <div class="grid grid-cols-3 gap-2">
      <div class="w-full">
        <DsSelect
          v-model="day"
          :disabled="disabled"
          :error="error && (day === 0 || !day)"
          :focus="focus"
          :required="required"
          :rounded="rounded"
          label="Día"
          size="full"
          @select="(e) => emitCompleteDate(e, 'day')"
        >
          <option :value="0" disabled selected>Selecciona día</option>
          <option
            v-for="tDay in days"
            :key="tDay"
            :selected="+tDay === day"
            :value="tDay"
          >
            {{ tDay < 10 ? `0${tDay}` : tDay }}
          </option>
        </DsSelect>
      </div>
      <div class="w-full">
        <DsSelect
          v-model="month"
          :disabled="disabled"
          :error="error && (month === 0 || !month)"
          :focus="focus"
          :required="required"
          :rounded="rounded"
          label="Mes"
          size="full"
          @select="(e) => emitCompleteDate(e, 'month')"
        >
          <option :value="0" disabled selected>Selecciona mes</option>
          <option
            v-for="tMonth in months"
            :key="tMonth"
            :selected="tMonth.value === month"
            :value="tMonth.value"
          >
            {{ tMonth.name }}
          </option>
        </DsSelect>
      </div>
      <div class="w-full">
        <DsSelect
          v-model="year"
          :disabled="disabled"
          :error="error && (year === 0 || !year)"
          :focus="focus"
          :required="required"
          :rounded="rounded"
          label="Año"
          size="full"
          @select="(e) => emitCompleteDate(e, 'year')"
        >
          <option :value="0" disabled selected>Selecciona año</option>
          <option
            v-for="tYear in years"
            :key="tYear"
            :selected="+tYear === year"
            :value="tYear"
          >
            {{ tYear }}
          </option>
        </DsSelect>
      </div>
    </div>
  </div>
  <br />
</template>
