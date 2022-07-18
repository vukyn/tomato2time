import Timer from '../components/Timer/Timer';
import TaskList from '../components/Task/TaskList';
import { Container } from '@nextui-org/react';
import { useState } from 'react';
import ITodoTask from '../components/Task/interfaces/ITodoTask';

const HomePage = () => {

    // States
    const [pomodoroTime, setPomodoroTime] = useState(0);
    const [completedAct, setCompletedAct] = useState(false);
    const [selectedTask, setSelectedTask] = useState<ITodoTask>();

    return (
        <Container id='container' display='flex' direction='column' justify='center' alignItems='center'>
            <Timer selectedTask={selectedTask} setCompletedAct={() => setCompletedAct(true)} setPomodoroTime={setPomodoroTime} />
            <TaskList selectedTask={selectedTask} setSelectedTask={setSelectedTask}
                setCompletedAct={() => setCompletedAct(false)}
                pomodoroTime={pomodoroTime} completedAct={completedAct} />
        </Container>
    );
}

export default HomePage;