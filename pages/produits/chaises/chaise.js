import React from 'react';
import productBackground from '../../../public/assets/img/reborn-product-background.webp'
import productImage from '../../../public/assets/img/chaises/reborn-chaise-1.webp'
import Image from 'next/image'
import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'
import Head from 'next/head'
import Link from 'next/link';

const chaise1 = () => {
    return (
        <>
            <Head>
                <title>Le concept - reborn</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:title" content="Le concept - reborn" key="title" />
                <meta property="og:description" content="Il est simple : donner une seconde vie à vos objets et ceux qu’on nous donne (on accepte les dons ici !). Fondée en 2022 par un petit groupe d’étudiants soucieux de participer à l'élaboration d’un nouveau mode de vie plus responsable, Reborn est une marque locale familiale et eco-friendly." />
                <meta name='description' content="Il est simple : donner une seconde vie à vos objets et ceux qu’on nous donne (on accepte les dons ici !). Fondée en 2022 par un petit groupe d’étudiants soucieux de participer à l'élaboration d’un nouveau mode de vie plus responsable, Reborn est une marque locale familiale et eco-friendly." />
            </Head>
            <Navbar></Navbar>
            <section className="wrapper">
                <div className="product__background"><Image src={productBackground} alt="Illustration fond page produit"></Image></div>
                <section className="section-product">
                    <div className="container-row">
                        <div className="product__left">
                            <h1><span className="span-font">Chaise N°1</span></h1>
                            <Image src={productImage} alt="Chaise reborn 1"></Image>
                        </div>
                        <div className="product__right">
                            <p className='product__right-sub'>Chaise <span>//</span> fiche produit</p>
                            <div className='product__right-pre'>
                                <p>Description</p>
                                <p>50€</p>
                            </div>
                            <p>Notre chaise numéro 1, avec son assise ultra confortable et ses pieds aux rondeurs familières, viendra satisfaire les petits et les grands, humains comme animaux alors gare aux poils !</p>
                            <p className='product__right-ps'>PS : le paiement se fait directement à l’atelier pour que notre site soit le plus léger possible (#environmentfriendly) et histoire qu’on se fasse un petit coucou : chez nous, on privilégie le lien social !
                                Vous pouvez réserver ce produit en cliquant sur le petit bouton juste en dessous.
                            </p>
                            <div><Link href="/concept" className="btn product-btn">
                                Reserver
                            </Link></div>
                        </div>
                    </div>
                </section>
            </section>
            <Footer></Footer>
        </>
    );
}

export default chaise1