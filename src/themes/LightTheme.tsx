import { createTheme } from "@nextui-org/react"

/* 
    White: #ffffff
    Black: #000000
    Grey: #efefef
    LightOrange: #d95550
*/

const AppColor = '#d95550'

const LightTheme = createTheme({
    type: "light",
    theme: {
        colors: {

            // Default colors
            background: AppColor,
            text: '#ffffff',

            // Primary colors
            primary: '#ffffff',
            primaryLight: '#efefef',
            primaryLightContrast: '#000000',

            // Secondary colors
            secondary: '#b8bfcc',
            secondaryLight: '#b8bfcc',
            secondaryLightContrast: '#000000',

            // Border colors
            border: '#ffffff',

            // Accent colors
            accents1: '$gray400',
        },
        fonts:{
            sans: 'Nunito'
        }
    }
})

export default LightTheme;