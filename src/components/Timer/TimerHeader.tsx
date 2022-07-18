import { Row, Col } from "@nextui-org/react";
import TabButton from '../buttons/TabButton';
import ITimerHeader from "./interfaces/ITimerHeader";

const TimerHeader = (props: ITimerHeader) => {
    return (
        <Row id='timer-header' align="center" justify="center" gap={1}>
            <Col>
                {props.tab === ('pomodoro') ?
                    <TabButton auto color='primary' size='primary' border='primary' font='primary' ripple={false}> Pomodoro </TabButton> :
                    <TabButton auto color='secondary' size='primary' border='primary' font='primary' ripple={false}
                        onPress={() => props.changeTab('pomodoro')}> Pomodoro </TabButton>}
            </Col>
            <Col>
                {props.tab === ('short break') ?
                    <TabButton auto color='primary' size='primary' border='primary' font='primary' ripple={false}> Short Break </TabButton> :
                    <TabButton auto color='secondary' size='primary' border='primary' font='primary' ripple={false}
                        onPress={() => props.changeTab('short break')}> Short Break </TabButton>}
            </Col>
            <Col>
                {props.tab === ('long break') ?
                    <TabButton auto color='primary' size='primary' border='primary' font='primary' ripple={false}> Long Break </TabButton> :
                    <TabButton auto color='secondary' size='primary' border='primary' font='primary' ripple={false}
                        onPress={() => props.changeTab('long break')}> Long Break </TabButton>}
            </Col>
        </Row>
    );
}

export default TimerHeader;
