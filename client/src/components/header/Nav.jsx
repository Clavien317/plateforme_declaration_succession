import React, { useEffect } from 'react';
import { IoMdHome } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa"; 
import { useNavigate } from 'react-router-dom';

function Nav() {

  const token = localStorage.getItem("token-succession-user");
  const router = useNavigate();

  useEffect(() => {
    if (!token) {
      router('/');
    }
  }, [token, router]);

  const deconnect = () => {
    localStorage.removeItem("token-succession-user");
    router('/login');
  }

  return (
    <>
      <div className="navbars">
        <div className="container">
          <nav>
            <ul>
              <li>
                <a href="/dashboard">
                  <span className="icon"><IoMdHome /></span> Tableau de bord
                </a>
              </li>
              <li>
                <a href="/profil">
                  <span className="icon"><FaUserAlt /></span> Profil
                </a>
              </li>
              <li>
                <a href="/declaration">
                  <span className="icon"><FaFileAlt /></span> Mes declarations
                </a>
              </li>
              <li>
                <a href="/declaration/actif">
                  <span className="icon"><FaBoxOpen /></span> Actifs
                </a>
              </li>
              <li>
                <a href="/declaration/heritier">
                  <span className="icon"><FaUsers /></span> Héritier
                </a>
              </li>
              <li>
                <a href="/suivi">
                  <span className="icon"><FaChartLine /></span> Suivi des déclarations
                </a>
              </li>
              <li onClick={deconnect}>
                <a>
                  <span className="icon"><FaSignOutAlt /></span> Déconnexion
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Nav;
