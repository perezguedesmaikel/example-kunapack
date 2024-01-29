<script lang="ts" setup>
import DsTypography from "~/components/DesignSystem/components/basic/typography/DsTypography.vue";
import DsIcon from "../icon/DsIcon.vue";
import { predefinedClasses } from "~/components/DesignSystem/common/propsStyle";
import { filterClass } from "~/components/DesignSystem/utils/filterClass";
import { alertConfig } from "~/components/DesignSystem/components/basic/alert/library";

const props = defineProps({
  type: {
    type: String as () => IAlertType,
    default: "info",
  },

  rounded: {
    type: Boolean,
    default: true,
  },

  title: {
    type: String,
    default: null,
  },

  text: {
    type: String,
    default: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil harum assumenda fugiat consequatur sunt,
     labore, inventore cumque illo deleniti itaque, provident excepturi. Dicta nulla nesciunt eaque iste repudiandae tempora quod?`,
  },

  showIcon: {
    type: Boolean,
    default: true,
  },
  class: {
    type: String,
    default: "",
  },
});

const cssClasses = computed(() => {
  const filterClassComp = filterClass(predefinedClasses, props.class);
  const baseClass = {
    rounded: props.rounded,
    [filterClassComp]: true,
  };
  const typeClass = alertConfig[props.type] ?? {};
  return {
    component: ["p-4 mb-2", typeClass.bg, baseClass],
    title: [typeClass.title],
    icon: typeClass.icon,
    defaultText: typeClass.defaultText,
  };
});
console.log(cssClasses.value.defaultText[0]);
</script>

<template>
  <div :class="cssClasses.component" role="alert">
    <DsTypography :class="cssClasses.title" variant="h3">
      <DsIcon
        v-if="showIcon"
        :image-or-awesome="cssClasses.icon"
        size="medium"
      />
      {{ title ?? cssClasses.defaultText }}
    </DsTypography>

    <DsTypography variant="p">
      <slot>
        {{ text }}
      </slot>
    </DsTypography>
  </div>
</template>
