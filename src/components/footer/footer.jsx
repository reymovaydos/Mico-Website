import './footer.scss';
import FooterLogo from '../../assets/images/logo.png';
import Post1 from '../../assets/images/post1.jpg'
import Post2 from '../../assets/images/post2.jpg'
import Post3 from '../../assets/images/post3.jpg'
import Post4 from '../../assets/images/post4.png'
import { Facebook, Call, Twitter, LinkedIn, Instagram, Mail, LocationOn } from '@mui/icons-material';
export const Footer = () => {
    return (
        <div className="footer">
            <div className='footer-inner'>
                <div className="footer-logo">
                    <img src={FooterLogo} alt="" />
                </div>
                <div className="info_section">
                    <div className="info_form">
                        <form action="#" method='post'>
                            <input type="text" placeholder='Your Email'/>
                            <button>SUBSCRIBE</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="footer_info">
                <div className="footer_div">
                <div className="list_item">
                    <div className="adress">
                        <div className="bg"></div>
                        <h2>ADRESS</h2>
                    </div>
                    <div className="location">
                        <LocationOn />
                        <p>Location</p>
                    </div>
                    <div className="calling">
                        <Call />
                        <p>Call +01 1234567890</p>
                    </div>
                    <div className='message'>
                        <Mail />
                        <p>demo@gmail.com</p>
                    </div>
                    <div className="social-networks">
                        <Facebook />
                        <Twitter />
                        <LinkedIn />
                        <Instagram />
                    </div>
                </div>
                <div className="list_item">
                    <div className="useful-link">
                        <div className="bg"></div>
                        <h2>USEFUL LINK</h2>
                    </div>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Treatment</a></li>
                        <li><a href="">Doctors</a></li>
                        <li><a href="">Testimonial</a></li>
                        <li><a href="">Contact us</a></li>
                    </ul>
                </div>
                <div className="list_item">
                    <div className="latest-post">
                        <div className="bg"></div>
                        <h2>LATEST POST</h2>
                    </div>
                    <div className="footer-images">
                        <img src={Post1} alt="" />
                        <p>Normal destribution</p>
                    </div>
                    <div className="footer-images">
                        <img src={Post2} alt="" />
                        <p>Normal destribution</p>
                    </div>
                </div>
                <div className="list_item">
                    <div className="News">
                        <div className="bg"></div>
                        <h2>NEWS</h2>
                    </div>
                    <div className="footer-images">
                        <img src={Post3} alt="" />
                        <p>Normal destribution</p>
                    </div>
                    <div className="footer-images">
                        <img src={Post4} alt="" />
                        <p>Normal destribution</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="footer-line"></div>
            <h4 className='reserved'>2023 All Rights Reserved By Free Html Templates</h4>
        </div>
    )
}