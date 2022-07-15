import { createTheme } from "@nextui-org/react"

/* 
    White: #ffffff
    Black: #000000
    Grey: #efefef
    LightOrange: #d95550
*/

const LightTheme = createTheme({
    type: "light",
    theme: {
        colors: {

            // Default colors
            background: '#d95550',
            text: '#ffffff',

            // Primary colors
            primary: '#ffffff',
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