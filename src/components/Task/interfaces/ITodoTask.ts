export default interface ITodoTask {
    id: string;
    taskName: string;
    estPomodoros: number;
    taskNote?: string;
    isAddNote: boolean;
    isCompleted: boolean;
}