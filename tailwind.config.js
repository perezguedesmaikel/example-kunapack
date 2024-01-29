/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      boxShadow: {
        focus: "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      backgroundImage: {
        qualification: "url('/images/emoji-qualification.png)",
      },
      backgroundPosition: {
        "angry-cal": "0 0",
        "dislike-cal": "-60px 0",
        "neutral-cal": "-120px 0",
        "like-cal": "-180px 0",
        "love-cal": "-240px 0",
      },
      fontFamily: {
        roboto: ["Roboto"],
        robotoSlab: ["Roboto Slab"],
      },
      colors: {
        primary: {
          500: "#0f69b4", //Default
          900: "#0e4b7e", // Dark
        },
        dark: {
          500: "#272727", //Default
        },
        danger: {
          100: "#ffecec",
          500: "#da343a",
          900: "#c5262c",
        },
        success: {
          100: "#F3FFEF",
          500: "#2b822b", //Default
          900: "#206420",
        },
        warning: {
          500: "#bd5b00", //Default
        },
        cyan: {
          500: "#f1f8ff", //Default
          900: "#D2EAFF",
        },
      },
    },
  },
  plugins: []
}
