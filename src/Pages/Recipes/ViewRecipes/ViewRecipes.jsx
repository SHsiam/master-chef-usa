import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AiFillLike } from "react-icons/ai";
import RecipesCard from '../RecipesCard/RecipesCard';


const ViewRecipes = () => {
    const { id } = useParams();
    const chefBio=useLoaderData();
    console.log(chefBio);
    const{name,experience,numRecipes,picture,bio,recipes}=chefBio;
    return (
        <div>
        <div className="card bg-base-200 bg-light px-8 py-8" >
            <div className="row g-0">
                <div className="col-md-6">
                    <img src={picture} className="img-fluid" alt="pancakes" />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{bio}</p>
                        <p className="card-text">Years of Experience: {experience}</p>
                        <p className="card-text">Number of Recipes: {numRecipes}</p>
                        <div className="rating gap-1">
                            <p className='d-flex'>
                                <span className='fw-bold px-1'>100</span>  <AiFillLike />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {
            recipes.map(recipe=><RecipesCard recipe={recipe}></RecipesCard>)
        }
        </div>
    );
};

export default ViewRecipes;