import { Button, styled } from '@nextui-org/react';

const TransparentButton = styled(Button, {
    cursor: 'pointer',
    opacity: 0.9,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    transition: 'color 0.5s ease-in-out 0s',
    variants: {
        boxmodel: {
            headerbtn: {
                marginLeft: '10px',
                padding: '8px 12px',
            },
            morebtn: {
                padding: '0px',
            }
        },
        border: {
            primary: {
                border: 'none',
                borderRadius: '4px',
                boxShadow: 'none',
            }
        },
        size: {
            headerbtn: {
                height: '36px',
                minWidth: '70px',
            },
            morebtn: {
                height: '36px',
                minWidth: '36px',
            }
        },
        font: {
            primary: {
                fontSize: '13px'
            }
        },
        color: {
            primary: {
                color: 'white !important',
                background: 'none',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                '&:active': {
                    boxShadow: 'none',
                    transform: 'translateY(2px)'
                }
            }
        }
    }
});

export default TransparentButton;
