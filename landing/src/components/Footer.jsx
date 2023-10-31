import Logo from '../assets/logo.svg';
import { BsTwitter } from 'react-icons/bs';
import { SiLinkedin } from 'react-icons/si';
import { BsYoutube } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <div className="footer-section-one">
                <div>
                    <img src={Logo} alt="" />
                </div>
                <div className="footer-icons">
                    <BsTwitter/>
                    <SiLinkedin/>
                    <BsYoutube/>
                    <FaFacebookF/>
                </div>
            </div>
            <div className="footer-section-two">
                <div className="footer-section-columns">
                    <span>Quality</span>
                    <span>Help</span>
                    <span>Share</span>
                    <span>Carrers</span>
                    <span>Testimonials</span>
                    <span>Work</span>
                </div>
                <div className="footer-section-columns">
                    <span>3436-3544-5555</span>
                    <span>Hello@food.com</span>
                    <span>Press@food.com</span>
                    <span>Contact@food.com</span>
                </div>
                <div className="footer-section-columns">
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
