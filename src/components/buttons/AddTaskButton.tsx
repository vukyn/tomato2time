import { Button, styled } from '@nextui-org/react';


const AddTaskButton = styled(Button, {
    cursor: 'pointer',
    alignItems: 'center',
    variants: {
        border: {
            primary: {
                border: '2px dashed rgba(255, 255, 255, 0.4)',
                borderRadius: '8px'
            }
        },
        size: {
            primary: {
                height: '60px',
                width: '100%'
            }
        },
        color: {
            primary: {
                opacity: 0.8,
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                '&:hover': {
                    opacity: 1
                }
            }
        }
    }
});

export default AddTaskButton;
