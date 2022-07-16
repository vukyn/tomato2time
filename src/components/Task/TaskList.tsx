import AddTaskButton from "../buttons/AddTaskButton";
import { Container, Row } from "@nextui-org/react";
import { useState } from "react";
import Divider from "../dividers/Divider";
import AppText from "../texts/AppText";
import TaskListCard from "./TaskListCard";
import TaskDialog from "./TaskDialog";
import TaskMenu from "./TaskMenu";

interface ITodoTask {
    id: string;
    taskName: string;
    estPomodoros: number;
    taskNote: string;
    isCompleted: boolean;
}

const TaskList = () => {

    const [isAddTask, setIsAddTask] = useState(false);
    const [todoTasks, setTodoTasks] = useState<ITodoTask[]>([]);

    const addTodoTaskHandler = (todoTask: ITodoTask) => {
        todoTask.id = Math.random().toString(16).slice(2);
        setTodoTasks([...todoTasks, todoTask]);
        setIsAddTask(false);
    }

    const completeTaskHandler = (i: number) => {
        let _todoTasks = [...todoTasks];
        _todoTasks[i].isCompleted = !_todoTasks[i].isCompleted;
        setTodoTasks(_todoTasks);
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
                todoTasks.map((task, i) => {
                    return <TaskListCard key={i} taskName={task.taskName} isCompleted={task.isCompleted}
                        estPomodoros={task.estPomodoros} completeTask={() => completeTaskHandler(i)} />
                })
            }

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
