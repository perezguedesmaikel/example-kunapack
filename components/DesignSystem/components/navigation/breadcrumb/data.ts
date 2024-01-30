import type { IBreadcrumb } from "~/components/DesignSystem/components/navigation/breadcrumb/interface";

export const tabsData: IBreadcrumb[] = [
  {
    id: 1,
    label: "Página de inicio",
    link: "/",
    icon: "home",
  },
  {
    id: 2,
    label: "Página superior",
    link: "/",
  },
  {
    id: 3,
    label: "Otra página",
    link: "/",
  },
  {
    id: 4,
    label: "Página actual",
    link: "/",
    // Sin ícono
  },
];
