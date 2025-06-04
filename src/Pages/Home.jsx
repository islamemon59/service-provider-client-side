import Banner from '../Components/Banner';
import { AuthContext } from '../Context/AuthContext';

const Home = () => {
    return (
        <div>
            <div className='-z-10'> 
                <Banner></Banner>
            </div>
            This is home
        </div>
    );
};

export default Home;