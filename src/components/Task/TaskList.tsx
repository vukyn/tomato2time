import AddTaskButton from "../buttons/AddTaskButton";
import { Container, Row } from "@nextui-org/react";
import { useState } from "react";
import Divider from "../dividers/Divider";
import AppText from "../texts/AppText";
import TaskListCard from "./TaskListCard";
import TaskDialog from "./TaskDialog";
import TaskSummary from "./TaskSummary";
import TaskMenu from "./TaskMenu";
import ITodoTask from "./interfaces/ITodoTask";


const TaskList = () => {

    const [isAddTask, setIsAddTask] = useState(false);
    const [todoTasks, setTodoTasks] = useState<ITodoTask[]>([]);

    const addEditTodoTaskHandler = (todoTask: ITodoTask, isEdit: boolean) => {
        if (isEdit) {
            let _todoTasks = [...todoTasks];
            _todoTasks[_todoTasks.findIndex(t => t.id === todoTask.id)] = todoTask;
            setTodoTasks(_todoTasks);
        } else {
            todoTask.id = Math.random().toString(16).slice(2);
            setTodoTasks([...todoTasks, todoTask]);
        }
    }

    const deleteTodoTaskHandler = (todoTask: ITodoTask) => {
        let _todoTasks = todoTasks.filter(t => t.id !== todoTask.id);
        setTodoTasks(_todoTasks);
    }

    const deleteAllTodoTasksHandler = () => {
        setTodoTasks([]);
    }

    const deleteCompletedTodoTasksHandler = () => {
        let _todoTasks = todoTasks.filter(t => t.isCompleted === false);
        setTodoTasks(_todoTasks);
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
                    <TaskMenu deleteAll={deleteAllTodoTasksHandler} deleteCompleted={deleteCompletedTodoTasksHandler}/>
                </Container>
            </Row>
            <Divider color='white' opacity={0.5} size={2} />

            {
                // Loop TodoTask List
                todoTasks.map((task, i) => {
                    return <TaskListCard key={i} todoTask={task} deleteTodoTask={() => deleteTodoTaskHandler(task)}
                        addEditTodoTask={addEditTodoTaskHandler} completeTask={() => completeTaskHandler(i)} />
                })
            }

            {
                // Button to open add TaskDialog
                isAddTask ?
                    <TaskDialog isEdit={false} addEditTodoTask={addEditTodoTaskHandler} closeTaskDialog={() => setIsAddTask(false)} /> :
                    <AddTaskButton border='primary' size='primary' color='primary' animated={false} onClick={() => setIsAddTask(true)}>
                        <i className='material-icons md-18' style={{ marginRight: '5px' }}>add_circle_outline</i> Add Task
                    </AddTaskButton>
            }

            {
                // Show TaskSummary if todoTasks.length > 0
                todoTasks.length > 0 && <TaskSummary todoTasks={todoTasks} />
            }
        </Container >
    );
}

export default TaskList;
