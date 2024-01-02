import './contact-us.scss';
import GetInTouchImg from '../../assets/images/contact-img.jpg'
export const ContactUs = () => {
    return (
        <div className='contact-us' id='contact'>
            <div className="container">
                <h1>GET IN TOUCH</h1>
                <input type="text" placeholder='Full Name' />
                <br />
                <br />
                <input type="text" placeholder='Email' />
                <br />
                <br />
                <input type="text" placeholder='Phone Number' />
                <br />
                <br />
                <textarea name="" id="" cols="70" rows="5">Message</textarea>
                <br />
                <br />
                <button>SEND</button>
            </div>
            <img src={GetInTouchImg} alt="" />
        </div>
    )
}