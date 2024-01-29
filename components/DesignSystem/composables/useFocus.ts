import { ref, watch, onMounted, nextTick } from "vue";

export default function useFocus(
  initialState: () => boolean,
  errorState: () => boolean,
) {
  const elementRef = ref<HTMLTextAreaElement | null>(null);

  const setFocus = () => {
    if (elementRef.value) {
      elementRef.value.focus();
    }
  };

  watch(
    initialState,
    (hasFocus) => {
      if (hasFocus) {
        setFocus();
      }
    },
    { immediate: true },
  );

  watch(
    errorState,
    (hasError) => {
      if (hasError) {
        setFocus();
      }
    },
    { immediate: true },
  );

  onMounted(async () => {
    await nextTick(() => {
      if (errorState() || initialState()) {
        setFocus();
      }
    });
  });

  return {
    elementRef,
  };
}
