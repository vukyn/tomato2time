import ITodoTask from "./ITodoTask";

export default interface ITaskSummary {
    pomodoroTime: number;
    todoTasks: Array<ITodoTask>;
}