import React from 'react'

function Footer() {
  return (
    <div className="main-footer bg-secondary">
        <div className="container">
            <div className="row">
                {/* Column 1  */}
                <div className="col-md-3 col-sm-6">
                    <h4>Contact</h4>
                    <ul className="list-unstyled">
                    <li>30, Av Med 5 Magasin 33, Tabriquet</li>
                    <li>contact@slamtec.ma</li>
                    <li>05 37 85 06 78</li>
                    <li>06 10 01 10 01</li> 
                    </ul>
                </div>
                {/* Column 2  */}
                <div className="col-md-3 col-sm-6">
                    <h4>Qui sommes Nous</h4>
                    <ul className="list-unstyled">
                    <li>Slamtec en Bref</li>
                    <li>Nos Produits</li>
                    <li>Nos Services</li>
                    <li>Nos Références</li> 
                    </ul>
                </div>
                {/* Column 3  */}
                <div className="col-md-3 col-sm-6">
                    <h4>Informations Utiles</h4>
                    <ul className="list-unstyled">
                    <li>Documentation</li>
                    <li>Applications Mobiles</li>
                    <li>FAQ</li>
                    <li>Démarrage Rapide</li> 
                    </ul>
                </div>
                {/* Column 4  */}
                <div className="col-md-3 col-sm-6">
                    <h4>Follow Us</h4>
                    <ul className="list-unstyled">
                    <li>Twitter</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Youtube</li> 
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="text-xs-center">
                    &copy;{new Date().getFullYear()} Slamtec - All Rights Reserved
                </p>
            </div>
        </div>
    </div>
  )
}
export default Footer;