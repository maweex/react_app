import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import FormInput from '../components/FormInput';

const login_links = [
    {href: '/home', label: 'Home'},
    {href: '/registro', label: 'Registrarse'},
    {href: '/about', label: 'Acerca de'}
];


function Login() {
    return (
        <div>
            <Navbar links={login_links} />
            <section>
                <Card title="Ingresar" >
                    <form>
                        <FormInput 
                        label="Correo"
                        placeholder="Ingrese su Correo"
                        type="email"/>
                        <FormInput
                        label="Contraseña"
                        placeholder= "Ingrese su Contraseña"
                        type= "password" />

                        <div className="centered">
                            <input type="submit" value="Ingresar" />
                        </div>
                    </form>
                </Card>
            </section>
        </div>


    );



}

export default Login;