import { useState, useEffect } from "react";
import TimerHeader from './TimerHeader';
import TimerBody from './TimerBody';
import AppText from "../texts/AppText";
import { Container, Card, Spacer, Row } from '@nextui-org/react';
import ITimer from "./interfaces/ITimer";

const Timer = (props: ITimer) => {

    // Create states
    const [tab, setTab] = useState('podomoro');
    const [timerNo, setTimerNo] = useState(1);

    // ComponentDidMount
    useEffect(() => {
        document.title = 'Podomoro Timer!';
    });

    // Event handlers
    const changeTabHandler = (tab: string) => {
        setTab(tab);
    }

    const addTimerNoHandler = () => {
        setTimerNo(t => t + 1);
    }

    return (
        <Container id='timer-box' css={{ maxWidth: '480px', margin: 'auto' }}>
            <Spacer y={2} />
            <Card id='timer-container' css={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '20px 0px 30px', marginBottom: '20px' }}>
                <Card.Header>
                    <TimerHeader tab={tab} changeTab={changeTabHandler} />
                </Card.Header>
                <Card.Divider />
                <Card.Body css={{ textAlign: 'center' }}>
                    <TimerBody tab={tab} changeTab={changeTabHandler} addTimerNo={addTimerNoHandler} />
                </Card.Body>
            </Card>
            <Spacer y={1} />
            <Row id='timer-no' justify='center'>
                <AppText id='timer-no' opacity='true'>#{timerNo}</AppText>
            </Row>
            <Row justify='center'>
                <AppText id='timer-title' size='md'>
                    {
                        props.selectedTask !== undefined ?
                            props.selectedTask.taskName :
                            tab === ('podomoro') ? 'Time to focus!' : 'Time for a break!'
                    }
                </AppText>
            </Row>
        </Container>
    );
}

export default Timer
