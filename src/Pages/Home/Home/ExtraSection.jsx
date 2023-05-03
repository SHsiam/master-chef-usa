import React from 'react';
import pancakes from '../../../assets/pancakes.jpg'
import burger from '../../../assets/burger.jpg'
import pasta from '../../../assets/pasta.jpg'
import pizza from '../../../assets/pizza.jpg'

const ExtraSection = () => {
  return (
    <div>
      <div className="card bg-base-200 bg-light px-8 py-8" >
        <div className="row g-0">
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">Over 250 Delicious & Tasty Recipes</h5>
              <p className="card-text">Having a variety of delicious and tasty recipes at your disposal is a great way to elevate your cooking game and impress your family and friends. With over 250 recipes to choose from, you'll have endless possibilities for creating mouthwatering meals that are sure to satisfy your taste buds.</p>
              <button className="btn btn-outline-warning">Let’s Order Now</button>
            </div>
          </div>
          <div className="col-md-6">
            <img src={pancakes} className="img-fluid" alt="pancakes" />
          </div>
        </div>
      </div>

      <div className="card-group">
        <div className="card bg-light px-8 py-8">
          <img src={burger} className="card-img-top rounded" alt="burger" />
          <div className="card-body">
            <h5 className="card-title">Big Gun Bar and Burger</h5>
            <div className="rating">
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
            </div>
            <h6 className="card-text">$20.00</h6>
          </div>
        </div>
        <div className="card bg-light px-8 py-8">
          <img src={pizza} className="card-img-top rounded" alt="burger" />
          <div className="card-body">
            <h5 className="card-title">Chicago Thin Crust Pizza</h5>
            <div className="rating">
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
            </div>
            <h6 className="card-text">$30.00</h6>
          </div>
        </div>
        <div className="card bg-light px-8 py-8">
          <img src={pasta} className="card-img-top rounded" alt="burger" />
          <div className="card-body">
            <h5 className="card-title">Penne alla Vodka</h5>
            <div className="rating">
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
            </div>
            <h6 className="card-text">$40.00</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;