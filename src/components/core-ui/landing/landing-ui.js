import React from 'react';
import Typed from 'react-typed';
import './landing.css';
import '../../core-ui/about/about.css';
import fotoPerfil from "../../../assets/png/portfolio.jpg"

function LandingUI({ theme }) {
    return (
        <div className='landing' style={{ backgroundColor: theme.quaternary }}>
            <div className='landing--container'>
                <div
                    className='landing--container'
                    style={{ backgroundColor: theme.secondary }}
                >
                    <div
                        className='lcr--content'
                        style={{ color: theme.tertiary }}
                    >
                        <h1>Paula Soares</h1>
                        <Typed
                            strings={['Frontend Developer Jr.']}
                            typeSpeed={40}
                            backSpeed={50}
                            className="typed-header"
                            style={{ color: theme.primary, fontSize: '20px' }}
                            loop
                        />
                        <p>
                            Apaixonada por programação e em busca de crescimento profissional.
    
                        </p>
                    </div>
                    <div className='about-photo'>
                        <img
                            src={fotoPerfil}
                            alt='foto perfil'
                            className='landing--img'
                            style={{
                                borderColor: theme.primary,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingUI;