import React from 'react';
import './assets/styles/recruiter.css'

const RecruitersSection = () => {
  // Example array of recruiter logos (replace with your own URLs)
  const recruiters = [
    'https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png',
    'https://www.tailorbrands.com/wp-content/uploads/2021/01/apple_logo_1988.jpg',
    'https://blogs.microsoft.com/wp-content/uploads/prod/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg',
    'https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg',
    'https://media.designrush.com/inspiration_images/345908/conversions/walmart_1-mobile.jpg',
    'https://logos-world.net/wp-content/uploads/2021/08/Deloitte-Logo.png',
    'https://upload.wikimedia.org/wikipedia/commons/9/9d/KPMG_logo.svg',
    'https://1000logos.net/wp-content/uploads/2016/10/Bank-of-America-Emblem.png',
    'https://1000logos.net/wp-content/uploads/2021/04/Adobe-logo.png',
    // Add more URLs as needed
  ];

  return (
    <div className="recruiters-container">
      <h2>Top Recruiters</h2>
      <div className="recruiters-list">
        {recruiters.map((recruiter, index) => (
          <img key={index} src={recruiter} alt={`Recruiter ${index + 1}`} className="recruiter-logo" />
        ))}
      </div>
    </div>
  );
};

export default RecruitersSection;
