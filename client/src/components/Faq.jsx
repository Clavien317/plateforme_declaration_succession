
import { FaPlus, FaMinus } from "react-icons/fa";
import React from "react";
import { Collapse } from "react-collapse";

function Faq({ open, toggle, description, titre, index }) {
  return (
    <div className="faqs">
        <div className="liste flex justify-between items-center cursor-pointer" onClick={() => toggle(index)}>
            <h1 className="text-1xl text-black font-bold">{titre}</h1>
            <div className="text-[30px]">
            {open ? <FaMinus /> : <FaPlus />}
            </div>
        </div>

        <Collapse isOpened={open}>
            <div className="bg-white py-2 px-2 pb-[20px] reponse">
            {description}
            <br />
            <br />
            {
                index+1==2?<button className="btn-faq">Savoir plus</button>:""
            }
            </div>
        </Collapse>
    </div>
  );
}

export default Faq;
