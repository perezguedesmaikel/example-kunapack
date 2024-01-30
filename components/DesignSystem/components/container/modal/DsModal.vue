<script lang="ts" setup>
import DsIcon from "../../basic/icon/DsIcon.vue";
import { computed } from "vue";

const props = defineProps({
  modalTitle: {
    type: String,
    default: "Título del modal",
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  isFooter: {
    type: Boolean,
    default: true,
  },
  isHeader: {
    type: Boolean,
    default: true,
  },
});
const handleKeyUp = (e: any) => {
  if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
    emit("update:modelValue", !props.modelValue);
  }
};

onMounted(() => {
  window.addEventListener("keyup", handleKeyUp);
});

onUnmounted(() => {
  window.removeEventListener("keyup", handleKeyUp);
});
const emit = defineEmits(["update:modelValue", "actionButton", "close"]);

const closeModal: any = computed(() => {
  emit("update:modelValue", !props.modelValue);
  emit("close");
});

function handleActionButton() {
  emit("actionButton");
}
</script>
<template>
  <transition name="fade">
    <div
      v-if="modelValue"
      class="modal flex items-center flex-col justify-center overflow-hidden fixed z-40 bottom-0 left-0 right-0 top-0"
    >
      <section class="my-4">
        <div
          id="modal-js-example"
          :class="[
            'flex modal items-center flex-col justify-center overflow-hidden fixed z-40 bottom-0 left-0 right-0 top-0 ',
          ]"
          aria-labelledby="title_modal_example1"
          aria-modal="true"
          role="dialog"
        >
          <div
            class="modal-background bg-black/80 absolute bottom-0 left-0 right-0 top-0"
          ></div>
          <div
            class="max-h-fit relative flex flex-col w-full md:my-0 md:mx-auto max-w-screen-md overflow-visible"
          >
            <section
              v-if="isHeader"
              class="p-5 bg-white grow shrink overflow-auto"
            >
              <slot name="header">
                <header
                  class="p-2 text-left border-b border-b-primary-500 flex items-center justify-between"
                >
                  <h3
                    id="modal-title text-left"
                    class="font-bold text-primary-500 text-xl"
                  >
                    {{ modalTitle }}
                  </h3>
                  <button
                    aria-label="Cerrar"
                    class="close-modal border border-primary-500 p-2 bg-white rounded-lg text-sm"
                    @click="closeModal"
                  >
                    <DsIcon
                      aria-hidden="true"
                      class="block text-primary-500"
                      imageOrAwesome="times"
                    />

                    <!-- <i
                      aria-hidden="true"
                      class="las la-times block text-primary-500"
                    ></i> -->
                  </button>
                </header>
              </slot>
            </section>
            <section class="px-5 bg-white grow shrink overflow-auto">
              <slot>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </slot>
            </section>
            <footer
              v-if="isFooter"
              class="bg-neutral-100 border border-t-neutral-300 text-center md:text-right p-5"
            >
              <div v-if="!$slots.footer">
                <button
                  aria-labelledby="form_modal_example1"
                  class="modal-close font-roboto border border-primary-500 text-primary-500 bg-white px-3 py-2 hover:bg-primary-900 hover:text-white m-2"
                  title="Cancelar los cambios realizados y cerrar modal"
                  type="reset"
                  @click="closeModal"
                >
                  Cancelar
                </button>
                <button
                  aria-labelledby="form_modal_example1"
                  class="font-roboto border border-primary-500 bg-primary-500 text-white px-3 py-2 hover:bg-primary-900"
                  title="Guardar los cambios realizados"
                  type="submit"
                  @click="handleActionButton"
                >
                  Guardar
                </button>
              </div>
              <slot name="footer"></slot>
            </footer>
          </div>
        </div>
      </section>
    </div>
  </transition>
</template>