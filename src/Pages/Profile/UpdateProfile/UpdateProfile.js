import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const UpdateProfile = () => {
    const { user } = useContext(AuthContext);
    const [name, setName] = useState(user.displayName);
    // const [photoURL, setPhotoURL] = useState(user.photoURL);
    const photURLRef = useRef(user.photoURL);
    const nameRef = useRef(user.displayName);

    const handleUpdateProfile = (event) => {
        event.preventDefault();
        console.log(nameRef.current.value);
        console.log(photURLRef.current.value)
    }

   


    return (
        <div className='text-center border border-4 w-75 mx-auto rounded'>
            <h3 className='bg-info p-2'>Update Profile</h3>

            <Form onSubmit={handleUpdateProfile} className='text-start p-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control readOnly defaultValue={user.email} type="email" name="email" placeholder="Enter email"  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Update Name</Form.Label>
                    <Form.Control ref={nameRef} defaultValue={user.displayName} type="text" name="name" placeholder="Enter name"  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Update photoURL</Form.Label>
                    <Form.Control ref={photURLRef} defaultValue={user.photoURL} type="text" name="photoURL" placeholder="Enter photoURL" />
                </Form.Group>

                <Button className='w-100' variant="primary" type="submit">
                    Update
                </Button>
            </Form>
        </div>
    );
};

export default UpdateProfile;