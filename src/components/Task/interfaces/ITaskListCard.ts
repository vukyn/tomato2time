import ITodoTask from "./ITodoTask";

export default interface ITaskListCard {
    todoTask: ITodoTask
    completeTask: any;
    addEditTodoTask: any;
    deleteTodoTask: any;
}