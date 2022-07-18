export default interface ITimerControl {
    type?: string;
    status: string;
    decreaseTime: () => void;
    increaseTime: () => void;
    pause: () => void;
    start: () => void;
    skip: () => void;
}