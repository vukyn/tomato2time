import Divider from "./dividers/Divider";
import TransparentButton from "./buttons/TransparentButton";
import { Container, Row, Col, Text, styled } from "@nextui-org/react";

const LogoText = styled(Text, {
    fontSize: '20px',
    fontWeight: 'bold',
    fontFamily: 'Nunito',
    display: 'inline-block',
    padding: '10px 24px'
});

const Header = () => {
    return (
        <Container id='header' css={{ maxWidth: '620px', margin: 'auto', padding: '0px 12px' }}>
            <Row justify='space-between' align='center'>
                <Col span={5}><LogoText>tomato2time</LogoText></Col>
                <Col>
                    <Container display='flex' justify='flex-end'>
                        <TransparentButton ripple={false} boxmodel='headerbtn' border='primary' size='headerbtn' color='primary' font='primary'>
                            <i className='material-icons md-18' style={{ margin: '3px 4px 0px 0px' }}>assessment</i> Report
                        </TransparentButton>
                        <TransparentButton ripple={false} boxmodel='headerbtn' border='primary' size='headerbtn' color='primary' font='primary'>
                            <i className='material-icons md-18' style={{ margin: '3px 4px 0px 0px' }}>settings</i> Setting
                        </TransparentButton>
                        <TransparentButton ripple={false} boxmodel='headerbtn' border='primary' size='headerbtn' color='primary' font='primary'>
                            <i className='material-icons md-18' style={{ margin: '3px 4px 0px 0px' }}>account_circle</i> Login
                        </TransparentButton>
                    </Container>
                </Col>
            </Row>
            <Divider color='black' opacity={0.1} size={1}/>
        </Container>
    );
}

export default Header;
