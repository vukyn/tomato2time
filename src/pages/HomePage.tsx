import Timer from '../components/Timer/Timer';
import TaskList from '../components/Task/TaskList';
import { Container } from '@nextui-org/react';
import { useState } from 'react';
import ITodoTask from '../components/Task/interfaces/ITodoTask';

const HomePage = () => {

    const [actPomodoro, setActPomodoro] = useState(0);
    const [pomodoroTime, setPomodoroTime] = useState(0);
    const [selectedTask, setSelectedTask] = useState<ITodoTask>();

    return (
        <Container id='container' display='flex' direction='column' justify='center' alignItems='center'>
            <Timer selectedTask={selectedTask} actPomodoro={actPomodoro}
                addActPomodoro={() => setActPomodoro(a => a + 1)} setPomodoroTime={setPomodoroTime} />
            <TaskList selectedTask={selectedTask} setSelectedTask={setSelectedTask}
                actPomodoro={actPomodoro} pomodoroTime={pomodoroTime} />
        </Container>
    );
}

export default HomePage;