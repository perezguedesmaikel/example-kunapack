<script lang="ts" setup>
import DsTypography from "~/components/DesignSystem/components/basic/typography/DsTypography.vue";
import { filterClass } from "~/components/DesignSystem/utils/filterClass";
import { predefinedClasses } from "~/components/DesignSystem/common/propsStyle";

const topColorCssMap = {
  dark: "text-dark-500",
  primary: "text-primary-500",
};

const props = defineProps({
  class: {
    type: String,
    default: "",
  },

  rounded: {
    type: Boolean,
    default: true,
  },

  headerText: {
    type: String,
    default: null,
  },

  bodyText: {
    type: String,
    default: null,
  },

  footerText: {
    type: String,
    default: null,
  },

  topColor: {
    type: String as () => IContentTopColor,
    default: "primary",
  },
});

const defaultClasses = 'p-4 border border-primary mb-3';

const filterClassComp = computed(() => {
  return filterClass(predefinedClasses, props.class);
});

const cssClasses = computed(() => [
  filterClassComp,
  {
    'rounded-lg': props.rounded,
  },
  defaultClasses,
]);

const topTextCssClass = computed(() => [
  topColorCssMap[props.topColor],
  'font-roboto mb-2',
]);

const slots = useSlots();

const canShowHeader = computed(() => {
  return props.headerText || slots.header || (!slots.body && !slots.footer);
});
</script>

<template>
  <div :class="cssClasses">
    <header v-if="canShowHeader">
      <div class="flex flex-col">
        <span :class="topTextCssClass">
          <slot name="header">
            {{ headerText || 'Default header' }}
          </slot>
        </span>
      </div>
    </header>

    <section>
      <slot name="body">
        {{ bodyText }}
      </slot>
    </section>

    <footer>
      <DsTypography class="mb-2" variant="p">
        <slot name="footer">
          {{ footerText }}
        </slot>
      </DsTypography>
    </footer>
  </div>
</template>
