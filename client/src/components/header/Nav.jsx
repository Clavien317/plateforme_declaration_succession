import React, { useEffect } from 'react'
import { IoMdHome } from "react-icons/io";
import { FaSignInAlt } from "react-icons/fa";
import { FaListUl } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Nav() {

    const token = localStorage.getItem("token-succession-user")
    console.log(token);

    const router = useNavigate()

    useEffect(() => {
        if (!token) {
            router('/');
        }
    }, [token, router]);
    
  return (
    <>
        <div className="navbars">
            <div className="container">
                <nav>
                    <ul>
                        <li><a href="/dashboard"><span className="icon"><IoMdHome /></span> Tableau de bord</a></li>
                        <li><a href="/profil"><span className="icon"><FaSignInAlt /></span> Profil</a></li>
                        <li><a href="/declaration"><span className="icon"><FaListUl /></span> Mes declaration</a></li>
                        <li><a href="/declaration/brouillon"><span className="icon"><FaListUl /></span> Brouillon</a></li>
                        <li><a href="/suivi"><span className="icon"><FaListUl /></span> Suivi des declaration</a></li>
                        <li><a href=""><span className="icon"><FaQuestion /></span>Deconnexion</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </>
  )
}

export default Nav