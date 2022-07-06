import { Button } from '@nextui-org/react';

interface IMoreIconButton {
    size: number;
    color: string;
}

const MoreIconButton = (props: IMoreIconButton) => {

    const size = ' md-' + props.size;
    const color = ' ' + props.color;
    const css = {minWidth: props.size, height: props.size, padding: 0}
    const iconStyle = 'material-icons more-icon' + size + color;

    return (
        <Button light ripple={false} css={css}>
            <i className={iconStyle}>more_vert</i>
        </Button>
    );
}

MoreIconButton.defaultProps = {
    size: 18,
    color: ''
}

export default MoreIconButton;
