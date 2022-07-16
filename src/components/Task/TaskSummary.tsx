import { Row } from "@nextui-org/react";
import AppText from "../texts/AppText";
import ITaskSummary from "./interfaces/ITaskSummary";

const TaskSummary = (props: ITaskSummary) => {

    const titleStyled = { margin: '12px 7px', color: 'rgba(255, 255, 255, 0.7)' }
    const valueStyled = { margin: '0px 7px 0px 0px' }

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
                {props.todoTasks.filter(t => t.isCompleted === false).length}
            </AppText>
            <AppText size='md' css={titleStyled}>
                Act :
            </AppText>
            <AppText bold size='lg' css={valueStyled}>
                0
            </AppText>
            <AppText size='md' css={titleStyled}>
                Finish at
            </AppText>
            <AppText bold size='lg' css={valueStyled}>
                25 : 00
            </AppText>
        </Row>
    );
}

export default TaskSummary;