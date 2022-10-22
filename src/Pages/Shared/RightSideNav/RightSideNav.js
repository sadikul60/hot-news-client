import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaFacebook, FaGithub, FaGoogle, FaRegSun, FaTwitch, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    const [error, setError] = useState();
    const { providerLogin, providerGithubLogin, providerFacebookLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    //Google With Login
    const handleSignInWithGoogle = () =>{
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            
            console.log(user);
        })
        .catch(error => setError(error.message))
    }


    // GitHub with Login
    const handleSignInWithGithub = () =>{
        providerGithubLogin(gitHubProvider)
        .then(result => {
            const user = result.user;
            setError('');
            console.log(user);
        })
        .catch(error => setError(error.message));
    }


    // Facebook with Login
    const handleSignInWithfacebook = () =>{
        providerFacebookLogin(facebookProvider)
        .then(result => {
            const user = result.user;
            setError('');
            console.log(user);
        })
        .catch(error => setError(error.message));
    }

    return (
        <div>
            <ButtonGroup vertical>
                <p className='text-danger'>{error}</p>
                <Button onClick={handleSignInWithGoogle} className='mb-2 w-100% mx-auto' variant='outline-primary'><FaGoogle></FaGoogle> Login With Google</Button>
                <Button onClick={handleSignInWithGithub} className='mb-2 w-100' variant='outline-dark'><FaGithub></FaGithub> Login With GitHub</Button>
                <Button onClick={handleSignInWithfacebook} className='mb-2 w-100' variant='outline-primary'><FaFacebook></FaFacebook> Login With Facebook</Button>
            </ButtonGroup>

            <div className='mt-4'>
                <h5>Find on us</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp /> WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch /> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaRegSun /> Terms & Policy</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='mt-4'>
                <h5>Brands</h5>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;