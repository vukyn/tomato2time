import { useState } from "react";
import { Button, styled } from "@nextui-org/react";
import PromptModal from "../modals/PromptModal";

interface ISkipIconButton {
    size: number;
    color: string;
    skip: any;
}

const SkipButton = styled(Button, {
    marginTop: '6px',
    transition: 'all 0.2s ease-out 0s'
});

const SkipIconButton = (props: ISkipIconButton) => {

    const size = ' md-' + props.size;
    const color = ' ' + props.color;
    const css = { minWidth: props.size, height: props.size, padding: 0 }
    const iconStyle = 'material-icons skip-icon' + size + color;

    const [visible, setVisible] = useState(false);
    const openHandler = () => setVisible(true);
    const closeHandler = () => setVisible(false);

    return (
        <div>
            <SkipButton light ripple={false} css={css}>
                <i className={iconStyle} onClick={openHandler}>skip_next</i>
            </SkipButton>
            <PromptModal visible={visible} bodyText='Are you sure to skip ?' confirmText='Skip'
                close={closeHandler} skip={props.skip} />
        </div>
    );
}

SkipIconButton.defaultProps = {
    size: 18,
    color: ''
}

export default SkipIconButton;