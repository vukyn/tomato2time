import HeaderButton from "./buttons/HeaderButton";
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
                <Col span={4}><LogoText>25 plus 5</LogoText></Col>
                <Col>
                    <Container display='flex' justify='flex-end'>
                        <HeaderButton ripple={false} border='primary' size='primary' color='primary' font='primary'>
                            <i className='material-icons md-18' style={{margin: '3px 4px 0px 0px'}}>assessment</i> Report
                        </HeaderButton>
                        <HeaderButton ripple={false} border='primary' size='primary' color='primary' font='primary'>
                            <i className='material-icons md-18' style={{margin: '3px 4px 0px 0px'}}>settings</i> Setting
                        </HeaderButton>
                        <HeaderButton ripple={false} border='primary' size='primary' color='primary' font='primary'>
                            <i className='material-icons md-18' style={{margin: '3px 4px 0px 0px'}}>account_circle</i> Login
                        </HeaderButton>
                    </Container>
                </Col>
            </Row>
            <hr className="solid"></hr>
        </Container>
    );
}

export default Header;
