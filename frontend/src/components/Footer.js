import React from 'react';
import logo from './etsyFooter.png'
import styled from 'styled-components';

function Footer()
{
    return(
        <FooterContainer className="main-footer">
            <div className="container">
                <div>
                    <img src={logo} height={800} width={1296}/>
                </div>
                <div className="footer-middle">
                <div className="row">

                    <div className="col-md-3 col-sm-6">
                        <h4>shop</h4>
                        <ul className="list-unstyled"> 
                            <li> <a>Gift Cards</a></li>
                            <li> <a>Sitemap</a></li>
                            <li> <a>Sunny blog</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <h4>Sell</h4>
                        <ul className="list-unstyled">
                            <li> <a>Sell on Etsy</a></li>
                            <li> <a>Teams</a></li>
                            <li> <a>Forums</a></li>
                            <li> <a>Affiliates</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <h4>About</h4>
                        <ul className="list-unstyled">
                            <li> <a>Etsy, Inc</a></li>
                            <li> <a>Policies</a></li>
                            <li> <a>Investors</a></li>
                            <li> <a>Careers</a></li>
                            <li> <a>Press</a></li>
                            <li> <a>Impact</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <h4>Help</h4>
                        <ul className="list-unstyled">
                            <li> <a>Help center</a></li>
                            <li> <a>Trust & Safety</a></li>
                            <li> <a>Privacy Settings</a></li>
                        </ul>
                    </div>
                    
                </div>
            </div>
            </div>
        </FooterContainer>
    );
}
export default Footer;

const FooterContainer = styled.footer`
.footer-middle
{
    background : #2a4b7d;
    color : white;
    padding-left : 20px;
    padding-top: 10px;
}
`
;