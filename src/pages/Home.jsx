import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

const home_links = [
    {href: '/login', label: 'Ingresar'},
    {href: '/registro', label: 'Registrarse'},
    {href: '/about', label: 'Acerca de'}
];


function Home() {
    return (
        <>
            <Navbar links={home_links} />
            <div>

            </div>
            <header>
                <h1> Editorial Autonomic</h1>
            </header>
            <section>
                <Card>
                    ¿Tienes una historia ilustrada y deseas que el mundo la conozca?
                    <div>
                        <div class="gallery">
                            <a target="_blank" href="thanos1.jpg">
                                <img src="thanos1.jpg" alt="thanos" width="600" height="400" />
                            </a>
                            <div class="desc">Add a description of the image here</div>
                        </div>
                    </div>
                    ¡Compartela ahora y conviertete en el autor más reconocido!
                    <div></div>
                    <a href="https://twitter.com/" class="button"> Publica tu Historia </a>
             </Card>

            </section>


        </>


    );
}

export default Home;

