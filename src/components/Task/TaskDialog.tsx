import AppText from "../texts/AppText";
import { Card, Input, Row, Col } from "@nextui-org/react";
import SpinButton from "../buttons/SpinButton";
import TextButton from "../buttons/TextButton";

interface ITaskDialog {
    addTask: any
}

const TaskDialog = (props: ITaskDialog) => {
    return (
        <Card>
            <Card.Body>
                <Row css={{ paddingBottom: '8px' }}>
                    <Input underlined fullWidth aria-label='task_name'
                        status='primary' placeholder='What are you working on?'
                        size='xl' style={{ fontWeight: 'bold' }} />
                </Row>
                <Col css={{ padding: '8px 0' }} >
                    <Row>
                        <AppText bold size='sm' css={{ color: '#000000', paddingLeft: 5, marginBottom: 8 }}>Est Pomodoros</AppText>
                    </Row>
                    <Row>
                        <Input underlined aria-label='task_pomodoros'
                            width='75px' type='number' status='primary'
                            initialValue='1' style={{ fontWeight: 'bold' }} />
                        <SpinButton ripple={false} border='primary' size='primary'>
                            <i className='material-icons md-24' style={{ color: '#000000' }}>expand_less</i>
                        </SpinButton>
                        <SpinButton ripple={false} border='primary' size='primary'>
                            <i className='material-icons md-24' style={{ color: '#000000' }}>expand_more</i>
                        </SpinButton>
                    </Row>
                </Col>
                <Row css={{ paddingTop: '8px' }}>
                    <TextButton ripple={false} size='primary' color="primary" bold
                        css={{ color: 'rgba(0, 0, 0, 0.4)', textDecoration: 'underline' }}>
                        + Add Note
                    </TextButton>
                </Row>
            </Card.Body>
            <Card.Footer css={{ backgroundColor: '#efefef' }}>
                <Row >
                    <Row justify="flex-start">
                        <TextButton bold ripple={false} size='primary' color="primary" css={{ color: '#888888' }}>
                            Delete
                        </TextButton>
                    </Row>
                    <Row justify="flex-end">
                        <TextButton bold ripple={false} onClick={props.addTask}
                            size='primary' color="primary" css={{ color: '#888888' }}>
                            Cancel
                        </TextButton>
                        <TextButton bold disabled ripple={false} size='primary' css={{ color: '#888888' }}>
                            Save
                        </TextButton>
                    </Row>
                </Row>
            </Card.Footer>
        </Card>
    );
}

export default TaskDialog;
