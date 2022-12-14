import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import rebornMailSucess from '../public/assets/icons/reborn-mail-sucess.svg'
import Image from 'next/image'
import Link from 'next/link';
import Head from 'next/head'

const validationMail = () => {
    return (
        <>
            <Head>
                <title>Votre mail à bien été envoyé - reborn</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="robots" content="noindex" />
            </Head>
            <Navbar></Navbar>
            <section className="validation-mail">
                <div className="container">
                    <div className="mail-confirm">
                        <Image src={rebornMailSucess} alt='Icône mail'></Image>
                        <h2>Votre mail à bien été envoyé, nous vous répondrons dans les plus brefs délais.</h2>
                        <div className='btn__container'><Link className="btn primary-btn" href="/">Retour à l'accueil</Link></div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}

export default validationMail