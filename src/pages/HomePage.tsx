import Timer from '../components/Timer/Timer';
import TaskList from '../components/Task/TaskList';
import { Container } from '@nextui-org/react';
import { useState } from 'react';
import ITodoTask from '../components/Task/interfaces/ITodoTask';

const HomePage = () => {

    const [selectedTask, setSelectedTask] = useState<ITodoTask>();

    return (
        <Container id='container' display='flex' direction='column' justify='center' alignItems='center'>
            <Timer selectedTask={selectedTask}/>
            <TaskList selectedTask={selectedTask} setSelectedTask={setSelectedTask}/>
        </Container>
    );
}

export default HomePage;