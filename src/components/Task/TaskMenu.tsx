import Divider from "../divider/Divider";
import { Popover } from "@nextui-org/react";
import TaskMenuText from "../texts/TaskMenuText";
import TaskMenuButton from "../buttons/TaskMenuButton";
import TransparentButton from "../buttons/TransparentButton";


const TaskMenu = () => {
    return (
        <Popover placement="bottom-right" disableAnimation>
            <Popover.Trigger>
                <TransparentButton ripple={false} boxmodel='morebtn' border='primary' size='morebtn' color='primary' font='primary'>
                    <i className='material-icons md-24'>more_vert</i>
                </TransparentButton>
            </Popover.Trigger>
            <Popover.Content>
                <TaskMenuButton size='primary' color="primary">
                    <i className='material-icons task-menu md-16' style={{ marginRight: 5, color: 'black' }}>delete</i>
                    <TaskMenuText color="black">
                        Clear finished tasks
                    </TaskMenuText>
                </TaskMenuButton>
                <TaskMenuButton size='primary' color="primary">
                    <i className='material-icons task-menu md-16' style={{ marginRight: 5, color: 'black' }}>done</i>
                    <TaskMenuText color="black">
                        Clear act pomodoros
                    </TaskMenuText>
                </TaskMenuButton>
                <TaskMenuButton size='primary' color="primary">
                    <i className='material-icons task-menu md-16' style={{ marginRight: 5, color: 'black' }}>add</i>
                    <TaskMenuText color="black">
                        Add from templates
                    </TaskMenuText>
                </TaskMenuButton>
                <Divider color='black' opacity={0.1} size={1} />
                <TaskMenuButton size='primary' color="primary">
                    <i className='material-icons task-menu md-16' style={{ marginRight: 5, color: 'black' }}>delete</i>
                    <TaskMenuText color="black">
                        Clear all tasks
                    </TaskMenuText>
                </TaskMenuButton>
            </Popover.Content>
        </Popover>
    );
}

export default TaskMenu;