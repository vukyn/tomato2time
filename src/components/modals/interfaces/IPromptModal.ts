export default interface IPromptModal {
    visible: boolean;
    bodyText: string;
    headerText: string;
    cancelText: string;
    confirmText: string;
    close: () => void;
    confirm: () => void;
}