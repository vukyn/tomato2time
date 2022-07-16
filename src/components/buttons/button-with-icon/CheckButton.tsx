import { Button } from "@nextui-org/react"

interface ICheckButton {
    size: number;
    color: string;
    onPress?: any;
}

const CheckButton = (props: ICheckButton) => {

    const css = {minWidth: props.size, height: props.size, padding: 0, marginTop: 2}

    return (
        <Button light ripple={false} css={css} onPress={props.onPress}>
            <i className='material-icons check-icon' style={{color: props.color, fontSize: props.size}}>check_circle</i>
        </Button>
    );
}

CheckButton.defaultProps = {
    size: 18,
    color: ''
}

export default CheckButton;