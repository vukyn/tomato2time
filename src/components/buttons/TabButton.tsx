import { Button, styled } from '@nextui-org/react';

const TabButton = styled(Button, {
    cursor: 'pointer',
    margin: 0,
    padding: '2px 12px',
    background: 'none',
    variants: {
        border: {
            primary: {
                border: 'none',
                borderRadius: '4px',
                boxShadow: 'none'
            }
        },
        size: {
            primary: {
                height: '28px'
            }
        },
        font: {
            primary: {
                fontSize: '16px',
                fontWeight: 'medium',
            }
        },
        color: {
            primary: {
                color: 'white',
                opacity: 1,
                background: 'none rgba(0, 0, 0, 0.15)'
            },
            secondary: {
                color: 'white',
                backgroundColor: 'transparent'
            }
        },
    }
});

export default TabButton;
