import { Button, styled } from '@nextui-org/react';


const EditTaskButton = styled(Button, {
    padding: 0,
    variants: {
        border: {
            primary: {
                borderRadius: '4px',
                borderColor: '$gray400 !important'
            }
        },
        size: {
            primary: {
                height: 30,
                width: 30,
                minWidth: 30
            }
        },
        color: {
            primary: {
                color: '#787F85 !important',
                fontWeight: 'bold',
                '&:hover': {
                    backgroundColor: '$gray400'
                }
            }
        }
    }
});

export default EditTaskButton;