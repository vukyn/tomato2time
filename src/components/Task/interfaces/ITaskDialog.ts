import ITodoTask from "./ITodoTask";

export default interface ITaskDialog {
    isEdit: boolean;
    todoTask?: ITodoTask;
    deleteTodoTask?: () => void;
    closeTaskDialog: () => void;
    addEditTodoTask: (todoTask: ITodoTask, isEdit: boolean) => void;
}