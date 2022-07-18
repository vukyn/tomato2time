import { useEffect, useRef } from 'react';
import useSound from 'use-sound';
import { useTimer } from 'use-timer';
import { Text, styled } from "@nextui-org/react";
import ITimerBody from './interfaces/ITimerBody';
import IPomodoroTimer from './interfaces/IPomodoroTimer';
import TimerControl from './TimerControl';

// CONSTANTS
const POMODORO_TIME = 1500;
const SHORT_TIME = 300;
const LONG_TIME = 900;
const END_TIME = 0;

const TimerText = styled(Text, {
    fontSize: '120px',
    fontWeight: 'bold',
    fontFamily: 'Nunito',
    lineHeight: '$md'
});

const displayTimer = (time: number, title: string) => {
    // Time(number)
    const _minutes = Math.floor(time / 60);
    const _seconds = time - _minutes * 60;

    //Time(string)
    var minutes = _minutes.toString();
    var seconds = _seconds.toString();

    if (_minutes < 10) minutes = '0' + minutes;
    if (_seconds < 10) seconds = '0' + seconds;

    document.title = minutes + ':' + seconds + ' - ' + title;

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

    const addPomodoroHandler = () => {
        pomodoro.current += 1;
    }

    const switchTabHandler = () => {
        switch (props.tab) {
            case 'pomodoro':
                if (pomodoro.current % 4 === 0) {
                    props.changeTab('long break');
                    pomodoro.current = 0;
                }
                else
                    props.changeTab('short break');
                break;
            case 'short break':
                props.changeTab('pomodoro');
                break;
            case 'long break':
                props.changeTab('pomodoro');
                break;
            default:
                break;
        }
    }

    switch (props.tab) {
        case 'pomodoro':
            return <PomodoroTimer playSound={playSoundHandler} addPomodoro={addPomodoroHandler} timerTitle={props.timerTitle}
                addActPomodoro={props.addActPomodoro} switchTab={switchTabHandler} setPomodoroTime={props.setPomodoroTime} />
        case 'short break':
            return <ShortTimer playSound={playSoundHandler}
                switchTab={switchTabHandler} timerTitle={props.timerTitle} />
        case 'long break':
            return <LongTimer playSound={playSoundHandler}
                switchTab={switchTabHandler} timerTitle={props.timerTitle} />
        default:
            return <div></div>
    }
}

const PomodoroTimer = (props: IPomodoroTimer) => {
    // use-timer
    const { time, start, pause, reset, status, advanceTime } = useTimer({
        initialTime: POMODORO_TIME,
        endTime: END_TIME,
        timerType: 'DECREMENTAL',
        onTimeOver: () => {
            props.playSound('alarm');
            props.addActPomodoro();
            props.addPomodoro();
            props.switchTab();
        }
    });

    // useEffect
    useEffect(() => {
        props.setPomodoroTime(time);
    }, [time]);

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
            <TimerText id='timer-text'>{displayTimer(time, props.timerTitle)}</TimerText>
            <TimerControl start={startHandler} pause={pauseHandler} status={status} skip={skipHandler}
                increaseTime={increaseTimeHandler} decreaseTime={decreaseTimeHandler} type='pomodoro'/>
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
            <TimerText id='timer-text'>{displayTimer(time, props.timerTitle)}</TimerText>
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
            <TimerText id='timer-text'>{displayTimer(time, props.timerTitle)}</TimerText>
            <TimerControl start={startHandler} pause={pauseHandler} status={status} skip={skipHandler}
                increaseTime={increaseTimeHandler} decreaseTime={decreaseTimeHandler} />
        </div>
    );
}

export default TimerBody;
