import React from 'react';
import {useNavigate} from 'react-router-dom';
import './home.css';
import Feature from '../../Components/Feature/Feature'
import features from '../../Components/Feature/feature-data.json';

function Home() {
  // let navigate = useNavigate()

  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </div>
      </section>
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {
          features.map(el => {
            let icon = `./${el.picture}`
            
            if(el) {
              return (
                  <Feature title={el.title} description={el.description} picture={icon} key={el.title}/>
              )
            } else {
              return ""
            }
          })
        }
      </section>
    </main>
  )
}

export default Home;
