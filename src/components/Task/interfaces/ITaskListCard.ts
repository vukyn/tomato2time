import ITodoTask from "./ITodoTask";

export default interface ITaskListCard {
    todoTask: ITodoTask;
    isSelected: boolean;
    completeTask: () => void;
    addEditTodoTask: (todoTask: ITodoTask, isEdit: boolean) => void;
    selectTodoTask: () => void;
    deleteTodoTask: () => void;
}