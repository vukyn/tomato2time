import { Modal, Text } from "@nextui-org/react";
import TextButton from "../buttons/TextButton";

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
                <TextButton size='primary' color="primary" onClick={props.close}>
                    {props.cancelText}
                </TextButton>
                <TextButton size='primary' color="primary" onClick={props.skip}>
                    {props.confirmText}
                </TextButton>
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