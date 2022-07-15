import { Text, styled } from "@nextui-org/react";

const AppText = styled(Text, {
    fontFamily: 'Nunito',
    fontSize: '16px',
    variants: {
        opacity: {
            true: {
                opacity: 0.6
            },
            false: {
                opacity: 1
            }
        },
        bold: {
            true: {
                fontWeight: 'bold'
            },
        },
        size: {
            xs: {
                fontSize: '14px'
            },
            sm: {
                fontSize: '16px'
            },
            md: {
                fontSize: '18px'
            },
            lg: {
                fontSize: '24px'
            },
        },
    }
});

export default AppText;
