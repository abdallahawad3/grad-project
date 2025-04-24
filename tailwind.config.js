/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		boxShadow: {
			sm: '0 1px 2px 0 hsla(0, 0%, 90%, 1)',
			'product': '0 0 12px hsla(122, 70%, 42%, 0.32)',
			DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
			md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
			lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
			xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
			'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
			'3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)'
		},
		colors: {
			gray: {
				'50': 'hsla(0, 0%, 95%, 1)',
				'100': 'hsla(0, 0%, 90%, 1)',
				'200': 'hsla(0, 0%, 80%, 1)',
				'300': 'hsla(0, 0%, 70%, 1)',
				'400': 'hsla(0, 0%, 60%, 1)',
				'500': 'hsla(0, 0%, 50%, 1)',
				'600': 'hsla(0, 0%, 40%, 1)',
				'700': 'hsla(0, 0%, 30%, 1)',
				'800': 'hsla(0, 0%, 20%, 1)',
				'900': 'hsla(0, 0%, 10%, 1)'
			},
			warning: {
				'500': 'hsla(32, 100%, 50%, 1)'
			},
			white: '#FFFFFF',
			black: '#000000',
			transparent: 'transparent',
			success: {
				'50': 'hsla(120, 100%, 50%, 1)',
				'100': 'hsla(120, 100%, 45%, 1)',
				'200': 'hsla(120, 100%, 40%, 1)',
				'300': 'hsla(120, 100%, 35%, 1)',
				'400': 'hsla(120, 100%, 30%, 1)',
				'500': 'hsla(122, 100%, 35%, 1)',
				'600': 'hsla(122, 45%, 31%, 1)',
				'700': 'hsla(120, 100%, 15%, 1)',
				'800': 'hsla(120, 100%, 10%, 1)'
			},
			primary: {
				'50': 'hsla(1, 79%, 60%, 1)',
				'100': 'hsla(122, 18%, 88%, 1)',
				'200': 'hsla(122, 19%, 75%, 1)',
				'300': 'hsla(122, 16%, 64%, 1)',
				'400': 'hsla(122, 13%, 54%, 1)',
				'500': 'hsla(122, 14%, 44%, 1)',
				'600': 'hsla(122, 25%, 34%, 1)',
				'700': 'hsla(124, 33%, 26%, 1)',
				'800': 'hsla(124, 43%, 16%, 1)',
				'900': 'hsla(124, 100%, 8%, 1)'
			}
		},
		fontSize: {
			display1: [
				'64px',
				{
					lineHeight: '120%',
					fontWeight: '600',
					letterSpacing: '0'
				}
			],
			display2: [
				'56px',
				{
					lineHeight: '64px',
					fontWeight: '600',
					letterSpacing: '0'
				}
			],
			display3: [
				'48px',
				{
					lineHeight: '56px',
					fontWeight: '600',
					letterSpacing: '0'
				}
			],
			display4: [
				'40px',
				{
					lineHeight: '48px',
					fontWeight: '600',
					letterSpacing: '0'
				}
			],
			display5: [
				'36px',
				{
					lineHeight: '44px',
					fontWeight: '600',
					letterSpacing: '0'
				}
			],
			heading1: [
				'32px',
				{
					lineHeight: '40px',
					fontWeight: '600',
					letterSpacing: '0'
				}
			],
			heading2: [
				'28px',
				{
					lineHeight: '32px',
					fontWeight: '600',
					letterSpacing: '0'
				}
			],
			heading3: [
				'24px',
				{
					lineHeight: '32px',
					fontWeight: '600',
					letterSpacing: '0'
				}
			],
			heading4: [
				'20px',
				{
					lineHeight: '28px',
					fontWeight: '600',
					letterSpacing: '0'
				}
			],
			heading5: [
				'32px',
				{
					lineHeight: '120%',
					fontWeight: '600',
					letterSpacing: '0',
					fontFamily: 'Poppins'
				}
			],
			heading6: [
				'16px',
				{
					lineHeight: '24px',
					fontWeight: '600',
					letterSpacing: '0'
				}
			],
			'body-xl-400': [
				'20px',
				{
					lineHeight: '28px',
					fontWeight: '400',
					letterSpacing: '0'
				}
			],
			'body-xl-500': [
				'20px',
				{
					lineHeight: '28px',
					fontWeight: '500',
					letterSpacing: '0'
				}
			],
			'body-xl-600': [
				'20px',
				{
					lineHeight: '28px',
					fontWeight: '600',
					letterSpacing: '0'
				}
			],
			'body-lg-400': [
				'18px',
				{
					lineHeight: '28px',
					fontWeight: '400',
					letterSpacing: '0'
				}
			],
			'body-lg-500': [
				'18px',
				{
					lineHeight: '28px',
					fontWeight: '500',
					letterSpacing: '0'
				}
			],
			'body-lg-600': [
				'18px',
				{
					lineHeight: '28px',
					fontWeight: '600',
					letterSpacing: '0'
				}
			],
			'body-md-400': [
				'16px',
				{
					lineHeight: '24px',
					fontWeight: '400',
					letterSpacing: '0'
				}
			],
			'body-md-500': [
				'16px',
				{
					lineHeight: '24px',
					fontWeight: '500',
					letterSpacing: '0'
				}
			],
			'body-md-600': [
				'16px',
				{
					lineHeight: '24px',
					fontWeight: '600',
					letterSpacing: '0'
				}
			],
			'body-sm-400': [
				'14px',
				{
					lineHeight: '20px',
					fontWeight: '400',
					letterSpacing: '0'
				}
			],
			'body-sm-500': [
				'14px',
				{
					lineHeight: '20px',
					fontWeight: '500',
					letterSpacing: '0'
				}
			],
			'body-sm-600': [
				'14px',
				{
					lineHeight: '20px',
					fontWeight: '600',
					letterSpacing: '0'
				}
			],
			'body-xs-400': [
				'12px',
				{
					lineHeight: '16px',
					fontWeight: '400',
					letterSpacing: '0'
				}
			],
			'body-xs-500': [
				'12px',
				{
					lineHeight: '16px',
					fontWeight: '500',
					letterSpacing: '0'
				}
			],
			'body-xs-600': [
				'12px',
				{
					lineHeight: '16px',
					fontWeight: '600',
					letterSpacing: '0'
				}
			],
			label1: [
				'18px',
				{
					lineHeight: '28px',
					fontWeight: '500',
					letterSpacing: '0'
				}
			],
			label2: [
				'16px',
				{
					lineHeight: '24px',
					fontWeight: '500',
					letterSpacing: '0'
				}
			],
			label3: [
				'14px',
				{
					lineHeight: '20px',
					fontWeight: '500',
					letterSpacing: '0'
				}
			],
			label4: [
				'12px',
				{
					lineHeight: '1.5rem',
					fontWeight: '500',
					letterSpacing: '0'
				}
			],
			label5: [
				'11px',
				{
					lineHeight: '16px',
					fontWeight: '500',
					letterSpacing: '0'
				}
			],
			label6: [
				'4px',
				{
					lineHeight: '8px',
					fontWeight: '500',
					letterSpacing: '0'
				}
			]
		},
		screens: {
			xs: '400px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			xxl: '1406px'
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '1rem',
				md: '2rem',
				lg: '3rem',
				xl: '4rem',
				xxl: '4rem'
			}
		},
		fontFamily: {
			poppins: [
				'Poppins',
				'sans-serif'
			],
			underdog: [
				'Underdog',
				'sans-serif'
			],
			segoe: [
				'Segoe Script',
				'cursive'
			]
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
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
