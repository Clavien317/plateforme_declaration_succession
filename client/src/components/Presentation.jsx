import React, { useEffect } from 'react'

function Presentation() {

  return (
    <div>
        <div className="presentation">
            <div className="container">

                <div className="image1">
                    <img src="/assets/IMAGE-TESTAMENTOOO-1024x683.png.webp" alt="" />
                </div>

                <div className="txt1">
                    <h1 className='text-3xl font-bold mb-3 my-9'>Déclarez votre succession en toute simplicité</h1>
                    <p>
                        La gestion d'une succession peut être complexe, mais avec notre plateforme, nous vous guidons à chaque étape du processus. 
                        Que ce soit pour des démarches administratives, la répartition des biens ou le suivi légal, nous sommes là pour vous aider à gérer votre succession de manière claire et sécurisée. 
                        Nos experts sont à votre disposition pour vous fournir des conseils personnalisés, adaptés à vos besoins et à votre situation.
                        Profitez d'une assistance complète et d'un accompagnement professionnel pour une transmission sereine de votre patrimoine.
                    </p>
                    <button className="btn-primary mt-4">En savoir plus</button>
                </div>
            </div>
        </div>



        <div className="professionnel">
            <div className="container">
                <div className="projet">
                    <div className='nbre'>+ 20</div>
                    <br />
                    <h1>Déclarations en toute confiance</h1>
                    <br />
                    <p>
                        Notre plateforme est conçue pour assurer la robustesse et la fiabilité de vos déclarations. 
                        Avec plus de 20 déclarations traitées, nous garantissons un service accessible à tous, 
                        où chaque utilisateur peut naviguer facilement, quelle que soit sa compétence technique.
                        La sécurité de vos données est notre priorité absolue. 
                        Grâce à des protocoles de sécurité avancés, nous protégeons vos informations personnelles et garantissons la confidentialité de chaque déclaration. 
                        Faites confiance à notre expertise pour gérer vos déclarations de succession en toute sérénité.
                    </p>
                </div>

                <div className="projet">
                    <div className='nbre'>+ 10</div>
                    <br />
                    <h1>Nos Partenaires de Confiance</h1>
                    <br />
                    <p>
                        Nous collaborons avec plus de 10 partenaires stratégiques, chacun apportant son expertise 
                        pour enrichir notre plateforme de déclaration de succession. 
                        Ensemble, nous visons à offrir un service de qualité supérieure, en assurant une transparence totale 
                        et un soutien optimal à nos utilisateurs. 
                        Nos partenaires partagent notre engagement envers l'accessibilité et la sécurité, 
                        garantissant ainsi que chaque déclaration soit traitée avec le plus grand soin. 
                        Ensemble, nous transformons le processus de déclaration de succession en une expérience fluide et fiable.
                    </p>
                </div>


                <div className="projet">
                    <div className='nbre'>+ 100</div>
                    <br />
                    <h1>Nos Utilisateurs Satisfaits</h1>
                    <br />
                    <p>
                        Avec plus de 100 utilisateurs qui nous font confiance, notre plateforme de déclaration de succession 
                        est reconnue pour sa convivialité et son efficacité. 
                        Chaque retour d'expérience est précieux et nous aide à améliorer constamment nos services. 
                        Nous nous engageons à fournir un accompagnement personnalisé, en veillant à ce que chaque utilisateur se sente soutenu 
                        tout au long du processus de déclaration. 
                        Notre objectif est de simplifier la gestion des successions, tout en garantissant la sécurité et la confidentialité de 
                        chaque déclaration. Merci à nos utilisateurs de faire partie de notre aventure !
                    </p>
                </div>
            </div>
        </div>

        <div className="talent">
            <div className="txt">
                <h1>
                    Notre équipe est prête à répondre à vos besoins avec professionnalisme et confiance.
                </h1>
                <br />
                <p>
                    Chez nous, vous trouverez une équipe dédiée et expérimentée, prête à vous accompagner à chaque étape de votre déclaration de succession. 
                    Nous comprenons l'importance de votre situation et nous nous engageons à vous fournir des conseils clairs et précis. 
                    Votre confiance est notre priorité, c'est pourquoi nous mettons un point d'honneur à vous offrir un service réactif et transparent. 
                    N'hésitez pas à nous contacter pour toute question ou besoin d'assistance, nous sommes là pour vous aider ! 
                    <br />
                    <strong>Instructions :</strong> 
                    <ul>
                        <li>Visitez notre FAQ pour des réponses aux questions fréquentes.</li>
                        <li>Utilisez notre chat en ligne pour une assistance immédiate.</li>
                        <li>Planifiez un rendez-vous avec un de nos experts pour un accompagnement personnalisé.</li>
                    </ul>
                </p> 
                <button className="btn-primary">En savoir plus</button>
            </div>
            <div className="image">
                <img src="/Full-Stack-Developer-1.webp" alt="Développeur Full-Stack" />
            </div>
        </div>

        <p  id='service'></p>
        <div className="service">
            <h2>Nos Services</h2>
            <p className='p'>
                Nous offrons une gamme complète de services pour vous accompagner dans le processus de déclaration de succession, 
                en vous assurant un soutien professionnel et personnalisé à chaque étape.
            </p>

            <div className="develop">
                <div className='nbre'>1</div>
                <br />
                <h1>Déclaration de Succession</h1>
                <br />
                <p>
                    Notre service de déclaration de succession vous guide à travers les démarches administratives nécessaires, 
                    garantissant que chaque étape soit prise en charge avec précision et efficacité. 
                    Nous vous assistons dans la préparation des documents requis et assurons un suivi complet jusqu'à la finalisation de votre déclaration.
                </p>
            </div>

            <div className="develop">
                <div className='nbre'>2</div>
                <br />
                <h1>Gestion des Impôts</h1>
                <br />
                <p>
                    Nous proposons des conseils experts pour la gestion des obligations fiscales liées aux successions. 
                    Notre équipe vous aide à comprendre les implications fiscales et à optimiser votre déclaration afin de réduire les charges fiscales, 
                    tout en restant conforme à la législation en vigueur.
                </p>
            </div>

            <div className="develop">
                <div className='nbre'>3</div>
                <br />
                <h1>Conservation de Documents</h1>
                <br />
                <p>
                    Notre service de conservation de documents assure que toutes vos informations et documents relatifs à la succession 
                    soient sauvegardés en toute sécurité. 
                    Vous aurez un accès facile à vos données, garantissant ainsi la tranquillité d'esprit pour toutes vos démarches futures.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Presentation