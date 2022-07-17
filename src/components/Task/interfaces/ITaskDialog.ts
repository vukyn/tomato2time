import ITodoTask from "./ITodoTask";

export default interface ITaskDialog {
    addEditTodoTask: any,
    closeTaskDialog: any,
    deleteTodoTask?: any;
    isEdit: boolean,
    todoTask?: ITodoTask
}