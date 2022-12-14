import React from 'react';
import productBackground from '../../../public/assets/img/reborn-product-background.webp'
import productImage from '../../../public/assets/img/chaises/reborn-chaise-5.webp'
import Image from 'next/image'
import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'
import Head from 'next/head'
import Link from 'next/link';

const chaise5 = () => {
    return (
        <>
            <Head>
                <title>Chaise N°5 - reborn</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:title" content="Chaise N°5 - reborn" key="title" />
                <meta property="og:description" content="Notre chaise numéro 5, avec son assise ultra confortable et ses pieds aux rondeurs familières, viendra satisfaire les petits et les grands, humains comme animaux alors gare aux poils !" />
                <meta name='description' content="Notre chaise numéro 5, avec son assise ultra confortable et ses pieds aux rondeurs familières, viendra satisfaire les petits et les grands, humains comme animaux alors gare aux poils !" />
            </Head>
            <Navbar></Navbar>
            <section className="wrapper">
                <section className="section-product">
                    <div className="container-row">
                        <div className="product__left">
                            <h1><span className="span-font">Chaise N°5</span></h1>
                            <Image src={productImage} alt="Chaise reborn 1"></Image>
                        </div>
                        <div className="product__right">
                            <p className='product__right-sub'>Chaise <span>-</span> fiche produit</p>

                            <div className='product__right-pre'>
                                <p>Description</p>
                                <p>50€</p>
                            </div>
                            <p>Notre chaise numéro 5, avec son assise ultra confortable et ses pieds aux rondeurs familières, viendra satisfaire les petits et les grands, humains comme animaux alors gare aux poils !</p>
                            <p className='product__right-ps'>PS : le paiement se fait directement à l’atelier pour que notre site soit le plus léger possible (#environmentfriendly) et histoire qu’on se fasse un petit coucou : chez nous, on privilégie le lien social !
                                Vous pouvez réserver ce produit en cliquant sur le petit bouton juste en dessous.
                            </p>
                            <div className='product__btn__container'><button disabled className="btn product-btn">
                                Reserver
                            </button><p>*La réservation est momentanément indisponible</p></div>
                            <div className='product__seperator'></div>
                            <div className='product__details'>
                                <p>Son histoire</p>
                                <p>Détails</p>
                            </div>
                        </div>
                    </div>
                    <div className="product__background"><Image src={productBackground} loading="eager" alt="Illustration fond page produit"></Image></div>
                </section>
            </section>
            <Footer></Footer>
        </>
    );
}

export default chaise5