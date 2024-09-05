import React, { useEffect, useState } from 'react'
import DefaultLayout from '../layout/DefaultLayout'
import Faqs from '../components/Faq'
import liste from "../lib/faq";



function Faq() {

  const [faq, setFaq] = useState([]);
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  useEffect(() => {
    setFaq(liste);
  }, []);

  return (
    <div>
        <DefaultLayout>
            {/* <h1  className='text-center text-3xl font-bold'>FAQ</h1> */}
            <div className="faq">
              <div className="detail">
                <div className="container">
                  {faq.map((item, index) => (
                    <Faqs
                      key={item.id}
                      index={index}
                      open={open === index}
                      titre={item.titre}
                      description={item.description}
                      toggle={toggle}
                    />
                  ))}
                </div>
              <div className="image4">
                <img src="/assets/IMAGE-TESTAMENTOOO-1024x683.png.webp" alt="" width={400} height={300} />
              </div>
            </div>
          </div>
        </DefaultLayout>
    </div>
  )
}

export default Faq