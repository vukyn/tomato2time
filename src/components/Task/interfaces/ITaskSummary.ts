import ITodoTask from "./ITodoTask";

export default interface ITaskSummary {
    actPomodoro: number;
    pomodoroTime: number;
    todoTasks: Array<ITodoTask>;
}