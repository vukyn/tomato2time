import { Button, styled } from '@nextui-org/react';

const TaskMenuButton = styled(Button, {
    justifyContent: 'flex-start',
    variants: {
        size: {
            primary: {
                minWidth: '40px',
                width: '100%'
            }
        },
        color: {
            primary: {
                color: 'rgb(217, 85, 80)',
                backgroundColor: 'white',
                '&:hover': {
                    backgroundColor: 'rgb(241, 238, 238)'
                }
            }
        }
    }
});

export default TaskMenuButton;
