
import { useEffect } from 'react';
import Hero from '../components/Hero';
import LawerContainer from '../components/LawerContainer';
import { useLoaderData, useLocation } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData();
    const location = useLocation();


    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const scrollId = params.get('scroll');
        if (scrollId) {
            const element = document.getElementById(scrollId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location])

    return (
        <div>
            <Hero />
            <LawerContainer data={data} />
        </div>
    );
};

export default Home;
