/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      gray: {
        "50": "hsla(0, 0%, 95%, 1)",
        "100": "hsla(0, 0%, 90%, 1)",
        "200": "hsla(0, 0%, 80%, 1)",
        "300": "hsla(0, 0%, 70%, 1)",
        "400": "hsla(0, 0%, 60%, 1)",
        "500": "hsla(0, 0%, 50%, 1)",
        "600": "hsla(0, 0%, 40%, 1)",
        "700": "hsla(0, 0%, 30%, 1)",
        "800": "hsla(0, 0%, 20%, 1)",
        "900": "hsla(0, 0%, 10%, 1)",
      },
      warning: {
        "500": "hsla(32, 100%, 50%, 1)",
      },
      white: "#FFFFFF",
      black: "#000000",
      transparent: "transparent",
      success: {
        "50": "hsla(120, 100%, 50%, 1)",
        "100": "hsla(120, 100%, 45%, 1)",
        "200": "hsla(120, 100%, 40%, 1)",
        "300": "hsla(120, 100%, 35%, 1)",
        "400": "hsla(120, 100%, 30%, 1)",
        "500": "hsla(122, 100%, 35%, 1)",
        "600": "hsla(122, 45%, 31%, 1)",
        "700": "hsla(120, 100%, 15%, 1)",
        "800": "hsla(120, 100%, 10%, 1)",
      },
      primary: {
        "50": "hsla(1, 79%, 60%, 1)",
        "100": "hsla(122, 18%, 88%, 1)",
        "200": "hsla(122, 19%, 75%, 1)",
        "300": "hsla(122, 16%, 64%, 1)",
        "400": "hsla(122, 13%, 54%, 1)",
        "500": "hsla(122, 14%, 44%, 1)",
        "600": "hsla(122, 25%, 34%, 1)",
        "700": "hsla(124, 33%, 26%, 1)",
        "800": "hsla(124, 43%, 16%, 1)",
        "900": "hsla(124, 100%, 8%, 1)",
      }
    },
    // There Are 4 types of typography
    // 1.a Display 
    // 2.b Heading
    // 3.c Body
    // 4.d Label

    fontSize: {
      // Display
      display1: [
        "64px",
        {
          lineHeight: "120%",
          fontWeight: "600",
          letterSpacing: "0%"
        }
      ],
      display2: [
        "56px",
        {
          lineHeight: "64px",
          fontWeight: "600",
          letterSpacing: "0"
        }
      ],
      display3: [
        "48px",
        {
          lineHeight: "56px",
          fontWeight: "600",
          letterSpacing: "0%"
        }
      ],
      display4: [
        "40px",
        {
          lineHeight: "48px",
          fontWeight: "600",
          letterSpacing: "0%"
        }
      ],
      display5: [
        "36px",
        {
          lineHeight: "44px",
          fontWeight: "600",
          letterSpacing: "0%"
        }
      ],
      // Heading
      heading1: [
        "32px",
        {
          lineHeight: "40px",
          fontWeight: "600",
          letterSpacing: "0%"
        }
      ],
      heading2: [
        "28px",
        {
          lineHeight: "32px",
          fontWeight: "600",
          letterSpacing: "0%"
        }
      ],
      heading3: [
        "24px",
        {
          lineHeight: "32px",
          fontWeight: "600",
          letterSpacing: "0%"
        }
      ],
      heading4: [
        "20px",
        {
          lineHeight: "28px",
          fontWeight: "600",
          letterSpacing: "0%"
        }
      ],
      heading5: [
        "18px",
        {
          lineHeight: "24px",
          fontWeight: "600",
          letterSpacing: "0%"
        }
      ],
      heading6: [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "600",
          letterSpacing: "0%"
        }
      ],
      // Body ==> XL
      "body-xl-400": [
        "20px",
        {
          lineHeight: "28px",
          fontWeight: "400",
          letterSpacing: "0%"
        }
      ],
      "body-xl-500": [
        "20px",
        {
          lineHeight: "28px",
          fontWeight: "500",
          letterSpacing: "0%"
        }
      ],

      "body-xl-600": [
        "20px",
        {
          lineHeight: "28px",
          fontWeight: "600",
          letterSpacing: "0%"
        }
      ],

      // For Larger Screens same laptop size 
      "body-lg-400": [
        "18px",
        {
          lineHeight: "28px",
          fontWeight: "400",
          letterSpacing: "0%"
        }
      ],
      "body-lg-500": [
        "18px",
        {
          lineHeight: "28px",
          fontWeight: "500",
          letterSpacing: "0%"
        }
      ],
      "body-lg-600": [
        "18px",
        {
          lineHeight: "28px",
          fontWeight: "600",
          letterSpacing: "0%"
        }
      ],
      "body-md-400": [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "400",
          letterSpacing: "0%"
        }
      ],
      "body-md-500": [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "500",
          letterSpacing: "0%"
        }
      ],
      "body-md-600": [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "600",
          letterSpacing: "0%"
        }
      ],

      // For Smaller Screens
      "body-sm-400": [
        "14px",
        {
          lineHeight: "20px",
          fontWeight: "400",
          letterSpacing: "0%"
        }
      ],
      "body-sm-500": [
        "14px",
        {
          lineHeight: "20px",
          fontWeight: "500",
          letterSpacing: "0%"
        }
      ],
      "body-sm-600": [
        "14px",
        {
          lineHeight: "20px",
          fontWeight: "600",
          letterSpacing: "0%"
        }
      ],
      // For Extra Small Screens
      "body-xs-400": [
        "12px",
        {
          lineHeight: "16px",
          fontWeight: "400",
          letterSpacing: "0%"
        }
      ],
      "body-xs-500": [
        "12px",
        {
          lineHeight: "16px",
          fontWeight: "500",
          letterSpacing: "0%"
        }
      ],
      "body-xs-600": [
        "12px",
        {
          lineHeight: "16px",
          fontWeight: "600",
          letterSpacing: "0%"
        }
      ],

      // Label
      label1: [
        "18px",
        {
          lineHeight: "28px",
          fontWeight: "500",
          letterSpacing: "0%"
        }
      ],
      label2: [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "500",
          letterSpacing: "0%"
        }
      ],
      label3: [
        "14px",
        {
          lineHeight: "20px",
          fontWeight: "500",
          letterSpacing: "0%"
        }
      ],
      label4: [
        "12px",
        {
          lineHeight: "1.5rem",
          fontWeight: "500",
          letterSpacing: "0%"
        }
      ],
      label5: [
        "11px",
        {
          lineHeight: "16px",
          fontWeight: "500",
          letterSpacing: "0%"
        }
      ],
      label6: [
        "4px",
        {
          lineHeight: "8px",
          fontWeight: "500",
          letterSpacing: "0%"
        }
      ]

    },

    screens: {
      xs: "350px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      xxl: "1920px"
    },

    container: {
      center: true,
    },

    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      underdog: ['Underdog', 'sans-serif'],
    },
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};