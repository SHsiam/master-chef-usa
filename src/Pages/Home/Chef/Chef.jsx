import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';

const Chef = () => {
    const [chefs, setChef] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChef(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div>
            {
                    chefs.map(chef => <ChefCard key={chef.id}
                    chef={chef}></ChefCard> )
                }

            
        </div>
    );
};

export default Chef;