/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gray: {
          "100": "#919191",
          "200": "#8b8b8b",
          "300": "#878787",
          "400": "#212121",
          "500": "#0c0c0c",
        },
        steelblue: "#2b4c7c",
        royalblue: {
          "100": "#1472dd",
          "200": "#0a6df0",
          "300": "rgba(10, 109, 240, 0.45)",
        },
        gold: "#ffde5a",
        darkslateblue: "#19345d",
        limegreen: "#0ac200",
        lightgray: "#cdcdcd",
        darkslategray: {
          "100": "#444",
          "200": "#3e3e3e",
        },
        whitesmoke: "#ededea",
        tomato: "#ff5757",
        aliceblue: {
          "100": "#f1fbff",
          "200": "#f4f9ff",
        },
        lavender: {
          "100": "#d0e3ff",
          "200": "rgba(201, 224, 254, 0.4)",
        },
        khaki: "#fff475",
        ghostwhite: "#f3f5fe",
        cornflowerblue: {
          "100": "#76adf7",
          "200": "#5a91d9",
        },
      },
      spacing: {},
      fontFamily: {
        "apfel-grotezk": "'ApfelGrotezk'",
        "apfel-grotezk-base": "'ApfelGrotezkBase'",
        inherit: "inherit",
      },
      borderRadius: {
        "6xs": "0.4375rem",
        "31xl": "3.125rem",
        "3xs": "0.625rem",
        "8xs": "0.3125rem",
        "3xs-2": "0.575rem",
        "2xs": "0.6875rem",
      },
    },
    fontSize: {
      lg: "1.125rem",
      "9xl": "1.75rem",
      xl: "1.25rem",
      "3xl": "1.375rem",
      lgi: "1.1875rem",
      "14xl": "2.0625rem",
      mid: "1.0625rem",
      "13xl-9": "2.05625rem",
      "11xl": "1.875rem",
      "23xl": "2.625rem",
      "17xl": "2.25rem",
      "6xl": "1.5625rem",
      "15xl": "2.125rem",
      "21xl": "2.5rem",
      "13xl": "2rem",
      "5xl": "1.5rem",
      "8xl": "1.6875rem",
      "3xl-8": "1.425rem",
      "14xl-2": "2.075rem",
      "5xl-4": "1.525rem",
      "lgi-8": "1.2375rem",
      "19xl-4": "2.4rem",
      "16xl-1": "2.19375rem",
      "7xl": "1.625rem",
      base: "1rem",
      sm: "0.875rem",
      "2xl-1": "1.31875rem",
      "10xl": "1.8125rem",
      inherit: "inherit",
    },
    screens: {
      mq1024: {
        raw: "screen and (max-width: 64rem)",
      },
      mq786: {
        raw: "screen and (max-width: 49.125rem)",
      },
      mq400: {
        raw: "screen and (max-width: 26.25rem)",
      },
      mq380: {
        raw: "screen and (max-width: 23.75rem)",
      },
      mq350: {
        raw: "screen and (max-width: 21.875rem)",
      },

    },
  },
  corePlugins: {
    preflight: false,
  },
}
