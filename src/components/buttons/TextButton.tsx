import { Button, styled } from '@nextui-org/react';

const TextButton = styled(Button, {
    variants: {
        size: {
            primary: {
                minWidth: '40px'
            }
        },
        font: {
            primary: {
                fontSize: '15px',
            }
        },
        color: {
            primary: {
                color: 'rgb(217, 85, 80)',
                backgroundColor: 'inherit'
            }
        },
        bold: {
            true: {
                fontWeight: 'bold'
            }
        }
    }
});

export default TextButton;
