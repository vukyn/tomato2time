export default interface IPomodoroTimer {
    timerTitle: string;
    addActPomodoro?: () => void;
    switchTab: () => void;
    addPomodoro?: () => void;
    playSound: (sound: string) => void;
    setCompletedAct?: () => void;
    setPomodoroTime?: (pomodoroTime: number) => void;
}