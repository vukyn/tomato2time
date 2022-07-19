import { Button } from '@nextui-org/react';

interface IAddButton {
    size: number;
    color: string;
    increaseTime: any;
}

const AddButton = (props: IAddButton) => {

    const size = ' md-' + props.size;
    const color = ' ' + props.color;
    const css = {minWidth: props.size, height: props.size, padding: 0}
    const iconStyle = 'material-icons add-icon' + size + color;

    return (
        <Button light ripple={false} css={css} onPress={props.increaseTime}>
            <i className={iconStyle}>add</i>
        </Button>
    );
}

AddButton.defaultProps = {
    size: 18,
    color: ''
}

export default AddButton;
