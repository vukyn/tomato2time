import { Button, styled } from '@nextui-org/react';

const CountdownButton = styled(Button, {
    cursor: 'pointer',
    margin: '0px',
    padding: '0px 12px',
    transition: 'color 0.5s ease-in-out 0s',
    variants: {
        border: {
            start: {
                border: 'none',
                borderRadius: '4px',
                boxShadow: 'rgb(235 235 235) 0px 6px 0px',
            },
            stop: {
                border: 'none',
                borderRadius: '4px',
                boxShadow: 'none'
            }
        },
        size: {
            primary: {
                height: '55px',
                width: '200px',
            }
        },
        font: {
            primary: {
                fontSize: '22px',
                fontWeight: 'bold',
            }
        },
        color: {
            start: {
                color: 'rgb(217, 85, 80)',
                backgroundColor: 'white',
                '&:active': {
                    boxShadow: 'none',
                    transform: 'translateY(6px)'
                }
            },
            stop: {
                color: 'rgb(217, 85, 80)',
                backgroundColor: 'white',
                transform: 'translateY(6px)'
            }
        }
    }
});

export default CountdownButton;
