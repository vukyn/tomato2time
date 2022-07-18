export default interface ITimerBody {
    tab: string;
    timerTitle: string;
    addActPomodoro: () => void;
    changeTab: (tab: string) => void;
    setPomodoroTime: (pomodoroTime: number) => void;
}