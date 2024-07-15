import React from 'react';
import './assets/styles/eventsection.css'; // Import the CSS file for this component

const EventsSection = () => {
  return (
    <div className="events-container">
      <div className="events-header">
        <h3 className="header-title">Upcoming Events</h3>
        
      </div>
      <div className="events">
        <div className="event-card">
            <h3>Upcoming Events</h3>
          <h4>PGPBM Admission 2024 - 26</h4>
          <p>MBA Program (PGPBM) at Chennai Campus....</p><br />
         

        </div>
        <div className="event-card">

          <h3>Latest News</h3>
          <h4>Inauguration of the MDP for Junior-Level Managers..</h4>
          <p>EEC Office has conducted the Inauguration of the MDP for Junior-Level Managers</p><br />
          
        </div>
        <div className="event-card">
            <h3>Awards and Achievements</h3>
          <p>IIM Trichy was declared winner in the National Finals of the 17th CFA Institute Research Challenge 2023-24</p>
          
        </div>
        <div className="event-card">
            <h3>Announcements</h3>
          <h4>Recruitment notification for Academic Associate on..</h4>
          <p>Recruitment notification for academic associate on contract basis 2023 </p>
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
