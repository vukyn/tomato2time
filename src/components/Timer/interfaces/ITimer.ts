import ITodoTask from "../../Task/interfaces/ITodoTask";

export default interface ITimer {
    selectedTask: ITodoTask;
    setCompletedAct: () => void;
    setPomodoroTime: (pomodoroTime: number) => void;
}