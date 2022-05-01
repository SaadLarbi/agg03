import React from 'react'
import styled from 'styled-components';

function Footer() {
  return (
    <FooterContainer className="main-footer bg-secondary d-flex justify-content-center text-justify mt-2">
        <div className="footer-middle">
        <div className="container text-center">
            <a href="https://wa.me/212667563222?text=Bonjour"><i class="fa-brands fa-whatsapp-square fa-2x"></i></a>&nbsp;&nbsp;
            <a href="https://twitter.com"><i class="fa-brands fa-twitter-square fa-2x"></i></a>&nbsp;&nbsp;
            <a href="https://facebook.com"><i class="fa-brands fa-facebook-square fa-2x"></i></a>&nbsp;&nbsp;
            <a href="https://youtube.com"><i class="fa-brands fa-youtube-square fa-2x"></i></a>&nbsp;&nbsp;
            <a href="https://instagram.com"><i class="fa-brands fa-instagram-square fa-2x"></i></a>&nbsp;&nbsp;
            <a href="https://gmail.com"><i class="fa-solid fa-square-envelope fa-2x"></i></a>&nbsp;&nbsp;
            <a href="https://github.com"><i class="fa-brands fa-github-square fa-2x"></i></a>
            <div className="footer-bottom ">
                <p className="text-xs-center">&copy;{new Date().getFullYear()} Slamtec - All Rights Reserved</p>
            </div>
        </div>
    </div>
    </FooterContainer>
  )
}
export default Footer;

const FooterContainer = styled.footer`
.footer-middle{
    background-color : var(--mainDark);
    padding-top: 1rem;
    color:var(--mainWhite);
}
ul li a {
    color: var(--mainGrey);
    text-decoration:none;
}
ul li a:hover {
    color: var(--mainLightGrey);
}
a i {
    color: var(--mainLightGrey);
}
a i:hover {
    color: var(--mainGrey);
}
`;