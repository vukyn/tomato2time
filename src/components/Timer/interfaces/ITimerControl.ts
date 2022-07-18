export default interface ITimerControl {
    type?: string;
    status: string;
    pause: () => void;
    start: () => void;
    skip: () => void;
    decreaseTime: () => void;
    increaseTime: () => void;
}