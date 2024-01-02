import './hospital-treatment.scss';
import Nephrologist from '../../assets/images/t1.png'
import Eye from '../../assets/images/t2.png'
import Pediatrian from '../../assets/images/t3.png'
import Parental from '../../assets/images/t4.png';
export const HospitalTreatment = () => {
    return (
        <div className='hospital-treatment' id='treatment'>
            <div className="text">
                <h1>Hospital <span> Treatment</span></h1>
            </div>
            <div className="grid">
                <div className="medicine-instruments">
                    <img src={Nephrologist} alt="" />
                    <h2>Nephrologist Care</h2>
                    <p>alteration in some form, by injected humour, or randomised words which don't look even slightly e sure there isn't anything</p>
                    <a href="">READ MORE</a>
                </div>
                <div className="medicine-instruments">
                    <img src={Eye} alt="" />
                    <h2>Eye Care</h2>
                    <p>alteration in some form, by injected humour, or randomised words which don't look even slightly e sure there isn't anything</p>
                    <a href="">READ MORE</a>
                </div>
                <div className="medicine-instruments">
                    <img src={Pediatrian} alt="" />
                    <h2>Pediatrician Clinic</h2>
                    <p>alteration in some form, by injected humour, or randomised words which don't look even slightly e sure there isn't anything</p>
                    <a href="">READ MORE</a>
                </div>
                <div className="medicine-instruments">
                    <img src={Parental} alt="" />
                    <h2>Parental Care</h2>
                    <p>alteration in some form, by injected humour, or randomised words which don't look even slightly e sure there isn't anything</p>
                    <a href="">READ MORE</a>
                </div>
            </div>
        </div>
    )
}