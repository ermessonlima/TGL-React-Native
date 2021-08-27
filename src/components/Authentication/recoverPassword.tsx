import {useState} from "react";
import {
    Container,
    Form,
    Input,
    SubmitButton,
    HandleButton,
} from "./styles";
import { get } from 'lodash';
import { isEmail } from 'validator';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import axios from '../../services/axios';
import { useSelector } from "react-redux";
import { FiArrowLeft } from "react-icons/fi";
import history from '../../services/history';

interface userState {
    usuario: {
        user: {
            username: string;
            email: string;
            password: string;
        }
    }
}

const Authentication = () => {

    const [email, setEmail] = useState('');

   async  function handleSubmit(e) {
        e.preventDefault();
        let formErros = false;

        if (!isEmail(email)) {
            formErros = true;
            toast.error('Invalid e-mail')
        }

        if (formErros) {
            return;
        }
      

        try {
            await axios.post('/passwords', {
                 email,
                 redirect_url: "http://localhost:3000/reset"
             });

             toast.success('Email successfully sent!')
             toast.success('Check your inbox!')
             history.push('/')
 
         } catch (e) {
             const errors = get(e, 'response.data',[]);
            console.log(e)
            
         }


       
    }



    return (
        <Container>
            <h1>Reset password</h1>
            <Form onSubmit={handleSubmit}>
            <Input
                    placeholder="Email"
                    type="email"
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <SubmitButton type="submit">
                    Send link
                </SubmitButton>
            </Form>
            <HandleButton >
                <Link to="/"> <FiArrowLeft /> Back </ Link>
            </HandleButton>
        </Container>
    );
};

export default Authentication;
