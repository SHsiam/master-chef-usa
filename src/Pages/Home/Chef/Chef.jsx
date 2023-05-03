import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';

const Chef = () => {
    const [chef, setChef] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChef(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div>
            {
                    chef.map(bio => <ChefCard key={bio.id}
                    bio={bio}></ChefCard> )
                }

            
        </div>
    );
};

export default Chef;