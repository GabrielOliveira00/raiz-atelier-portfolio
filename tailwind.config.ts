import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        areia: "#f3ecdf",
        creme: "#fbf7f0",
        musgo: "#64745d",
        folha: "#7f9b74",
        barro: "#a76f4e",
        terracota: "#bf8663",
        tronco: "#4a3a31",
        pinho: "#30463b",
        nevoa: "#d6d0c5",
        salvia: "#94aa8c"
      },
      boxShadow: {
        painel: "0 24px 70px rgba(74, 58, 49, 0.12)",
        folha: "0 14px 36px rgba(127, 155, 116, 0.16)"
      },
      backgroundImage: {
        trama:
          "linear-gradient(rgba(100,116,93,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(100,116,93,0.07) 1px, transparent 1px)"
      },
      keyframes: {
        sway: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) rotate(0deg)" },
          "50%": { transform: "translate3d(0, -8px, 0) rotate(1.6deg)" }
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -16px, 0)" }
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        sway: "sway 7s ease-in-out infinite",
        drift: "drift 10s ease-in-out infinite",
        ticker: "ticker 22s linear infinite"
      }
    }
  },
  plugins: []
} satisfies Config;
