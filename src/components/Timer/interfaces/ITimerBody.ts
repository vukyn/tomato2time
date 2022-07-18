export default interface ITimerBody {
    tab: string;
    timerTitle: string;
    changeTab: (tab: string) => void;
    addActPomodoro: () => void;
}