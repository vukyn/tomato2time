export default interface ITodoTask {
    id: string;
    taskName: string;
    actPomodoros: number;
    estPomodoros: number;
    taskNote?: string;
    isAddNote: boolean;
    isCompleted: boolean;
}