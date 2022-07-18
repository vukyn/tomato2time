export default interface IPomodoroTimer {
    timerTitle: string;
    playSound: (sound: string) => void;
    addActPomodoro?: () => void;
    switchTab: () => void;
    addPodomoro?: () => void;
}