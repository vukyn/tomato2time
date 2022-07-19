import { Col, Row } from "@nextui-org/react";
import AddButton from "../buttons/button-with-icon/AddButton";
import RemoveButton from "../buttons/button-with-icon/RemoveButton";
import SkipButton from "../buttons/button-with-icon/SkipButton";
import CountdownButton from "../buttons/CountdownButton";
import ITimerControl from "./interfaces/ITimerControl";


const TimerControl = (props: ITimerControl) => {
    return (
        <Row id='control-buttons' justify='center' align='center' gap={0}>
            <Col>
                <Row justify='center' align='center' css={{ paddingTop: '5px' }}>
                    {props.status !== 'RUNNING' && props.type === 'pomodoro' ?
                        <RemoveButton size={36} decreaseTime={props.decreaseTime} /> : ''
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
                            <SkipButton size={36} skip={props.skip} /> :
                            props.type === 'pomodoro' ?
                                <AddButton size={36} increaseTime={props.increaseTime} /> : ''
                    }
                </Row>
            </Col>
        </Row>
    );
}

export default TimerControl;