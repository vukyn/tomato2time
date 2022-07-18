import { Row } from "@nextui-org/react";
import AppText from "../texts/AppText";
import ITaskSummary from "./interfaces/ITaskSummary";

const getFinishedTime = (second: number, estPomodoros: number) => {

    // Calculate total second 
    // (second = second * estPomodoros + short break * n + long break * n)
    let longbreakCount = 0;
    let shortbreakCount = estPomodoros - 1;
    second *= estPomodoros;
    if (shortbreakCount > 0) {
        longbreakCount = Math.floor(estPomodoros / 4);
        shortbreakCount -= longbreakCount;
        if (longbreakCount > 0 && estPomodoros % 4 === 0) {
            longbreakCount -= 1;
            shortbreakCount += 1;
        }
        second = second + shortbreakCount * 300 + longbreakCount * 900;
    }

    // Get current time
    let current = new Date();
    current.setSeconds(current.getSeconds() + second);

    //Time(string)
    var hours = current.getHours().toString();
    var minutes = current.getMinutes().toString();

    if (current.getHours() < 10) hours = '0' + hours;
    if (current.getMinutes() < 10) minutes = '0' + minutes;

    return hours + ' : ' + minutes;
}

const TaskSummary = (props: ITaskSummary) => {

    const titleStyled = { margin: '12px 7px', color: 'rgba(255, 255, 255, 0.7)' }
    const valueStyled = { margin: '0px 7px 0px 0px' }

    const actPomodoros = props.todoTasks.map(p => p.actPomodoros).reduce((prev, next) => prev + next, 0);
    const estPomodoros = props.todoTasks.filter(t => t.isCompleted === false)
        .map(p => p.estPomodoros - p.actPomodoros).reduce((prev, next) => prev + next, 0);
    const finishedTime = getFinishedTime(props.pomodoroTime, estPomodoros);

    return (
        <Row id='task-summary' justify='center' align='center'
            css={{
                marginTop: 25, padding: '5px 12px',
                borderTop: '1px solid rgba(255, 255, 255, 0.8)', backgroundColor: 'rgba(255, 255, 255, 0.1)'
            }}>
            <AppText size='md' css={titleStyled}>
                Est :
            </AppText>
            <AppText bold size='lg' css={valueStyled}>
                {estPomodoros}
            </AppText>
            <AppText size='md' css={titleStyled}>
                Act :
            </AppText>
            <AppText bold size='lg' css={valueStyled}>
                {actPomodoros}
            </AppText>
            <AppText size='md' css={titleStyled}>
                Finish at
            </AppText>
            <AppText bold size='lg' css={valueStyled}>
                {finishedTime}
            </AppText>
        </Row>
    );
}

export default TaskSummary;