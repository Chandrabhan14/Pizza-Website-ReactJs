import React from 'react';
import MultiplePizzas from '../assests/multiplePizzas.jpeg';
import '../styles/About.css';

function About() {
  return (
    <div className="about">
        <div className="aboutTop"  style={{ backgroundImage: `url(${MultiplePizzas})` }}></div>
        <div className="aboutBottom">
            <h1>ABOUT US</h1>
            <p>-RANDOM WORDS AS SAMPLES-Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic dicta quod maxime unde, sapiente repellendus illo fugit reprehenderit culpa odio sint eos adipisci voluptates? Quod culpa sunt molestiae iste magnam, amet, tempora, sint quas adipisci commodi eligendi placeat maiores. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde sapiente tempore distinctio labore, vitae saepe numquam adipisci optio quis ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa harum tempore culpa consectetur debitis, hic quia fugiat eos cupiditate quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi neque tempora, voluptates esse unde accusamus reiciendis eos officia iste non deleniti laborum itaque corrupti?    consectetur molestias fuga blanditiis quidem sit, cum vitae libero? </p>
        </div>
      
    </div>
  )
}

export default About
