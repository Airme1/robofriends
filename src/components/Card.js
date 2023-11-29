import React from 'react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';

const Card = ({name, email, id}) => {
    return(
        <div className='tc bg-orange dib br4 pa2 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt="robots_pictures" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;