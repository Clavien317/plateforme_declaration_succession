import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Presentation() {

    useEffect(() => {
        AOS.init({
          duration: 1000, 
          easing: 'ease-in-out',
        });
      }, []);

  return (
    <div>
        <div className="presentation">
            <div className="container">

                <div className="image1">
                    <img src="/assets/IMAGE-TESTAMENTOOO-1024x683.png.webp" alt="" />
                </div>

                <div className="txt1">
                    <h1 className='text-3xl font-bold mb-3  my-9'>Declarez chez nous votre succession</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aperiam sunt sapiente cumque modi fuga laborum voluptatibus atque similique voluptas 
                        dolor assumenda ratione dolore, quis adipisci illum iure, itaque, consectetur eum.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aperiam sunt sapiente cumque modi fuga laborum voluptatibus atque similique voluptas 
                        dolor assumenda ratione dolore, quis adipisci illum iure, itaque, consectetur eum.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aperiam sunt sapiente cumque modi fuga laborum voluptatibus atque similique voluptas 
                        dolor assumenda ratione dolore, quis adipisci illum iure, itaque, consectetur eum.
                    </p>
                    <button>Savoir plus</button>
                </div>
            </div>
        </div>



        <div className="professionnel">
            <div className="container">

                <div className="projet" data-aos="zoom-in">
                    <div className='nbre'>+ 20</div>
                    <br />
                    <h1>Déclarations existant</h1>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi
                        amet tempore natus accusamus porro ratione praesentium aut
                        omnis veritatis et recusandae,exercitationem nesciunt rerum minus repellendus at ab. Similique.
                    </p>
                </div>

                <div className="projet" data-aos="zoom-in">
                    <div className='nbre'>+ 3 ans</div>
                    <br />
                    <h1>Experience</h1>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi
                        amet tempore natus accusamus porro ratione praesentium aut
                        omnis veritatis et recusandae,exercitationem nesciunt rerum minus repellendus at ab. Similique.
                    </p>
                </div>

                <div className="partenaire" data-aos="zoom-in">
                    <div className='nbre'>+ 100</div>
                    <br />
                    <h1>Nos utilisateurs</h1>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi
                        amet tempore natus accusamus porro ratione praesentium aut
                        omnis veritatis et recusandae,exercitationem nesciunt rerum minus repellendus at ab. Similique.
                    </p>
                </div>
            </div>
        </div>

        <div className="talent">
            <div className="txt">
            <h1 data-aos="zoom-in">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Error numquam labore eligendi voluptatem hic exercitationem? Excepturi quod doloremque obcaecati,
                voluptates, libero soluta corrupti repellat blanditiis atque fugiat nemo, quibusdam rem?
            </h1>
            <br />
            <p data-aos="zoom-in">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi
                amet tempore natus accusamus porro ratione praesentium aut
                omnis veritatis et recusandae,exercitationem nesciunt rerum minus repellendus at ab. Similique.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi
                amet tempore natus accusamus porro ratione praesentium aut
                omnis veritatis et recusandae,exercitationem nesciunt rerum minus repellendus at ab. Similique.
            </p> 

            <button data-aos="zoom-in">Savoir plus</button>
            </div>
            <div className="image">
                <img src="/Full-Stack-Developer-1.webp" alt="" />
            </div>
        </div>



        <p  id='service'></p>
        <div className="service">
            <h2>Nos services</h2>
            <p className='p' data-aos="zoom-in">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nam necessitatibus quia
            </p>

            <div className="develop">
                <div className='nbre' data-aos="zoom-in">1</div>
                <br />
                <h1>Developpement site web</h1>
                <br />
                <p data-aos="zoom-in">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi
                    amet tempore natus accusamus porro ratione praesentium aut
                    omnis veritatis et recusandae,exercitationem nesciunt rerum minus repellendus at ab. Similique.
                </p>
            </div>

            <div className="develop">
                <div className='nbre'>2</div>
                <br />
                <h1 data-aos="zoom-in">Developpement logiciel</h1>
                <br />
                <p data-aos="zoom-in">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi
                    amet tempore natus accusamus porro ratione praesentium aut
                    omnis veritatis et recusandae,exercitationem nesciunt rerum minus repellendus at ab. Similique.
                </p>
            </div>

            <div className="develop">
                <div className='nbre'>3</div>
                <br />
                <h1 data-aos="zoom-in">Multimedia</h1>
                <br />
                <p data-aos="zoom-in">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi
                    amet tempore natus accusamus porro ratione praesentium aut
                    omnis veritatis et recusandae,exercitationem nesciunt rerum minus repellendus at ab. Similique.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Presentation