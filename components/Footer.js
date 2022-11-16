import { useAppContext } from '../AppContext';
import phoneIcone from '../public/assets/icons/reborn-telephone.svg'
import adressIcone from '../public/assets/icons/reborn-adresse.svg'
import Image from 'next/image'

export default function Footer() {
  const { i18n } = useAppContext();

  const date = new Date();

  return (
    <>
      <footer>
        <div className='footer_infos'>
          <div className='footer_info'>
            <Image src={adressIcone} alt='Icône localisation'></Image>
            <a href='https://goo.gl/maps/gh4vPVGSrjoNJNnn6' target='_blank'>3 rue Surcouf<br></br>33000 Bordeaux</a>
          </div>
          <div className='footer_info'>
            <Image src={phoneIcone} alt='Icône téléphone'></Image>
            <div>
              <a href="tel:+33597453533">05 97 45 35 33</a>
              <a href="tel:+33679545344">06 79 54 53 44</a>
            </div>
          </div>
        </div>
        <div className='credits'>
          <p>2022 - REBORN - TOUS DROITS RESERVES</p>
          <a href='/mentions-legales'>Mentions légales</a>
          <a href='/politique-de-confidentialite'>Politique de confiendtialité</a>
        </div>
      </footer>
    </>
  )
}
