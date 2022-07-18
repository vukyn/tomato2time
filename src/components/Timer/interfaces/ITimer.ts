import ITodoTask from "../../Task/interfaces/ITodoTask";

export default interface ITimer {
    actPomodoro: number;
    selectedTask: ITodoTask;
    addActPomodoro: () => void;
    setPomodoroTime: (pomodoroTime: number) => void;
}