import React from 'react'
import { IoMdHome } from "react-icons/io";
import { FaSignInAlt } from "react-icons/fa";
import { FaListUl } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa";

function Nav() {
  return (
    <>
        <div className="navbars">
            <div className="container">
                <nav>
                    <ul>
                        <li><a href="/admin"><span className="icon"><IoMdHome /></span> Tableau de bord</a></li>
                        <li><a href="/admin/liste/utilisateur"><span className="icon"><FaSignInAlt /></span> Liste Utilisateur</a></li>
                        <li><a href="/admin/liste/declaration"><span className="icon"><FaListUl /></span> Liste des declaration</a></li>
                        <li><a href="/admin/liste/testament"><span className="icon"><FaListUl /></span> Testament</a></li>
                        <li><a href=""><span className="icon"><FaQuestion /></span>Deconnexion</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </>
  )
}

export default Nav