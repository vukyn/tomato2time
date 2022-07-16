import { Card, Row, Col } from "@nextui-org/react";
import CheckButton from "../buttons/button-with-icon/CheckButton";
import EditTaskButton from "./buttons/EditTaskButton";
import AppText from "../texts/AppText";

interface ITaskListCard {
    isCompleted: boolean;
    taskName: string;
    estPomodoros: number;
    completeTask: any;
}

const TaskListCard = (props: ITaskListCard) => {
    return (
        <Card variant='flat' css={{ margin: '8px 0px', height: '80%' }}>
            <Card.Body>
                <Row>
                    <Col>
                        {
                            props.isCompleted ?
                                <Row justify='flex-start'>
                                    <CheckButton size={26} color='#d95550' onPress={props.completeTask} />
                                    <AppText bold size='md' css={{ color: '#bbbbbb', paddingLeft: 5, textDecoration: 'line-through' }}>
                                        {props.taskName}
                                    </AppText>
                                </Row>
                                :
                                <Row justify='flex-start'>
                                    <CheckButton size={26} color='#bbbbbb' onPress={props.completeTask} />
                                    <AppText bold size='md' css={{ color: '#000000', paddingLeft: 5 }}> {props.taskName} </AppText>
                                </Row>
                        }
                    </Col>
                    <Col>
                        <Row justify='flex-end'>
                            <AppText bold opacity size='md' css={{ color: '#000000', padding: '0px 15px' }}> 0/{props.estPomodoros} </AppText>
                            <EditTaskButton bordered border='primary' size='primary' color='primary' borderWeight='light' ripple={false}>
                                <i className='material-icons md-24 edit-task-icon'>more_vert</i>
                            </EditTaskButton>
                        </Row>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default TaskListCard;