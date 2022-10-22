import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const Register = () => {
    const [error, setError] = useState();
    const [isDisabled, setIsDisabled] = useState(true);
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoURL, email, password)

        createUser(email, password)
        .then(result => {
            const user = result.user;
            form.reset();
            setError('');
            navigate('/');
            handleUpdateUserProfile(name, photoURL);
            handleEmailVerification();
            toast.success('Please verify your email address.');
            console.log(user);
        })
        .cathe( error => setError(error.message));
    }

    const handleUpdateUserProfile = (name, photoURL) =>{
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
        .then( () => { })
        .catch(error => setError(error.message))
    }

    const handleEmailVerification = () =>{
        verifyEmail()
        .then( () => { })
        .catch(error => setError(error.message))

    }

    return (
        <div className='border border-2 p-3 rounded'>
            <h3 className='text-center text-info'>Please Register Now</h3>
                <p className='text-danger text-bold'> {error} </p>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>photoURL</Form.Label>
                    <Form.Control type="text" name="photoURL" placeholder="Enter photoURL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3 d-flex align-items-center" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setIsDisabled(!isDisabled)} className='me-2' type="checkbox" required />
                    accetp <Link to='/terms' className='ms-2'> terms & conditions</Link>
                </Form.Group>
                <Button disabled={isDisabled} className='w-100' variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;