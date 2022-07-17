import ITodoTask from "./ITodoTask";

export default interface ITaskDialog {
    addEditTodoTask: any,
    closeTaskDialog: any,
    isEdit: boolean,
    todoTask?: ITodoTask
}