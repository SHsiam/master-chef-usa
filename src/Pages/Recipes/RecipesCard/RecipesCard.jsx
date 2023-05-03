import React from 'react';
import { AiFillHeart } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const RecipesCard = ({recipe}) => {
    const{name,cooking_method,image,rating,items}=recipe;
    const notify = () => toast("Wow I like it!");
    return (
        <div>
            
            <div className="card bg-base-200 bg-light px-8 py-8" >
        <div className="row g-0">
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text"><span className='fw-bold'>Cooking Method:</span> {cooking_method}</p>
              <p className="card-text"><span className='fw-bold'>Ingredients:</span> {items}</p>
              <div className="rating">
                <h6 className='pe-2'>Rating: {rating}</h6>
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
            </div>
                <AiFillHeart  onClick={notify}/>
              <ToastContainer />
            </div>
          </div>
          <div className="col-md-6">
            <img src={image} className="img-fluid" alt="pancakes" />
          </div>
        </div>
      </div>
        </div>
    );
};

export default RecipesCard;