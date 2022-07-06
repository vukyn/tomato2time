import { Button } from '@nextui-org/react';

interface IRemoveIconButton {
    size: number;
    color: string;
    decreaseTime: any;
}

const RemoveIconButton = (props: IRemoveIconButton) => {

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

RemoveIconButton.defaultProps = {
    size: 18,
    color: ''
}

export default RemoveIconButton;
