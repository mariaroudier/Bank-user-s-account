import React from 'react';
import './feature.css'


function Feature({title, description, picture}) {

      return (
            <div className="feature-item" key={`feature ${title}`}>
                  <img src={require(`${picture}`)} alt="Chat Icon" className="feature-icon" key={picture}/>
                  <h3 className="feature-item-title" key={title}>{title}</h3>
                  <p className='feature-item-text' key={description}>{description}</p>
            </div>

      )
}

export default Feature;