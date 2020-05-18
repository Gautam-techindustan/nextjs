import { Container, Navbar, Nav } from 'react-bootstrap'
import Register from '../../Register/Register'
import MyVerticallyCenteredModal from '../Modal'
import Link from 'next/link'
import Router from 'next/router'
export default function Header() {
    const [modalShow, setModalShow] = React.useState(false);

    function onChangeRouter(key) {
        console.log(key, ">>>")
        Router.push(key)
    }

    return (
        <div className="cus-header">
            <div className="cus-header-inner fixed-top">
                <Container>
                    <Navbar bg="white" expand="lg" >
                        <Navbar.Brand >
                            <Link href="/" >
                                <img src="https://techindustan.com/wp-content/uploads/2017/01/techindustan-logo-sticky.jpg" alt="Techindustan" />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                            <Nav>
                                <Link href="/" passHref>
                                    <Nav.Link >Home</Nav.Link>
                                </Link>
                                {/* <div onClick={() => onChangeRouter("/test/1")} >
                                    <Nav.Link >Test</Nav.Link>
                                </div> */}
                                <Link href="/topdevelopers" as="/topdevelopers" passHref>
                                    <Nav.Link >Top Developers</Nav.Link>
                                </Link>
                                <Link href="/blog" as="/blog" passHref>
                                    <Nav.Link >Blog</Nav.Link>
                                </Link>
                                <Link href="/contactus"  as="/blog" passHref>
                                    <Nav.Link >Write For Us</Nav.Link>
                                </Link>
                                <Nav.Link className="btn btn-primary text-caps btn-rounded btn-framed" onClick={() => setModalShow(true)}>GET LISTED</Nav.Link>

                                <MyVerticallyCenteredModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                    title="List Your Bussiness"
                                >
                                    <Register />
                                </MyVerticallyCenteredModal>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </div>
        </div>
    )
}
