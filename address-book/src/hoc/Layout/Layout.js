import React from 'react';
import Auxialiary from '../Auxiliary/Auxiliary';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import classes from './Layout.module.css';

/**
 * Layout component contains 3 sections. Header, Body and Footer.
 */
const layout = (props) => {

    return (
        <Auxialiary>
            <Header title="Address Book" />
            <main className={classes.Main}>
                {props.children}
            </main>
            <Footer developer="Farhana Yasmin" />
        </Auxialiary>
    );
}

export default layout;