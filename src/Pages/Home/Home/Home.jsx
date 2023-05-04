import React, {Suspense,lazy} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import restaurant0 from '../../../assets/restaurant0.jpg';
import restaurant1 from '../../../assets/restaurant1.jpg';
import restaurant2 from '../../../assets/restaurant2.jpg';
import ExtraSection from './ExtraSection';
const Chef = lazy(()=> import ('../Chef/Chef'));



const Home = () => {
    return (
        <div>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={restaurant0}
          alt="First slide"
        />
        <Carousel.Caption className='bg-dark'>
          <h3>For the love of delicious food</h3>
          <p>The benefits of indulging in your favorite foods in moderation.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={restaurant1}
          alt="Second slide"
        />

        <Carousel.Caption className='bg-dark'>
          <h3>Life is dull without good food</h3>
          <p>Creative ways to elevate your food experience and add more joy to your life.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={restaurant2}
          alt="Third slide"
        />

        <Carousel.Caption className='bg-dark'>
          <h3>Good food. Good mood</h3>
          <p>
          Mindful eating practices for enhancing the mood-boosting effects of food.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    <Suspense fallback={<h1>Please Wait....</h1>}>
    <Chef></Chef>
    </Suspense>
  <ExtraSection></ExtraSection>
 
    </div>
  );
};

export default Home;