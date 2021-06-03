import React from 'react';

function Card(props) {
    return (
        <section id="card">
            <header>
                <h4>{props.title}</h4>
                
            </header>
            {props.children}

        </section>
    );

}

export default Card;