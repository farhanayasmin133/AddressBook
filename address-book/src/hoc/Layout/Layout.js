import React from 'react';
import Auxialiary from '../Auxiliary/Auxiliary';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const layout = (props) =>{

    return (
        <Auxialiary>
            <Header title="Address Book"/>
            <main>
                {props.children}
            </main>
            <Footer developer="Farhana Yasmin"/>
        </Auxialiary>
    );
}

export default layout;