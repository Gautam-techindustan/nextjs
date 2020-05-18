import { Form, Col, Button } from 'react-bootstrap'
export default function Register() {
    return (
        <div>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="YourName">
                        <Form.Label>Your Name *</Form.Label>
                        <Form.Control type="text" placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="Youremail">
                        <Form.Label>Your Email Id *</Form.Label>
                        <Form.Control type="email" placeholder="Your email" />
                    </Form.Group>

                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="YourCompanyName">
                        <Form.Label>Your Company Name *</Form.Label>
                        <Form.Control type="text" placeholder="Your Company Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="YourWebsiteName">
                        <Form.Label>Your Website Name *</Form.Label>
                        <Form.Control type="text" placeholder="Your Website Name" />
                    </Form.Group>
                </Form.Row>
                <Form.Group controlId="YourCompanyLocation">
                    <Form.Label>Your Company Location</Form.Label>
                    <Form.Control as="textarea" rows="3" placeholder="Your Company Location" />
                </Form.Group>

                <div className="d-flex justify-content-end">
                    <Button variant="primary" type="submit">
                        Send Message
                </Button>
                </div>

            </Form>
        </div>
    )
}
