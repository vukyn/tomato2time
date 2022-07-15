import Timer from '../components/Timer/Timer';
import TaskList from '../components/Task/TaskList';
import { Container } from '@nextui-org/react';

const HomePage = () => {
    return (
        <Container id='container' display='flex' direction='column' justify='center' alignItems='center'>
            <Timer />
            <TaskList />
        </Container>
    );
}

export default HomePage;