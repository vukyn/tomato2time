import ITodoTask from "./ITodoTask";

export default interface ITaskListCard {
    todoTask: ITodoTask;
    isSelected: boolean;
    completeTask: () => void;
    selectTodoTask: () => void;
    deleteTodoTask: () => void;
    addEditTodoTask: (todoTask: ITodoTask, isEdit: boolean) => void;
}