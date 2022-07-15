import Divider from "../divider/Divider";
import AppText from "../texts/AppText";
import AddTaskButton from "../buttons/AddTaskButton";
import { Container, Row, Spacer } from "@nextui-org/react";
import TaskMenu from "./TaskMenu";

const TaskList = () => {
    return (
        <Container id='task-list' css={{ maxWidth: '480px', margin: '20px auto 42px' }}>
            <Row id='task-header'>
                <AppText bold='true' size='md'>Tasks</AppText>
                <Container display='flex' justify='flex-end' css={{ paddingRight: '0px' }}>
                    <TaskMenu />
                </Container>
            </Row>
            <Divider color='white' opacity={0.5} size={2} />
            <AddTaskButton border='primary' size='primary' color='primary' animated={false}>
                <i className='material-icons md-18' style={{ marginRight: '5px' }}>add_circle_outline</i> Add Task
            </AddTaskButton>
            <Spacer y={1} />
        </Container>
    );
}

export default TaskList;
