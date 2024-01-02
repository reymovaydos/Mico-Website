import './about-hospital.scss';
import AboutHospitalImg from '../../assets/images/about-img.jpg'
export const AboutHospital = () => {
    return (
        <div className='about-hospital' id='about'>
            <img src={AboutHospitalImg} alt="" />
            <div className="item_content">
                <h1>About<span> Hospital</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam quod distinctio, fugiat sequi soluta illo quisquam possimus itaque, fuga, culpa sunt blanditiis recusandae aliquam sit tenetur voluptatibus alias mollitia eveniet assumenda tempore vero saepe nostrum voluptas earum! Corrupti similique laborum modi, consequatur, totam soluta accusantium cupiditate deleniti quisquam itaque neque.</p>
                <button>Read More</button>
            </div>
        </div>
    )
}