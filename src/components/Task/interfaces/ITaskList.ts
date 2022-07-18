import ITodoTask from "./ITodoTask";

export default interface ITaskList {
    selectedTask: ITodoTask;
    setSelectedTask: any;
}