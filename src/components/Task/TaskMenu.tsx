import Divider from "../dividers/Divider";
import { Popover } from "@nextui-org/react";
import TaskMenuText from "../texts/TaskMenuText";
import TaskMenuButton from "../buttons/TaskMenuButton";
import TransparentButton from "../buttons/TransparentButton";
import ITaskMenu from "./interfaces/ITaskMenu";
import PromptModal from "../modals/PromptModal";
import { useEffect, useState } from "react";

const TaskMenu = (props: ITaskMenu) => {

    // States
    const [isOpen, setIsOpen] = useState(false);
    const [visible, setVisible] = useState(false);

    // useEffect
    useEffect(() => {
        if (visible)
            setIsOpen(false);
    }, [visible])

    const confirmPromptHandler = () => {
        setVisible(false);
        props.deleteAll();
    }

    return (
        <div>
            <PromptModal visible={visible} confirmText='Yes' close={() => setVisible(false)} confirm={confirmPromptHandler}
                bodyText='Are you sure to delete all tasks?' />
            <Popover placement="bottom-right" disableAnimation isOpen={isOpen} onOpenChange={setIsOpen}>
                <Popover.Trigger>
                    <TransparentButton ripple={false} boxmodel='morebtn' border='primary' size='morebtn' color='primary' font='primary'>
                        <i className='material-icons md-24'>more_vert</i>
                    </TransparentButton>
                </Popover.Trigger>
                <Popover.Content>
                    <TaskMenuButton size='primary' color='primary' onPress={props.deleteCompleted}>
                        <i className='material-icons task-menu md-16' style={{ marginRight: 5, color: 'black' }}>delete</i>
                        <TaskMenuText color="black">
                            Clear completed tasks
                        </TaskMenuText>
                    </TaskMenuButton>
                    <TaskMenuButton size='primary' color='primary' onPress={props.clearAct}>
                        <i className='material-icons task-menu md-16' style={{ marginRight: 5, color: 'black' }}>done</i>
                        <TaskMenuText color="black">
                            Clear act pomodoros
                        </TaskMenuText>
                    </TaskMenuButton>
                    <Divider color='black' opacity={0.1} size={1} />
                    <TaskMenuButton size='primary' color='primary' onPress={() => setVisible(true)}>
                        <i className='material-icons task-menu md-16' style={{ marginRight: 5, color: 'black' }}>delete</i>
                        <TaskMenuText color='black'>
                            Clear all tasks
                        </TaskMenuText>
                    </TaskMenuButton>
                </Popover.Content>
            </Popover>
        </div>
    );
}

export default TaskMenu;