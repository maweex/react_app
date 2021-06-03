import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

const about_links = [
    {href: '/home', label: 'Home'},
    {href: '/registro', label: 'Registrarse'},
    {href: '/login', label: 'Ingresar'}
];


function About() {
    return (
        <>
            <Navbar links={about_links} />
            <div>

            </div>
            <header>
                <h1> Acerca de</h1>
            </header>
            <section>
                
                <Card>
                        <h3>
                            Somos una editorial Distinta!
                        </h3>
                        Nuestro objetivo es apoyar la pequeña industria del comic en Chile, y presentar nuevas historias, y frescas.
                        <div>
                            ¿No están cansados de los mismos comics chilenos de siempre? Llenos de patriotismo, chilenismos, chistes e historias que solo
                            un chileno podría entender?
                            <div>
                                Nuestra idea es publicar historias universales, que puedan disfrutarse tanto en otro continente, 
                                como en otro planeta!

                                Pronto, esta aplicación tendrá paginas que permitan subir imagenes, publicarlas, crear un usuario y guardarlo en una base de datos, etc.
                                 Por ahora, disfrute este muy inexperto trabajo de frontend.
                
                            </div>
                        </div>
                    
             </Card>

            </section>


        </>


    );
}

export default About;

