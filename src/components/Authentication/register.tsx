import { useState } from 'react';
import {
    Container,
    Form,
    Input,
    SubmitButton,
    HandleButton,
} from "./styles";
import { Link } from 'react-router-dom';
import { FiArrowRight } from "react-icons/fi";
import { isEmail } from 'validator';
import { toast } from 'react-toastify';
import history from '../../services/history';
import { useDispatch } from 'react-redux';
import axios from '../../services/axios';
import { get } from 'lodash';

const Authentication = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    async function handleSubmit(e) {
        e.preventDefault();
        let formErros = false;

        //Verifica se o nome do usuario é menor que 3 caracteres e menor que 255
        if (username.length < 3 || username.length > 255) {
            formErros = true;
            toast.error('Name must be between 3 to 255 characters.')
        }

        //Verifica se o email é valido
        if (!isEmail(email)) {
            formErros = true;
            toast.error('Invalid email.')
        }

        //Verifica se a senha é menor que 6 caracteres e menor que 50
        if (password.length < 6 || password.length > 50) {
            formErros = true;
            toast.error('Password must be between 6 to 50 characters.')
        }

        if (formErros) {
            return;
        }

        try {
           await axios.post('/users', {
                username,
                email,
                password,
                password_confirmation: password

            });
            toast.success('You have registered!')
            history.push('/')

        } catch (e) {
            const errors = get(e, 'response.data',[]);
          
        toast.error('This user is already registered') 
           
        }

    }


    return (
        <Container>
            <h1>Registration</h1>
            <Form onSubmit={handleSubmit}>
                <Input
                    placeholder="Username"
                    id="username"
                    type="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />

                <Input
                    placeholder="Email"
                    type="email"
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <SubmitButton type="submit">
                    Register <FiArrowRight />
                </SubmitButton>
            </Form>
            <HandleButton >
                <Link to="/"> Back </ Link>
            </HandleButton>
        </Container>
    );
};

export default Authentication;
