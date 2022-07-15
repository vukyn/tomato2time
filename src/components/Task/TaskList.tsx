import AddTaskButton from "../buttons/AddTaskButton";
import { Container, Row } from "@nextui-org/react";
import Divider from "../dividers/Divider";
import AppText from "../texts/AppText";
import TaskDialog from "./TaskDialog";
import TaskMenu from "./TaskMenu";
import { useState } from "react";

interface ITodoTask {
    taskName: string;
    estPomodoros: number;
    taskNote: string;
    isFinished: boolean;
}

const TaskList = () => {

    const [isAddTask, setIsAddTask] = useState(false);
    const [todoTasks, setTodoTasks] = useState<ITodoTask[]>([]);

    const addTodoTaskHandler = (todoTask: ITodoTask) => {
        setTodoTasks([...todoTasks, todoTask]);
    }

    return (
        <Container id='task-list' css={{ maxWidth: '480px', margin: '20px auto 42px' }}>
            <Row id='task-header'>
                <AppText bold='true' size='md'>Tasks</AppText>
                <Container display='flex' justify='flex-end' css={{ paddingRight: '0px' }}>
                    <TaskMenu />
                </Container>
            </Row>
            <Divider color='white' opacity={0.5} size={2} />
            {
                isAddTask ?
                    <TaskDialog todoTasks={todoTasks} addTodoTask={addTodoTaskHandler} closeTaskDialog={() => setIsAddTask(false)} /> :
                    <AddTaskButton border='primary' size='primary' color='primary' animated={false} onClick={() => setIsAddTask(true)}>
                        <i className='material-icons md-18' style={{ marginRight: '5px' }}>add_circle_outline</i> Add Task
                    </AddTaskButton>
            }
        </Container >
    );
}

export default TaskList;
