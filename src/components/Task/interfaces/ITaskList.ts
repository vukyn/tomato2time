import ITodoTask from "./ITodoTask";

export default interface ITaskList {
    actPomodoro: number;
    pomodoroTime: number;
    selectedTask: ITodoTask;
    setSelectedTask: (task: ITodoTask) => void;
}