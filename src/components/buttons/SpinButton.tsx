import { Button, styled } from "@nextui-org/react"

const SpinButton = styled(Button, {
    cursor: 'pointer',
    margin: '3px 2px 0 2px',
    variants: {
        border: {
            primary: {
                border: '1px solid #dfdfdf',
                borderRadius: 4,
                boxShadow: 'rgb(0 0 0 / 20%) 0px 2px 2px',
                '&:active': {
                    boxShadow: 'none'
                }
            }
        },
        size: {
            primary: {
                minWidth: 0,
                width: '40px',
                height: '35px'
            }
        },
    }
});

export default SpinButton;