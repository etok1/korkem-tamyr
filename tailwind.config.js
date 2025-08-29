/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      sansPT: ["PT Sans", "sans-serif"],
      montserrat: ['"Montserrat Alternates"', "sans-serif"],
      balsamiq: ['"Balsamiq Sans"', "sans-serif"],
      shantell: ["Shantell Sans", "cursive"],
      playpen: ["Playpen Sans", "cursive"],
      colors: {
        // pink
        pigPink: "#FF8BB4",
        lightPink: "#F49AA2",
        pinkColor: "#F283AF",
        peachPink: "#F08080",
        coralColor: "#FF6875",
        // blue
        dirtBlue: "#8C93C7",
        lightBlue: "#A7B5FE",
        blueColor: "#5966B1",
        lavenderBlue: "#717EC3",
        skyBlue: "#93AECA",
        nightBlue: "#1E3A8A",
        // green
        grassGreen: "#B6C687",
        lightGreen: "#C5CC82",
        greenColor: "#97A13B",
        appleGreen: "#B3D07E",
        paleGreen: "#BEDA9D",
        // yellow
        lemonYellow: "#FFD65C",
        lightYellow: "#FFDA77",
        paleYellow: "#FDD888",
        sunYellow: "#FFBE54",
        yellowColor: "#F8C748",
        // orange
        vibrantOrange: "#FF5724",
        softPeach: "#FCC586",
        lightOrange: "#FEB187",
        pumpkinOrange: "#FF8237",
        sunsetOrange: "#FFAA6E",
        // purple
        dustyPurple: "#897098",
        purpleColor: "#8C5E9F",
        mistPurple: "#AA7AB6",
        periwinkleBlue: "#9E93E6",
        lavenderColor: "#CA9FDD",
        // white
        whitishColor: "#FDFDFC",
        headerWhite: "#FEF9F4",
      },
      screens: {
        xs: "400px",
        ss: "512px",
      },
      animation: {
        "pulse-opacity": "pulse-opacity 2s ease-out",
        wiggle: "wiggle 2s ease-in-out",
        bouncing: "bouncing 2s infinite ease-in-out",
      },
      keyframes: {
        "pulse-opacity": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
        bouncing: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
