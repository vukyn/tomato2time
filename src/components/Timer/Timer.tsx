import { useState, useEffect } from "react";
import TimerHeader from './TimerHeader';
import TimerBody from './TimerBody';
import AppText from "../texts/AppText";
import { Container, Card, Spacer, Row } from '@nextui-org/react';
import ITimer from "./interfaces/ITimer";

const Timer = (props: ITimer) => {

    // Create states
    const [tab, setTab] = useState('pomodoro');

    // ComponentDidMount
    useEffect(() => {
        document.title = 'Pomodoro Timer!';
    });

    // Event handlers
    const changeTabHandler = (tab: string) => {
        setTab(tab);
    }

    const timerTitle = props.selectedTask !== undefined ? props.selectedTask.taskName :
        tab === 'pomodoro' ? 'Time to focus!' : 'Time for a break!'

    return (
        <Container id='timer-box' css={{ maxWidth: '480px', margin: 'auto' }}>
            <Spacer y={2} />
            <Card id='timer-container' css={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '20px 0px 30px', marginBottom: '20px' }}>
                <Card.Header>
                    <TimerHeader tab={tab} changeTab={changeTabHandler} />
                </Card.Header>
                <Card.Divider />
                <Card.Body css={{ textAlign: 'center' }}>
                    <TimerBody tab={tab} changeTab={changeTabHandler} timerTitle={timerTitle}
                        addActPomodoro={props.addActPomodoro} setPomodoroTime={props.setPomodoroTime} />
                </Card.Body>
            </Card>
            <Spacer y={1} />
            <Row id='timer-no' justify='center'>
                <AppText id='timer-no' opacity='true'>#{props.actPomodoro + 1}</AppText>
            </Row>
            <Row justify='center'>
                <AppText id='timer-title' size='md'> {timerTitle} </AppText>
            </Row>
        </Container>
    );
}

export default Timer
