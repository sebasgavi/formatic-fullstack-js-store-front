import * as React from 'react';
import { Dialog, Card, CardContent, TextField, Button } from '@material-ui/core';
import api from '../utils/api';

const Register = ({ location, history }) => {
    const handleOnSubmit = (event) => {
        event.preventDefault();
        api.register(event.target.username.value,
            event.target.email.value,
            event.target.password.value)
            .then(res => {
                var newSearch = location.search
                    .substring(1)
                    .split('&')
                    .filter(key => key !== 'register')
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
                        id="register-username"
                        name="username"
                        label="Nombre de usuario"
                        margin="normal"
                        />
                    <TextField
                        fullWidth
                        id="register-email"
                        name="email"
                        label="Correo electrónico"
                        margin="normal"
                        type="email"
                        />
                    <TextField
                        fullWidth
                        id="register-password"
                        name="password"
                        label="Contraseña"
                        margin="normal"
                        type="password"
                        />

                    <Button type="submit">
                        Registrarme
                    </Button>
                </form>
            </CardContent>
        </Card>
    </Dialog>;
}

export default Register;