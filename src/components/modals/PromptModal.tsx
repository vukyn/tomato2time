import { Modal, Text } from "@nextui-org/react";
import TextButton from "../buttons/TextButton";
import IPromptModal from "./interfaces/IPromptModal";

const PromptModal = (props: IPromptModal) => {

    // Event handlers
    const confirmHandler = () => {
        props.confirm();
        // Fix overflow: hidden
        document.body.style.cssText = '';
    }
    
    return (
        <Modal preventClose open={props.visible} onClose={props.close}>
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
                <TextButton size='primary' color="primary" onClick={confirmHandler}>
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