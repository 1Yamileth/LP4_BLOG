import React from 'react';
import '../../App.css';
import HomeSection from '../HomeSection';
import Footer from '../Footer';
import CrearBlog from './CrearBlog';
function Home() {
    return (
        <>
        <HomeSection />
        <p></p>
        <CrearBlog />
        <div className='home-footer'>
        <Footer />
       </div>

        </>
    );
}
export default Home;

