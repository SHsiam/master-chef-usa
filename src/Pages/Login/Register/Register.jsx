import React, { useContext, useState } from 'react';
import { Button, Container, Form} from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';



const Register = () => {
    const { createUser} = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
    
        setError('')

        if (!email || email === '') {
            setError('Email cannot be blank!')
            return
        }else if(!password || password === " "){
            setError('Password cannot be blank!')
            return
        }
        else if (password.length < 6) {
            setError('password must be 6 characters or longer')
            return
        }
        console.log(name,photo,email,password);
       createUser(email, password)
            .then(result => {
                const createUser =result.user;
                console.log(createUser);
                updateUserData(result.user, photo,name);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
 
    }

    const updateUserData = (user, photo,name) => {
        updateProfile(user, {
            displayName:name,
            photoURL: photo
        })
            .then(() => {
                console.log('user name updated')
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <Container className='w-25 mx-auto'>
        <h3>Please Register</h3>
        <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Your Name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="text" name='photo' placeholder="Photo URL" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required />
            </Form.Group>

            <Button variant="primary"  type="submit">
                Register
            </Button>
            <br />
            <Form.Text className="text-secondary">
                Already Have an Account? <Link to="/login">Login</Link>
            </Form.Text>
        </Form>
        <p className='text-error'>{error}</p>
    </Container>
    );
};

export default Register;