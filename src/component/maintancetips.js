import React, { useState } from 'react';
import '../css/maintance.css';

const MaintanceTips = () => {
  const bikeModels = [
    {
      model: 'Classic 350',
      tips: [
        'Change engine oil every 3000-5000 km.',
        'Check and clean the air filter every 2000 km.',
        'Ensure chain tension is optimal and lubricated.',
      ],
    },
    {
      model: 'Bullet 500',
      tips: [
        'Inspect brakes and replace pads if necessary.',
        'Keep the battery fully charged, especially during winters.',
        'Check tire pressure weekly for better mileage and safety.',
      ],
    },
    {
      model: 'Interceptor 650',
      tips: [
        'Adjust valve clearance every 10,000 km.',
        'Replace spark plugs every 10,000 km.',
        'Inspect and adjust clutch cables regularly.',
      ],
    },
    {
      model: 'Himalayan',
      tips: [
        'Lubricate the suspension system for smooth off-road performance.',
        'Clean and adjust the carburetor periodically.',
        'Check the fuel filter and replace if clogged.',
      ],
    },
    {
      model: 'Meteor 350',
      tips: [
        'Check the throttle response and adjust if necessary.',
        'Keep an eye on the rear suspension preload settings.',
        'Clean the exhaust system regularly to prevent rust.',
      ],
    },
    {
      model: 'Scram 411',
      tips: [
        'Ensure the engine is properly warmed up before long rides.',
        'Check for loose bolts and nuts after off-road trips.',
        'Monitor brake pad wear and replace when needed.',
      ],
    },
    {
      model: 'Super Meteor 650',
      tips: [
        'Check and maintain fork oil levels for smooth handling.',
        'Ensure the tires have proper tread depth and pressure.',
        'Inspect the electrical system and wiring connections.',
      ],
    },
    {
      model: 'Hunter 350',
      tips: [
        'Check the chain slack and adjust it for optimal performance.',
        'Regularly clean and wax the bike frame to prevent corrosion.',
        'Inspect the instrument cluster for any warning signs.',
      ],
    },
  ];

  const [userTips, setUserTips] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', bikeModel: '', tip: '' });
  const [charCount, setCharCount] = useState(300);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'tip' && value.length <= 300) {
      setCharCount(300 - value.length);
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.tip.trim() && formData.tip.length <= 300) {
      setUserTips([...userTips, { ...formData }]);
      setFormData({ name: '', email: '', bikeModel: '', tip: '' });
      setCharCount(300);
    }
  };

  return (
    <div className="maintenance-page">
      <h1 className="main-heading">Royal Enfield Maintenance Tips</h1>
      <p className="intro-paragraph">Proper maintenance of your Royal Enfield bike ensures longevity and top-notch performance. Explore tips for all models below:</p>
      {bikeModels.map((bike, index) => (
        <div className="bike-section" key={index}>
          <h2 className="bike-model">{bike.model}</h2>
          <ul className="tips-list">
            {bike.tips.map((tip, idx) => (
              <li className="tip-item" key={idx}>{tip}</li>
            ))}
          </ul>
        </div>
      ))}

      <div className="feedback-section">
        <h3 className="feedback-heading">Share Your Maintenance Tips</h3>
        <form className="feedback-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} />
          <input type="text" name="bikeModel" placeholder="Bike Model" value={formData.bikeModel} onChange={handleInputChange} />
          <textarea name="tip" placeholder="Share your tip" value={formData.tip} onChange={handleInputChange}></textarea>
          <span>{charCount} characters remaining</span>
          <button type="submit" disabled={!formData.tip.trim() || formData.tip.length > 300}>Submit</button>
        </form>
      </div>

      <div className="user-tips-section">
        <h3>Tips Shared by Users</h3>
        {userTips.length > 0 ? (
          userTips.map((userTip, idx) => (
            <div className="user-tip" key={idx}>
              <h4>Name:{userTip.name} </h4>
              <h4>Bike Model:({userTip.bikeModel})</h4>
              <h4> Tips:{userTip.tip}</h4>
            </div>
          ))
        ) : (
          <p>No tips shared yet. Be the first to share!</p>
        )}
      </div>
    </div>
  );
};

export default MaintanceTips;
