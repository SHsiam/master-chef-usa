import React from 'react';
import error from '../../assets/error.png'

const ErrorPage = () => {
    return (
            <div>
                <img src={error}/>
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>

    );
};

export default ErrorPage;