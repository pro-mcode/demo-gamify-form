/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "390px",
      md: "920px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      // Custom color palette
      colors: {
        primaryBlue: "hsl(213, 96%, 18%)",
        primaryBlue200: "hsl(206, 94%, 87%)",
        primaryBlue300: "hsl(228, 100%, 84%)",
        error: "hsl(354, 84%, 57%)",
        primaryPurple: "hsl(243, 100%, 62%)",
        neutralGray: "hsl(231, 11%, 63%)",
        neutralPurple: "hsl(229, 24%, 87%)",
        neutralBlue50: "hsl(231, 100%, 99%)",
        neutralBlue100: "hsl(218, 100%, 97%)",
        neutralWhite: "hsl(0, 100%, 100%)",
      },
      // Custom font families
      fontFamily: {
        sans: ["Ubuntu", "sans-serif"],
      },
      // Custom font weights
      fontWeight: {
        normal: 400,
        semiBold: 500,
        bold: 700,
      },
      // Custom spacing values
      spacing: {
        "0.5x": "0.5rem",
        "1x": "1rem",
        "2x": "2rem",
        "3x": "3rem",
        "4x": "4rem",
        "5x": "5rem",
        1: "3px",
        2: "5px",
        3: "10px",
        4: "15px",
        5: "20px",
      },
      backgroundImage: {
        sidebarDesktop: "url('/public/assets/images/bg-sidebar-desktop.svg')",
        sidebarMobile: "url('/public/assets/images/bg-sidebar-mobile.svg')",
      },
      // backgroundImage: () => ({
      //   sidebarDesktop: "url('./public/assets/images/bg-sidebar-desktop.svg')",
      //   sidebarMobile: "url('./public/assets/images/bg-sidebar-mobile.svg')",
      // }),
    },
  },
  plugins: [],
};
