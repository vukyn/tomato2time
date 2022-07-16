import { Card, Textarea, Input, Row, Col } from "@nextui-org/react";
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
    const [isAddNote, setIsAddNote] = useState(false);
    const [canSave, setCanSave] = useState(false);

    useEffect(() => {
        if (taskName.length > 0)
            setCanSave(true);
        else
            setCanSave(false);
    }, [taskName]);

    const increasePomodorosHandler = () => {
        if (estPomodoros < 10)
            setEstPomodoros(estPomodoros => estPomodoros + 1);
    }

    const decreasePomodorosHandler = () => {
        if (estPomodoros > 1)
            setEstPomodoros(estPomodoros => estPomodoros - 1);
    }

    const saveHandler = () => {
        const todoTask = {
            taskName,
            estPomodoros,
            taskNote,
            isCompleted: false
        }
        props.addTodoTask(todoTask);
        resetDialog();
    }

    const resetDialog = () => {
        setTaskName('');
        setTaskNote('');
        setEstPomodoros(1);
        setIsAddNote(false);
        setCanSave(false);
    }

    return (
        <Card id='task-dialog'>
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
                <Col css={{ paddingTop: '8px' }}>
                    <Row>
                        {
                            isAddNote ?
                                <Textarea fullWidth aria-label='task_note' status="primary" placeholder="Some notes..."
                                    minRows={3} maxRows={10} value={taskNote} onChange={(e) => setTaskNote(e.target.value)} /> :
                                <TextButton ripple={false} size='primary' color="primary" bold onPress={() => setIsAddNote(true)}
                                    css={{ color: 'rgba(0, 0, 0, 0.4)', textDecoration: 'underline' }}>
                                    + Add Note
                                </TextButton>
                        }
                    </Row>
                    <Row justify='flex-end'>
                        {
                            isAddNote &&
                            <TextButton ripple={false} size='primary' color="primary" bold onPress={() => setIsAddNote(false)}
                                css={{ color: 'rgba(0, 0, 0, 0.4)', textDecoration: 'underline', fontSize: '12px' }}>
                                Cancel
                            </TextButton>
                        }
                    </Row>
                </Col>
            </Card.Body>
            <Card.Footer css={{ backgroundColor: '#efefef' }}>
                <Row >
                    <Row justify="flex-start">
                        <TextButton bold ripple={false} size='primary' color="primary" css={{ color: '#888888' }}>
                            Delete
                        </TextButton>
                    </Row>
                    <Row justify="flex-end">
                        <TextButton bold ripple={false} onPress={props.closeTaskDialog}
                            size='primary' color="primary" css={{ color: '#888888' }}>
                            Cancel
                        </TextButton>
                        <TextButton bold disabled={!canSave} ripple={false} size='primary' onPress={saveHandler}
                            css={{ color: canSave ? '#ffffff' : '#888888', backgroundColor: canSave ? '#544b49' : '$gray400' }} >
                            Save
                        </TextButton>
                    </Row>
                </Row>
            </Card.Footer>
        </Card>
    );
}

export default TaskDialog;
