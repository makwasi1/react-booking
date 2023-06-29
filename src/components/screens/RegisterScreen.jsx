import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../FormContainer';
import { useDispatch, useSelector } from 'react-redux';
import { useRegisterMutation } from '../../slices/usersApiSclice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../Loader';


const RegisterScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setName] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const  [register ,  {isLoading}] = useRegisterMutation();

    const { userInfo } = useSelector((state) => state.auth);

    const submitHandler = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        } else {
            try {
                const res = await register({username, email, password}).unwrap();
                console.log('submit');
                dispatch(setCredentials({...res}));
                navigate('/');
            } catch (err) {
                toast.error(err?.data?.message || err.error);
            }
        }
            
       
    }

    useEffect(() => {
        if(userInfo) navigate('/');
    },[navigate, userInfo])

    return (
        <FormContainer>
            <h1>Sign In</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group className='my-2' controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type='name'
                        placeholder='Enter name'
                        value={username}
                        onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group className='my-2' controlId='email'>
                    <Form.Label>
                        Email Address
                    </Form.Label>
                    <Form.Control
                        trype='email'
                        placeholder='Enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                <Form.Group className='my-2' controlId='password'>
                    <Form.Label>
                        Password
                    </Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                <Form.Group className='my-2' controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
                <Button type='submit' variant='primary' className='mt-3'>
                    Sign Up
                </Button>
                
            </Form>
            {isLoading && <Loader />}
            <Row className='py-3'>
                <Col>
                Already have an account? <Link to='/login'>Login</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default RegisterScreen;
