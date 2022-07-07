import Divider from "./Divider";
import AppText from "./texts/AppText";
import AddTaskButton from "./buttons/AddTaskButton";
import { Container, Row } from "@nextui-org/react";
import TransparentButton from "./buttons/TransparentButton";

const TaskList = () => {
    return (
        <Container id='task-list' css={{ maxWidth: '480px', margin: '20px auto 42px' }}>
            <Row id='task-header'>
                <AppText bold='true' size='md'>Tasks</AppText>
                <Container display='flex' justify='flex-end' css={{ paddingRight: '0px' }}>
                    <TransparentButton ripple={false} boxmodel='morebtn' border='primary' size='morebtn' color='primary' font='primary'>
                        <i className='material-icons md-24'>more_vert</i>
                    </TransparentButton>
                </Container>
            </Row>
            <Divider color='white' opacity={0.5} size={2} />
            <AddTaskButton border='primary' size='primary' color='primary' animated={false}>
                <i className='material-icons md-18' style={{ marginRight: '5px' }}>add_circle_outline</i> Add Task
            </AddTaskButton>
        </Container>
    );
}

export default TaskList;
