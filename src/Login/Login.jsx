import * as React from 'react';
import { Dialog, Card, CardContent, TextField, Button } from '@material-ui/core';
import api from '../utils/api';

const Login = ({ location, history }) => {
    const handleOnSubmit = (event) => {
        event.preventDefault();
        api.login(event.target.email.value,
            event.target.password.value)
            .then(res => {
                console.log(res)
                var newSearch = location.search
                    .substring(1)
                    .split('&')
                    .filter(key => key !== 'login')
                    .join('&');
                if(newSearch){
                    newSearch = '?' + newSearch;
                }
                history.push(location.pathname + newSearch);
            });
    }

    return <Dialog open maxWidth="md">
        <Card>
            <CardContent>
                <form onSubmit={handleOnSubmit}>
                    <TextField
                        fullWidth
                        id="login-email"
                        name="email"
                        label="Correo electrónico"
                        margin="normal"
                        type="email"
                        />
                    <TextField
                        fullWidth
                        id="login-password"
                        name="password"
                        label="Contraseña"
                        margin="normal"
                        type="password"
                        />

                    <Button type="submit">
                        Entrar
                    </Button>
                </form>
            </CardContent>
        </Card>
    </Dialog>;
}

export default Login;