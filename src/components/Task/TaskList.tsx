import AddTaskButton from "../buttons/AddTaskButton";
import { Container, Row } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Divider from "../dividers/Divider";
import AppText from "../texts/AppText";
import TaskListCard from "./TaskListCard";
import TaskDialog from "./TaskDialog";
import TaskSummary from "./TaskSummary";
import TaskMenu from "./TaskMenu";
import ITodoTask from "./interfaces/ITodoTask";
import ITaskList from "./interfaces/ITaskList";


const TaskList = (props: ITaskList) => {

    // States
    const [isAddTask, setIsAddTask] = useState(false);
    const [todoTasks, setTodoTasks] = useState<ITodoTask[]>([]);

    // useEffect
    useEffect(() => {
        if (props.completedAct) {
            if (props.selectedTask !== undefined)
                if (props.selectedTask.actPomodoros < props.selectedTask.estPomodoros) {
                    props.selectedTask.actPomodoros += 1;
                    if (props.selectedTask.actPomodoros === props.selectedTask.estPomodoros)
                        props.selectedTask.isCompleted = true;
                }
            props.setCompletedAct();
        }
        //eslint-disable-next-line
    }, [props.completedAct]);


    // Event handlers
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

    const completeTaskHandler = (i: number) => {
        let _todoTasks = [...todoTasks];
        _todoTasks[i].isCompleted = !_todoTasks[i].isCompleted;
        setTodoTasks(_todoTasks);
    }

    const clearActTodoTasksHandler = () => {
        let _todoTasks = todoTasks.map(t => ({
            ...t,
            actPomodoros: 0,
            isCompleted: false,
        }));
        setTodoTasks(_todoTasks);
    }

    const deleteAllTodoTasksHandler = () => {
        setTodoTasks([]);
    }

    const deleteTodoTaskHandler = (todoTask: ITodoTask) => {
        let _todoTasks = todoTasks.filter(t => t.id !== todoTask.id);
        setTodoTasks(_todoTasks);
    }

    const deleteCompletedTodoTasksHandler = () => {
        let _todoTasks = todoTasks.filter(t => t.isCompleted === false);
        setTodoTasks(_todoTasks);
    }

    return (
        <Container id='task-list' css={{ maxWidth: '480px', margin: '20px auto 42px' }}>
            <Row id='task-header'>
                <AppText bold='true' size='md'>Tasks</AppText>
                <Container display='flex' justify='flex-end' css={{ paddingRight: '0px' }}>
                    <TaskMenu deleteAll={deleteAllTodoTasksHandler}
                        deleteCompleted={deleteCompletedTodoTasksHandler} clearAct={clearActTodoTasksHandler} />
                </Container>
            </Row>
            <Divider color='white' opacity={0.5} size={2} />

            {
                // Loop TodoTask List
                todoTasks.map((task, i) => {
                    const isSelected = props.selectedTask?.id === task.id;
                    return <TaskListCard key={i} todoTask={task} isSelected={isSelected}
                        deleteTodoTask={() => deleteTodoTaskHandler(task)} addEditTodoTask={addEditTodoTaskHandler}
                        selectTodoTask={() => props.setSelectedTask(task)} completeTask={() => completeTaskHandler(i)} />
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
                todoTasks.length > 0 && <TaskSummary todoTasks={todoTasks} pomodoroTime={props.pomodoroTime} />
            }
        </Container >
    );
}

export default TaskList;
