/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        kodchasan: ['Kodchasan', 'sans-serif'],  // Use 'Kodchasan' font
        gothic: ['Gothic A1', 'sans-serif'],    // Use 'Gothic A1' font
        plusJakarta: ['Plus Jakarta Sans', 'sans-serif'],  // Use 'Plus Jakarta Sans'
        roboto: ['Roboto', 'sans-serif'],        // Use 'Roboto' font
      },
    },
  },
  plugins: [],
};
