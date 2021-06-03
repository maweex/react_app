import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import FormInput from '../components/FormInput';
import FormTextArea from '../components/FormTextArea';
import FormOutput from '../components/FormOutput';


const registro_links = [
    {href: '/home', label: 'Home'},
    {href: '/login', label: 'Ingresar'},
    {href: '/about', label: 'Acerca de'}
];

function Register() {
    return (
        <>
            <Navbar links={registro_links} />
            <header>

            </header>
            <section>
                <Card title="Registrarse">
                    <form id="datos_usuario">
                        <FormInput
                            label="Nombre y Apellidos" />
                        <FormInput
                            label="Correo"
                            placeholder="Ingrese Correo"
                            type="email" />
                        <FormInput
                            label="Contraseña"
                            placeholder="Ingrese Contraseña"
                            type="password" />
                        <FormInput
                            placeholder="Confirmar Contraseña"
                            type="password" />
                        <FormTextArea
                            label="Descripción"
                            placeholder="Cuentanos sobre ti.
                            Puedes Editar tu información más adelante."
                        />
                        <FormOutput
                            value="Ingrese foto de perfil (work in progress)"
                            input="" />
                            <img src="marvel.jpg" alt="Point Nemo" width="142" height="142"></img>
                <div className="centered">
                    <input type="submit" value="Registrarse" />
                </div>
            </form>

            
        </Card>
            </section>
    </>
    );
}

export default Register;