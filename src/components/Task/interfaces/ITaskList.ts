import ITodoTask from "./ITodoTask";

export default interface ITaskList {
    completedAct: boolean;
    pomodoroTime: number;
    selectedTask: ITodoTask;
    setCompletedAct: () => void;
    setSelectedTask: (task: ITodoTask) => void;
}