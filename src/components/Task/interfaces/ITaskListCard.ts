import ITodoTask from "./ITodoTask";

export default interface ITaskListCard {
    todoTask: ITodoTask;
    isSelected: boolean;
    completeTask: any;
    addEditTodoTask: any;
    selectTodoTask: any;
    deleteTodoTask: any;
}