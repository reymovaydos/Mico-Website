import { Navbar, Banner, BookAppoinment, AboutHospital, HospitalTreatment, Testimonial, OurDoctors, ContactUs, Footer} from '../../components'
export const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Banner />
            <BookAppoinment />
            <AboutHospital />
            <HospitalTreatment />
            <OurDoctors />
            <Testimonial />
            <ContactUs />
            <Footer />
        </div>
    )
}