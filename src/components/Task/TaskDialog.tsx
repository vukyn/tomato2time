import { Card, Input, Row, Col } from "@nextui-org/react";
import SpinButton from "../buttons/SpinButton";
import TextButton from "../buttons/TextButton";
import AppText from "../texts/AppText";
import { useEffect, useState } from "react";

interface ITaskDialog {
    todoTasks: Array<any>,
    addTodoTask: any,
    closeTaskDialog: any,
}

const TaskDialog = (props: ITaskDialog) => {

    const [taskName, setTaskName] = useState('');
    const [estPomodoros, setEstPomodoros] = useState(1);
    const [taskNote, setTaskNote] = useState('');
    const [canSave, setCanSave] = useState(false);

    useEffect(() => {
        if (taskName.length > 0)
            setCanSave(true);
        else
            setCanSave(false);
    }, [taskName]);

    const increasePomodorosHandler = () => {
        console.log(estPomodoros)
        if (estPomodoros < 10)
            setEstPomodoros(estPomodoros => estPomodoros + 1);
    }

    const decreasePomodorosHandler = () => {
        if (estPomodoros > 1)
            setEstPomodoros(estPomodoros => estPomodoros - 1);
    }

    return (
        <Card>
            <Card.Body>
                <Row css={{ paddingBottom: '8px' }}>
                    <Input underlined fullWidth aria-label='task_name'
                        status='primary' placeholder='What are you working on?'
                        size='xl' style={{ fontWeight: 'bold' }}
                        value={taskName} onChange={(e) => setTaskName(e.target.value)} />
                </Row>
                <Col css={{ padding: '8px 0' }} >
                    <Row>
                        <AppText bold size='sm' css={{ color: '#000000', paddingLeft: 5, marginBottom: 8 }}>Est Pomodoros</AppText>
                    </Row>
                    <Row>
                        <Input underlined aria-label='task_pomodoros' readOnly
                            width='75px' type='number' status='primary' style={{ fontWeight: 'bold' }}
                            value={estPomodoros.toString()} onChange={(e) => setEstPomodoros(parseInt(e.target.value))} />
                        <SpinButton ripple={false} border='primary' size='primary' onPress={decreasePomodorosHandler}>
                            <i className='material-icons md-24' style={{ color: '#000000' }}>expand_more</i>
                        </SpinButton>
                        <SpinButton ripple={false} border='primary' size='primary' onPress={increasePomodorosHandler}>
                            <i className='material-icons md-24' style={{ color: '#000000' }}>expand_less</i>
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
                        <TextButton bold ripple={false} onClick={props.closeTaskDialog}
                            size='primary' color="primary" css={{ color: '#888888' }}>
                            Cancel
                        </TextButton>
                        <TextButton bold disabled={!canSave} onClick={() => console.log(taskName)}
                            ripple={false} size='primary' css={{ color: '#888888' }}>
                            Save
                        </TextButton>
                    </Row>
                </Row>
            </Card.Footer>
        </Card>
    );
}

export default TaskDialog;
