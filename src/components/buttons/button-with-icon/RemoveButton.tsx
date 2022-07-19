import { Button } from '@nextui-org/react';

interface IRemoveButton {
    size: number;
    color: string;
    decreaseTime: any;
}

const RemoveButton = (props: IRemoveButton) => {

    const size = ' md-' + props.size;
    const color = ' ' + props.color;
    const css = {minWidth: props.size, height: props.size, padding: 0}
    const iconStyle = 'material-icons remove-icon' + size + color;

    return (
        <Button light ripple={false} css={css} onPress={props.decreaseTime}>
            <i className={iconStyle}>remove</i>
        </Button>
    );
}

RemoveButton.defaultProps = {
    size: 18,
    color: ''
}

export default RemoveButton;
