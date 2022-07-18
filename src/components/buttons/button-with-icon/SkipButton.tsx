import { useState } from "react";
import { Button, styled } from "@nextui-org/react";
import PromptModal from "../../modals/PromptModal";

interface ISkipButton {
    size: number;
    color: string;
    skip: any;
}

const SkipButtonStyled = styled(Button, {
    marginTop: '6px',
    transition: 'all 0.2s ease-out 0s'
});

const SkipButton = (props: ISkipButton) => {

    const [visible, setVisible] = useState(false);

    const size = ' md-' + props.size;
    const color = ' ' + props.color;
    const css = { minWidth: props.size, height: props.size, padding: 0 }
    const iconStyle = 'material-icons skip-icon' + size + color;

    const confirmPromptHandler = () => {
        setVisible(false);
        props.skip();
    }

    return (
        <div>
            <SkipButtonStyled light ripple={false} css={css}>
                <i className={iconStyle} onClick={() => setVisible(true)}>skip_next</i>
            </SkipButtonStyled>
            <PromptModal visible={visible} bodyText='Are you sure to skip ?' confirmText='Skip'
                close={() => setVisible(false)} confirm={confirmPromptHandler} />
        </div>
    );
}

SkipButton.defaultProps = {
    size: 18,
    color: ''
}

export default SkipButton;