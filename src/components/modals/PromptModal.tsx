import { Modal, Text } from "@nextui-org/react";
import PromptButton from "../buttons/PromptButton";

interface IPromptModal {
    headerText: string;
    bodyText: string;
    cancelText: string;
    confirmText: string;
    visible: boolean;
    close: any;
    skip: any;
}

const PromptModal = (props: IPromptModal) => {
    return (
        <Modal open={props.visible} onClose={props.close}>
            <Modal.Header>
                <Text h5 color="neutral">{props.headerText}</Text>
            </Modal.Header>
            <Modal.Body>
                <Text h5 color="neutral">{props.bodyText}</Text>
            </Modal.Body>
            <Modal.Footer>
                <PromptButton size='primary' color="primary" onClick={props.close}>
                    {props.cancelText}
                </PromptButton>
                <PromptButton size='primary' color="primary" onClick={props.skip}>
                    {props.confirmText}
                </PromptButton>
            </Modal.Footer>
        </Modal>
    );
}

PromptModal.defaultProps = {
    headerText: '',
    bodyText: '',
    cancelText: 'Cancel',
    confirmText: 'Confirm'
}

export default PromptModal;