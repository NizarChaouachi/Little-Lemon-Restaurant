import CallToAction from './CallToAction';
import CustomersSay from './CustomerSays';
import BookingPage from './BookingPage';
import Specials from './Specials';
import About from './About';
function Homepage() {
    return (<>
            <About />
            <CallToAction />
            <CustomersSay />
            <Specials />
            <BookingPage />
            </>

    );
}

export default Homepage;