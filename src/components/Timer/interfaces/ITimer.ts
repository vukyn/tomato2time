import ITodoTask from "../../Task/interfaces/ITodoTask";

export default interface ITimer {
    actPomodoro: number;
    addActPomodoro: () => void;
    selectedTask: ITodoTask;
}