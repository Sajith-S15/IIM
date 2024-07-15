import React from 'react';
import './assets/styles/programmesection.css'; // Create a new CSS file for this component

const ProgrammesSection = () => {
  return (
    <div className="programmes-container">
        <div className='programme'>
      <h1 id='academic-programme'>Academic Programmes</h1> <br />
      <h3 id='post-graduate'>Post Graduate Programmes</h3>
      </div>
      <div className="card-container">
        <div className="card">
          <div className="card-content">
            <h3>PGPM(MBA)</h3>
            <p>The two-year full-time Post Graduate Programme in Management is the flagship programme of IIMT and it's objective is to develop young women and men into competent professional managers.</p>
          </div>
          <button className="plus-button">+</button>
        </div>
        <div className="card">
          <div className="card-content">
            <h3>PGPM HR(MBA HR)</h3>
            <p>Post-Graduate Programme in Management-Human Resources is a two-year full-time programme launched in 2020 and is the first domain-specific programme of IIMT.</p>
          </div>
          <button className="plus-button">+</button>
        </div>
        <div className="card">
          <div className="card-content">
            <h3>PGPBM(MBA for Working Executives)</h3>
            <p>The Post Graduate Programme in Business Management at the Chennai Campus is to groom working executives who aspire to move into senior leadership roles.</p>
          </div>
          <button className="plus-button">+</button>
        </div>
        {/* <div className="card">
          <div className="card-content">
            <h3>Ph.D(Doctoral Programme)</h3>
            <p>The Doctoral Programme in Management is a full-time residential doctoral programme that offers students opportunities for research in different areas of Management.</p>
          </div>
          <button className="plus-button">+</button>
        </div> */}
      </div>
    </div>
  );
};

export default ProgrammesSection;
