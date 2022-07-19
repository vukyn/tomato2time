import { Card, Row, Col } from "@nextui-org/react";
import CheckButton from "../buttons/button-with-icon/CheckButton";
import EditTaskButton from "./buttons/EditTaskButton";
import AppText from "../texts/AppText";
import TaskDialog from "./TaskDialog";
import ITaskListCard from "./interfaces/ITaskListCard";
import { useState } from "react";


const TaskListCard = (props: ITaskListCard) => {

    const [isEditTask, setIsEditTask] = useState(false);

    const cardStyle = {
        marginTop: 8,
        height: '80%',
        borderRadius: 4,
        borderLeft: props.isSelected ? '5px solid #000000' : '',
        '&:hover': {
            borderLeft: props.isSelected ? '' : '5px solid #cccccc'
        }
    }

    const taskNoteStyle = {
        borderRadius: 8,
        width: '100%',
        padding: '10px 12px',
        color: '#000000',
        backgroundColor: '#fcf8de',
        boxShadow: 'rgb(0 0 0 / 10%) 0px 1px 0px'
    }

    return (
        isEditTask ?
            <TaskDialog isEdit={true} todoTask={props.todoTask} addEditTodoTask={props.addEditTodoTask}
                deleteTodoTask={props.deleteTodoTask} closeTaskDialog={() => setIsEditTask(false)} />
            :
            <Card isPressable isHoverable disableRipple variant='flat' onPress={props.selectTodoTask}
                css={cardStyle}>
                <Card.Body>
                    <Row>
                        <Col>
                            {
                                props.todoTask.isCompleted ?
                                    <Row justify='flex-start'>
                                        <CheckButton size={26} color='#d95550' onPress={props.completeTask} />
                                        <AppText bold size='md' css={{ color: '#bbbbbb', paddingLeft: 5, textDecoration: 'line-through' }}>
                                            {props.todoTask.taskName}
                                        </AppText>
                                    </Row>
                                    :
                                    <Row justify='flex-start'>
                                        <CheckButton size={26} color='#bbbbbb' onPress={props.completeTask} />
                                        <AppText bold size='md' css={{ color: '#000000', paddingLeft: 5 }}> {props.todoTask.taskName} </AppText>
                                    </Row>
                            }
                        </Col>
                        <Col>
                            <Row justify='flex-end'>
                                <AppText bold opacity size='md' css={{ color: '#000000', padding: '0px 15px' }}>
                                    {props.todoTask.actPomodoros}/{props.todoTask.estPomodoros}
                                </AppText>
                                <EditTaskButton bordered border='primary' size='primary' color='primary' borderWeight='light' ripple={false}
                                    onPress={() => setIsEditTask(true)}>
                                    <i className='material-icons md-24 edit-task-icon'>more_vert</i>
                                </EditTaskButton>
                            </Row>
                        </Col>
                    </Row>
                    {
                        // Display note if isAddNote and note.length> 0
                        props.todoTask.isAddNote && props.todoTask.taskNote.length > 0 ?
                            <Row align='center' justify='center' css={{ paddingTop: 6 }}>
                                <AppText css={taskNoteStyle}>
                                    {props.todoTask.taskNote}
                                </AppText>
                            </Row>
                            : ''
                    }
                </Card.Body>
            </Card>
    );
}

export default TaskListCard;