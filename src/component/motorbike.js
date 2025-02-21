// import React from 'react';


// function Motorbikes() {
//     const bikes = [
//         { name: 'Himalayan 450', img: 'Himalaiyan.webp', href: Himalayan450.js },
//         { name: 'Shotgun 650', img: 'shotgun 650.webp' },
//         { name: 'Bullet 350', img: 'bullet 350.jpeg' },
//         { name: 'Super Meteor 650', img: 'super-meteor-650-right-front-three-quarter-2.webp' },
//         { name: 'Hunter 350', img: 'hunter 350.webp' },
//         { name: 'Scram 411', img: 'scram-411.webp' },
//         { name: 'Classic 350' ,img : 'classic 350.jpg'},
//         {name:' Meteor 350' ,img:'meteor 350.jpg'},
//         {name:'INT 650' ,img:'Interceptor.jpg'},
//         {name:'Continental GT 650' ,img:'gt 650.jpg'}
//     ];

//     return (
//         <div className="motorcycles-container">
//             <div className="sidebar">
//                 <ul>
//                     <li>Owner's Manual</li><hr></hr>
//                     <li>VIN Lookup</li><hr></hr>
//                     <li>Configure Now</li><hr></hr>
//                 </ul>
//             </div>
//             <div className="motorcycles-grid">
//                 {bikes.map((bike, index) => (
//                     <div key={index} className="bike-card">
//                         <img src={bike.img} alt={bike.name} className="bike-image"  />
//                         <div className="bike-info">
//                             <h3>{bike.name}</h3>
//                            <a href={bikes.href}> <button className="explore-btn">Explore</button></a>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Motorbikes;

import React from 'react';
import '../css/motorbike.css';

function Motorbikes() {


    return (
        <div className="motorcycles-container">
            <div className="sidebar">
                <ul>
                    <li>Owner's Manual</li><hr></hr>
                    <li>VIN Lookup</li><hr></hr>
                    <li>Configure Now</li><hr></hr>
                </ul>
            </div>
            <div className="motorcycles-grid">
                
                    <div className="bike-card">
                        <img src={'Himalaiyan.webp'} className="bike-image"  />
                        <div className="bike-info">
                            <h3>Himalayan 450</h3>
                            <a href="Himalayan450.js"><button className="explore-btn">Explore</button></a>
                        </div>
                    </div>
                    <div className="bike-card">
                        <img src={'shotgun 650.webp'}  className="bike-image"  />
                        <div className="bike-info">
                            <h3>Shotgun 650</h3>
                            <a href="shotgun650.js"><button className="explore-btn">Explore</button></a>
                        </div>
                    </div>
                    <div className="bike-card">
                        <img src={'bullet 350.jpeg'}  className="bike-image"  />
                        <div className="bike-info">
                            <h3>Bullet 350</h3>
                            <a href="bullet350.js"><button className="explore-btn">Explore</button></a>
                        </div>
                    </div>
                    <div className="bike-card">
                        <img src={'super-meteor-650-right-front-three-quarter-2.webp'}  className="bike-image"  />
                        <div className="bike-info">
                            <h3>Super Meteor 650</h3>
                            <a href="supermeteor650.js"><button className="explore-btn">Explore</button></a>
                        </div>
                    </div>
                    <div className="bike-card">
                        <img src={'hunter 350.webp'}  className="bike-image"  />
                        <div className="bike-info">
                            <h3>Hunter 350</h3>
                            <a href="hunter350.js"><button className="explore-btn">Explore</button></a>
                        </div>
                    </div>
                    <div className="bike-card">
                        <img src={'scram-411.webp'}  className="bike-image"  />
                        <div className="bike-info">
                            <h3>Scram-411</h3>
                            <a href="scram411.js"><button className="explore-btn">Explore</button></a>
                        </div>
                    </div>
                    <div className="bike-card">
                        <img src={'classic 350.jpg'}  className="bike-image"  />
                        <div className="bike-info">
                            <h3>Classic 350</h3>
                            <a href="classic350.js"><button className="explore-btn">Explore</button></a>
                        </div>
                    </div>
                    <div className="bike-card">
                        <img src={'meteor 350.jpg'}  className="bike-image"  />
                        <div className="bike-info">
                            <h3>Meteor 350</h3>
                            <a href="Meteor350.js"><button className="explore-btn">Explore</button></a>
                        </div>
                    </div>
                    <div className="bike-card">
                        <img src={'Interceptor.jpg'}  className="bike-image"  />
                        <div className="bike-info">
                            <h3>INT 650</h3>
                            <a href="int650.js"><button className="explore-btn">Explore</button></a>
                        </div>
                    </div>
                    <div className="bike-card">
                        <img src={'gt 650.jpg'}  className="bike-image"  />
                        <div className="bike-info">
                            <h3>Continental GT 650</h3>
                            <a href="continentalGT.js"><button className="explore-btn">Explore</button></a>
                        </div>
                    </div>
                    <div className="bike-card">
                        <img src={'thunderbird.jpg'}  className="bike-image"  />
                        <div className="bike-info">
                            <h3>Thunder Bird</h3>
                            <a href="Thunderbird.js"><button className="explore-btn">Explore</button></a>
                        </div>
                    </div>
            
            </div>
        </div>
    );
}

export default Motorbikes;
