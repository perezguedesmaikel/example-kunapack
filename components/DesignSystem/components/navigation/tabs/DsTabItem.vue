<script lang="ts" setup>
import { inject, onBeforeMount, watch } from "vue";
import generateUniqueId from "~/components/DesignSystem/utils/generateUniqueId";

const props = defineProps({
  title: {
    type: String,
    default: 'Default title',
    required: true,
  },

  icon: {
    type: String,
    default: null,
  },
});

const id = generateUniqueId('tab-item-');
const refId = ref(id);
const isActive = ref(false);

const addTab: any = inject("addTab");
const tabChange: any = inject("tabChange");
const activeTab: any = inject<string>("activeTab");

let itemData: any = null;

onBeforeMount(() => {
  itemData = {
    id: id,
    title: props.title,
    icon: props.icon ?? null,
  };

  addTab( itemData);
});

watch( activeTab, () => {
  const oldActive = isActive.value;
  isActive.value = activeTab.value.id === refId.value;

  if (isActive.value && !oldActive) {
    tabChange( itemData);
  }
});
</script>

<template>
  <div v-show="isActive">
    <slot />
  </div>
</template>
