import React from 'react';
import './footer.css';

function Footer(props){
    return(
        <div className='container footer'>
            <div className='row align-content-center justify-content-center footerRow'>
                <div className='col-3' style={{padding: '0px'}}>
                    <a className="btn btn-social-icon btn-facebook link" href="https://www.facebook.com/3080District"><i className="fa fa-facebook"></i></a>
                    <a className="btn btn-social-icon btn-linkedin link" href="https://www.linkedin.com/company/rotaract-district-organisation-3080/"><i className="fa fa-linkedin"></i></a>
                    <a className="btn btn-social-icon btn-instagram link" href="https://www.instagram.com/3080district/"><i className="fa fa-instagram"></i></a>
                    <a className="btn btn-social-icon btn-youtube link" href="https://www.youtube.com/channel/UCqO2moTEzymby9fCH2gIy7w"><i className="fa fa-youtube"></i></a>
                </div>
            </div>
            
        </div>
        )
}

export default Footer;
