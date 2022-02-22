import Form from 'react-bootstrap/Form'
import {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
const LogInPage = () => {
    return(
        <Container>
            <Form>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type = 'text'></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type = 'password'></Form.Control>
                </Form.Group>
                <Button>Submit</Button>
            </Form>
        </Container>
    )
}

export {LogInPage}