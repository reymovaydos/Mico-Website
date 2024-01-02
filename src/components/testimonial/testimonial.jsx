import './testimonial.scss'
import Tirnaqsha from '../../assets/images/tirnaqsha.png'
export const Testimonial = () => {
    return (
        <div className='testimonial' id='testimonial'>
            <div className="box">
                <div className="text-inner">
                    <h1>TESTIMONIAL</h1>
                </div>
                <div className='contents'>
                    <div className="symbol">
                        <img src={Tirnaqsha} alt="" />
                    </div>
                    <h3>Morijorch</h3>
                    <h4>Default model text</h4>
                    <p>Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy, editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various</p>
                </div>
            </div>
        </div>
    )
}