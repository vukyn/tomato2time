import { Button, styled } from '@nextui-org/react';

const HeaderButton = styled(Button, {
    cursor: 'pointer',
    marginLeft: '10px',
    padding: '8px 12px',
    opacity: 0.9,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    transition: 'color 0.5s ease-in-out 0s',
    variants: {
        border: {
            primary: {
                border: 'none',
                borderRadius: '4px',
                boxShadow: 'none',
            }
        },
        size: {
            primary: {
                height: '36px',
                minWidth: '70px',
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

export default HeaderButton;
