import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';

const Wrapper = ({children}) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
     );
}
 
export default Wrapper;