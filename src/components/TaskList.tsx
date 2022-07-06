import AppText from "./texts/AppText";
import { Container, Row, Col } from "@nextui-org/react";
import MoreIconButton from "./icon-buttons/MoreIconButton";

const TaskList = () => {
    return (
        <Container id='task-list'>
            <Row id='task-header'>
                <Col><AppText>Tasks</AppText> </Col>
                <Col>
                    <MoreIconButton />
                </Col>
            </Row>
        </Container>
    );
}

export default TaskList;
