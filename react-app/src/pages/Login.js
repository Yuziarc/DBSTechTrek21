import React, {useRef, useState} from 'react';
import {Card, Form, Button, Alert} from 'react-bootstrap';
import {useAuth} from '../context/AuthContext';
import {Link ,useHistory} from 'react-router-dom';

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    // points to signup from AuthContext.js
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(event){
        event.preventDefault()

        try {
            setError('')
            setLoading(true)
            // so that when processing, user do not create multiple accounts from overclicking

            await login(emailRef.current.value, passwordRef.current.value)
            // if (isMountedRef.current){
                history.push('/products')
            // }
        } catch {
            setError('Failed to log in')
        }
        return () => setLoading(false)
        // return () => isMountedRef.current = false;
        // setLoading(false)
        // set to false after signup
    }
    return (
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'> Log In</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                {/* if error, use bootstrap error to show user */}
                <Form onSubmit={handleSubmit}>
                {/* when form is submitted, handleSubmit is triggered */}
                    <Form.Group id='email'>
                        <Form.Label>Email: </Form.Label>
                        <Form.Control type='email' ref={emailRef} required/> 
                        {/* ref so that we can get the value when we submit the Form */}
                    </Form.Group>

                    <Form.Group id='password'>
                        <Form.Label>Password: </Form.Label>
                        <Form.Control type='password' ref={passwordRef} required/> 
                    </Form.Group>
                    {/* <span /> */}
                    <Button className='w-100 mb-4 mt-3' type='submit' disabled={loading}>Log In</Button>
                    {/* if loading, disable the button */}
                    <div> </div>
                </Form>
                <div className='w-100 text-center mt-2'>
                    <Link to='/forgotpassword'>Forgot Password?</Link>
                </div>
            </Card.Body>
        </Card>
    )
}
