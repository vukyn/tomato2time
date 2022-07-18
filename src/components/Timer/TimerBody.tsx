import { useRef } from 'react';
import useSound from 'use-sound';
import { useTimer } from 'use-timer';
import { Row, Col, Text, styled } from "@nextui-org/react";
import CountdownButton from '../buttons/CountdownButton';
import SkipIconButton from '../icon-buttons/SkipIconButton';
import AddIconButton from "../icon-buttons/AddIconButton";
import RemoveIconButton from "../icon-buttons/RemoveIconButton";
import ITimerBody from './interfaces/ITimerBody';
import ITimerControl from './interfaces/ITimerControl';
import IPomodoroTimer from './interfaces/IPomodoroTimer';

// CONSTANTS
const PODOMORO_TIME = 1500;
const SHORT_TIME = 300;
const LONG_TIME = 900;
const END_TIME = 0;

const TimerText = styled(Text, {
    fontSize: '120px',
    fontWeight: 'bold',
    fontFamily: 'Nunito',
    lineHeight: '$md'
});

const displayTimer = (time: number) => {
    // Time(number)
    const _minutes = Math.floor(time / 60);
    const _seconds = time - _minutes * 60;

    //Time(string)
    var minutes = _minutes.toString();
    var seconds = _seconds.toString();

    if (_minutes < 10) minutes = '0' + minutes;
    if (_seconds < 10) seconds = '0' + seconds;

    document.title = minutes + ':' + seconds + ' - Time to concentrate!'

    return minutes + ':' + seconds;
}

const TimerBody = (props: ITimerBody) => {

    // Ref
    const pomodoro = useRef(0);

    // Sounds
    const [playSwitch] = useSound(process.env.PUBLIC_URL + '/audios/switch.wav');
    const [playAlarm] = useSound(process.env.PUBLIC_URL + '/audios/alarm.mp3');

    // Event handlers
    const playSoundHandler = (sound: string) => {
        switch (sound) {
            case 'switch':
                playSwitch();
                break;
            case 'alarm':
                playAlarm();
                break;
            default:
                break;
        }
    }

    const addPodomoroHandler = () => {
        pomodoro.current += 1;
    }

    const switchTabHandler = () => {
        switch (props.tab) {
            case 'podomoro':
                if (pomodoro.current % 4 === 0) {
                    props.changeTab('long break');
                    pomodoro.current = 0;
                }
                else
                    props.changeTab('short break');
                break;
            case 'short break':
                props.changeTab('podomoro');
                break;
            case 'long break':
                props.changeTab('podomoro');
                break;
            default:
                break;
        }
    }

    switch (props.tab) {
        case 'podomoro':
            return <PomodoroTimer playSound={playSoundHandler} addPodomoro={addPodomoroHandler}
                addTimerNo={props.addTimerNo} switchTab={switchTabHandler} />
        case 'short break':
            return <ShortTimer playSound={playSoundHandler} addTimerNo={props.addTimerNo} switchTab={switchTabHandler} />
        case 'long break':
            return <LongTimer playSound={playSoundHandler} addTimerNo={props.addTimerNo} switchTab={switchTabHandler} />
        default:
            return <div></div>
    }
}

const TimerControl = (props: ITimerControl) => {
    return (
        <Row id='control-buttons' justify='center' align='center' gap={0}>
            <Col>
                <Row justify='center' align='center' css={{ paddingTop: '5px' }}>
                    {props.status !== 'RUNNING' &&
                        <RemoveIconButton size={36} decreaseTime={props.decreaseTime} />
                    }
                </Row>
            </Col>
            <Col>
                {
                    props.status === 'RUNNING' ?
                        <CountdownButton ripple={false} color='stop' size='primary' border='stop' animated={false}
                            font='primary' onPress={props.pause}>STOP</CountdownButton> :
                        <CountdownButton ripple={false} color='start' size='primary' border='start' animated={false}
                            font='primary' onPress={props.start}>START</CountdownButton>
                }
            </Col>
            <Col>
                <Row justify='center' align='center' css={{ paddingTop: '5px' }}>
                    {
                        props.status === 'RUNNING' ?
                            <SkipIconButton size={36} skip={props.skip} /> :
                            <AddIconButton size={36} increaseTime={props.increaseTime} />
                    }
                </Row>
            </Col>
        </Row>
    );
}

const PomodoroTimer = (props: IPomodoroTimer) => {
    // use-timer
    const { time, start, pause, reset, status, advanceTime } = useTimer({
        initialTime: PODOMORO_TIME,
        endTime: END_TIME,
        timerType: 'DECREMENTAL',
        onTimeOver: () => {
            props.playSound('alarm');
            props.addTimerNo();
            props.addPodomoro();
            props.switchTab();
        }
    });

    // Event handlers
    const decreaseTimeHandler = () => {
        if (time > 60) {
            start();
            pause();
            advanceTime(60);
        }
    }

    const increaseTimeHandler = () => {
        if (time < 3600) {
            start();
            pause();
            advanceTime(-60);
        }
    }

    const startHandler = () => {
        start();
        props.playSound('switch');
    }

    const pauseHandler = () => {
        pause();
        props.playSound('switch');
    }

    const skipHandler = () => {
        reset();
    }

    return (
        <div id='timer-body'>
            <TimerText id='timer-text'>{displayTimer(time)}</TimerText>
            <TimerControl start={startHandler} pause={pauseHandler} status={status} skip={skipHandler}
                increaseTime={increaseTimeHandler} decreaseTime={decreaseTimeHandler} />
        </div>
    );
}

const ShortTimer = (props: IPomodoroTimer) => {
    // use-timer
    const { time, start, pause, reset, status, advanceTime } = useTimer({
        initialTime: SHORT_TIME,
        endTime: END_TIME,
        timerType: 'DECREMENTAL',
        onTimeOver: () => {
            props.playSound('alarm');
            props.addTimerNo();
            props.switchTab();
        }
    });

    // Event handlers
    const decreaseTimeHandler = () => {
        if (time > 60) {
            start();
            pause();
            advanceTime(60);
        }
    }

    const increaseTimeHandler = () => {
        if (time < 3600) {
            start();
            pause();
            advanceTime(-60);
        }
    }

    const startHandler = () => {
        start();
        props.playSound('switch');
    }

    const pauseHandler = () => {
        pause();
        props.playSound('switch');
    }

    const skipHandler = () => {
        reset();
    }

    return (
        <div id='timer-body'>
            <TimerText id='timer-text'>{displayTimer(time)}</TimerText>
            <TimerControl start={startHandler} pause={pauseHandler} status={status} skip={skipHandler}
                increaseTime={increaseTimeHandler} decreaseTime={decreaseTimeHandler} />
        </div>
    );
}

const LongTimer = (props: IPomodoroTimer) => {
    // use-timer
    const { time, start, pause, reset, status, advanceTime } = useTimer({
        initialTime: LONG_TIME,
        endTime: END_TIME,
        timerType: 'DECREMENTAL',
        onTimeOver: () => {
            props.playSound('alarm');
            props.addTimerNo();
            props.switchTab();
        }
    });

    // Event handlers
    const decreaseTimeHandler = () => {
        if (time > 60) {
            start();
            pause();
            advanceTime(60);
        }
    }

    const increaseTimeHandler = () => {
        if (time < 3600) {
            start();
            pause();
            advanceTime(-60);
        }
    }

    const startHandler = () => {
        start();
        props.playSound('switch');
    }

    const pauseHandler = () => {
        pause();
        props.playSound('switch');
    }

    const skipHandler = () => {
        reset();
    }

    return (
        <div id='timer-body'>
            <TimerText id='timer-text'>{displayTimer(time)}</TimerText>
            <TimerControl start={startHandler} pause={pauseHandler} status={status} skip={skipHandler}
                increaseTime={increaseTimeHandler} decreaseTime={decreaseTimeHandler} />
        </div>
    );
}

export default TimerBody;
