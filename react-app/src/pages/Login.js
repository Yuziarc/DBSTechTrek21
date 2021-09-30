import React, {useRef, useState} from 'react';
import {Card, Form, Button, Alert} from 'react-bootstrap';

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    
    function handleSubmit(event){

    }
    return (
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Log In</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                {/* if error, use bootstrap error to show user */}
                <Form onSubmit={handleSubmit}>
                {/* when form is submitted, handleSubmit is triggered */}
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required/> 
                        {/* ref so that we can get the value when we submit the Form */}
                    </Form.Group>

                    <Form.Group id='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' ref={passwordRef} required/> 
                    </Form.Group>
                    {/* <span /> */}
                    <Button className='w-100' type='submit' disabled={loading}>Log In</Button>
                    {/* if loading, disable the button */}
                </Form>
            </Card.Body>
        </Card>
    )
}
