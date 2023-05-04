import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';

const Chef = () => {
    const [chefs, setChef] = useState([]);

    useEffect(() => {
        fetch('https://master-chef-usa-server-mdshiam4-gmailcom.vercel.app/chef')
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