import React from 'react';
import { AiFillLike } from "react-icons/ai";
import { Link } from 'react-router-dom';

const ChefCard = ({chef}) => {
    console.log(chef);
    const{id,name,experience,numRecipes,picture}=chef;
   
    return (
        <div className="card bg-base-200 bg-light px-8 py-8" >
        <div className="row g-0">
          <div className="col-md-6">
            <img src={picture} className="img-fluid" alt="pancakes"/>
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">Years of Experience: {experience}</p>
              <p className="card-text">Number of Recipes: {numRecipes}</p>
              <div className="rating gap-1">
                <p className='d-flex'>
               <span className='fw-bold px-1'>100</span>  <AiFillLike/>
                </p>
  
  
</div>
<Link to={`/chef/${chef.id}`} className='text-black text-decoration-none'>
                
              <button className="btn btn-outline-warning">
              
                View Recipes
                </button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ChefCard;