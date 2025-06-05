import Banner from '../Components/Banner';
import useTitle from '../Hooks/useTitle';

const Home = () => {
useTitle("Home")
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