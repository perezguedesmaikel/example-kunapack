<script lang="ts" setup>
import DsIcon from "../../basic/icon/DsIcon.vue";
import generateUniqueId from "~/components/DesignSystem/utils/generateUniqueId";
import { predefinedClasses } from "~/components/DesignSystem/common/propsStyle";
import { filterClass } from "~/components/DesignSystem/utils/filterClass";
import { ref, computed } from "vue";
import { loremItsum } from "~/components/DesignSystem/utils/loremItsum";
import DsTypography from "~/components/DesignSystem/components/basic/typography/DsTypography.vue";

const props = defineProps({
  class: {
    type: String,
    default: "",
  },
  type: {
    type: String as () => IAccordionType,
    default: "standard",
  },

  triggerText: {
    type: String,
    default: "Default trigger",
  },

  title: {
    type: String,
    default: "Default title",
  },

  collapsed: {
    type: Boolean,
    default: true,
  },

  children: {
    type: String,
    default: loremItsum,
  },
});

const contentId = generateUniqueId();
const isCollapsed = ref(props.collapsed);

const toggleCollapse = () => (isCollapsed.value = !isCollapsed.value);

const defaultClasses = computed(() => {
  let result = "collapsed border";

  if (isCard.value) {
    result += " border-neutral-300 rounded-lg overflow-hidden";
  }

  return result;
});

const filterClassComp = computed(() => {
  return filterClass(predefinedClasses, props.class);
});

const cssClasses = computed(() => [
  filterClassComp.value,
  defaultClasses.value,
]);

const triggerClass = computed(() => {
  let result = "flex justify-between items-center w-full ";

  switch (props.type) {
    case "standard":
      result += " border border-neutral-300 bg-neutral-100 py-2 px-4";
      break;

    case "card":
      result += " border-l-8 border-primary-500 py-3 px-4";
      break;
  }

  return result;
});

const contentCssClass = computed(() => {
  let result = "p-4";

  switch (props.type) {
    case "standard":
      result += " border-x border-b border-neutral-300";
      break;

    case "card":
      result += " border-l-8 border-primary-500";
      break;
  }

  return result;
});

const collapseTitleCssClass = computed(() => {
  let result = "font-robotoSlab text-neutral-700";

  switch (props.type) {
    case "standard":
      result += " text-xl";
      break;

    case "card":
      result += " text-2xl font-robotoSlab text-neutral-700";
      break;
  }

  return result;
});

const isStandard = computed(() => {
  return props.type === "standard";
});

const isCard = computed(() => {
  return props.type === "card";
});
console.log("Viendo las clases", cssClasses);
</script>

<template>
  <div :class="[cssClasses]">
    <div class="collapse-trigger">
      <button
        :aria-controls="contentId"
        :class="triggerClass"
        type="button"
        @click="toggleCollapse"
      >
        <h2 :class="collapseTitleCssClass">
          {{ title }}
        </h2>

        <DsIcon
          v-if="isStandard"
          :rotate="isCollapsed ? 0 : 180"
          imageOrAwesome="angle-down"
          size="small"
        />
        <span v-if="isCard" class="text-primary-500">
          {{ triggerText }}
        </span>
      </button>
    </div>

    <div v-if="!isCollapsed" :id="contentId" :class="contentCssClass">
      <div class="colap-cont">
        <slot>
          <DsTypography>
            {{ children }}
          </DsTypography>
        </slot>
      </div>
    </div>
  </div>
</template>
