interface IDivider {
    color: string;
    size: number;
    opacity: number;
}

const Divider = (props: IDivider) => {
    const borderTop = props.size + 'px ' + 'solid' + ' ' + props.color;
    return (
        <hr style={{opacity: props.opacity, borderTop: borderTop}}></hr>
    )
}

Divider.defaultProps = {
    color: 'black',
    opacity: 1,
    size: 1
}

export default Divider;
