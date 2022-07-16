import { Text, styled } from "@nextui-org/react";

const AppText = styled(Text, {
    fontSize: '16px',
    variants: {
        opacity: {
            true: {
                opacity: 0.6
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
