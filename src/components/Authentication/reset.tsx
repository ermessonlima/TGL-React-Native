import { useState } from 'react';
import {
    Container,
    Form,
    Input,
    RecoverButton,
    SubmitButton,
    HandleButton,
} from "./styles";
import { isEmail } from 'validator';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import history from '../../services/history';
import { FiArrowRight } from "react-icons/fi";
import * as actions from '../../store/modules/auth/actions'
import { useLocation } from 'react-router-dom'
import * as exampleActions from "../../store/modules/example/actions";

import axios from '../../services/axios';
import { get } from 'lodash';


interface userState {
    usuario: {
        user: {
            username: string;
            email: string;
            password: string;
        }
    }
}

function useQuery() {
    return new URLSearchParams(useLocation().search)
}


const Reset = (props) => {

    let query = useQuery();


    const prevPath = get(props, 'location.state.prevPath', '/');
    const dispatch = useDispatch();
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
 
    async function handleSubmit(e) {
        e.preventDefault();

        dispatch(exampleActions.clicaBotaoRequest()) 

     let formErros = false;



        if (password.length < 6 || password.length > 50) {
            formErros = true;
            toast.error('Password must be between 6 to 50 characters.')
        }

        if (password != passwordConfirm) {
            formErros = true;
            toast.error('Different passwords.')
        }


        if (formErros) {
            return;
        }

      console.log( query.get('token'))
        try {
            await axios.put('/passwords', {
                token: query.get('token'),
                password,
                password_confirmation: passwordConfirm
            })

            toast.success('Password changed successfully!')
            history.push('/')

        } catch (e) {
          console.log(e)
        }


    }

    return (
        <Container>
          
            <h1>Reset Password</h1>
          
            <Form onSubmit={handleSubmit}>
            <Input
                    placeholder="Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <Input
                    placeholder="Confirm the Password"
                    type="password"
                    id="password"
                    value={passwordConfirm}
                    onChange={e => setPasswordConfirm(e.target.value)}
                />


                <SubmitButton type="submit" onClick={handleSubmit}>
                    Send
                <FiArrowRight style={{ background: '#fff' }} />

                </SubmitButton>
            </Form>
            

        </Container>
    );
};

export default Reset;
