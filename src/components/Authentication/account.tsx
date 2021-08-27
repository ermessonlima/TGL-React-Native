import { useState, useEffect } from 'react';
import {
    Container,
    Form,
    Input,
    SubmitButton,
    HandleButton,
} from "./styles";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FiArrowRight } from "react-icons/fi";
import { useSelector, useDispatch} from "react-redux";
import * as actions from '../../store/modules/auth/actions'

interface userState {
    auth: {
        user: {
            username: string;
            id: number;
        }
    }
}

const Account = () => {

    const dispatch = useDispatch();
    const id = useSelector((state: userState) => state.auth.user.id);
    const username = useSelector((state: userState) => state.auth.user.username);
   
   const [usernameNew, setusernameNew] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');


    useEffect(() => {
        setusernameNew(username);
    },[])

    function handleSubmit(e) {
        e.preventDefault();
        let formErros = false;

        console.log(password)

        //Verifica se o nome do usuario é menor que 3 caracteres e menor que 255
        if (usernameNew.length < 3 || usernameNew.length > 255) {
            formErros = true;
            toast.error('Name must be between 3 to 255 characters.')
        }



        //Verifica se as senha são iguais
        if (password != repeatPassword) {
            formErros = true;
            toast.error('Password must match.')
        }

        //Caso atenda a uma das situações anterior, o usuario não prossegue
        if (formErros) {
            return;
        }


       dispatch(actions.registerRequest({usernameNew, password, id}));

    }

    return (
        <Container>
          { <h1>Account</h1>}
            <Form onSubmit={handleSubmit}>
                <Input
                    placeholder="Username"
                    id="username"
                    type="username"
                    value={usernameNew}
                    onChange={e => setusernameNew(e.target.value)}
                />

                <Input
                    placeholder="Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <Input
                    placeholder="Repeat the password"
                    type="password"
                    id="repeatPassword"
                    value={repeatPassword}
                    onChange={e => setRepeatPassword(e.target.value)}
                />

                <SubmitButton type="submit">
                    Change <FiArrowRight />
                </SubmitButton>

            </Form>
            <HandleButton >
                <Link to="/home"> Back </ Link>
            </HandleButton>

        </Container>
    );
};

export default Account;
