import React, {useRef, useState} from 'react';
import {Card, Form, Button, Alert} from 'react-bootstrap';
import {useAuth} from '../context/AuthContext';
import {Link} from 'react-router-dom';

export default function ForgotPassword() {
    const emailRef = useRef()
    const {resetPassword} = useAuth()
    
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    async function handleSubmit(event){
        event.preventDefault()
        try {
            setMessage('')
            setError('')
            setLoading(true)
            // so that when processing, user do not create multiple accounts from overclicking

            await resetPassword(emailRef.current.value)
            setMessage('Check inbox for further instructions')
        } catch {
            setError('Failed to reset password')
        }
        setLoading(false)
        // set to false after signup
    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Password Reset</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    {/* if error, use bootstrap error to show user */}
                    {message && <Alert variant='success'>{message}</Alert>}
                    {/* if success, use bootstrap error to show user */}
                    <Form onSubmit={handleSubmit}>
                    {/* when form is submitted, handleSubmit is triggered */}
                        <Form.Group id='email'>
                            <Form.Label>Email: </Form.Label>
                            <Form.Control type='email' ref={emailRef} required/> 
                            {/* ref so that we can get the value when we submit the Form */}
                        </Form.Group>

                        <Button className='w-100 mb-4 mt-3' type='submit' disabled={loading}>Reset Password</Button>
                        {/* if loading, disable the button */}
                    </Form>
                    <div className='w-100 text-center mt-2'>
                        <Link to='/'>Back to Login</Link>
                    </div>
                </Card.Body>
            </Card>
            {/* Card will contain the login information */}
        {/* div will give us information to swap between (login) pages */}
        </>
    
    )
}
