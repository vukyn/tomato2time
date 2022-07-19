import { Container, Link, Row } from "@nextui-org/react";
import Divider from "../../components/dividers/Divider";
import AppText from "../../components/texts/AppText";


const Footer = () => {
    return (
        <Container id='footer' css={{ maxWidth: '100%', padding: 0 }}>
            <Divider color='black' opacity={0.1} size={1} />
            <Row justify='center' align='center' css={{ padding: ' 10px 0px' }}>
                <AppText css={{ fontSize: '12px', marginRight: 3 }}>Created by</AppText>
                <Link css={{ fontSize: '12px' }} href="https://github.com/vukyn"> Vu Ky</Link>
            </Row>
        </Container>
    );
};

export default Footer;