import ITodoTask from "./ITodoTask";

export default interface ITaskSummary {
    actPomodoro: number;
    todoTasks: Array<ITodoTask>;
}