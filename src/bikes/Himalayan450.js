import React from 'react'

function Himalayan450() {
  return (
    <div className='biketot'>
         <header>
  <h1 className='bikename'>The Royal Enfield Himalayan 450</h1>
  <p className='aboutbike'>An Adventure Motorcycle for Thrill Seekers</p>
 </header>

 <section id="introduction">
  <h2 className='intro'>Introduction</h2>
  <p className='aboutbike'>The Royal Enfield Himalayan 450 is a rugged adventure motorcycle designed to conquer both off-road trails and city streets. Its powerful engine and robust design make it a popular choice for adventure enthusiasts.</p>

 {/* Adding the image*/}
  	<img src={'Himalaiyan.webp'} alt="Royal Enfield Himalayan" className='bikeimage'/>

 {/* Additional details can be added here */}
 
 </section>

 {/* More sections for engine details, design features, riding experience etc. can be added */}

 {/* Footer section */}
      <footer className='bikefooter'> 
        &copy;2023 Adventure Motors Ltd.
      </footer>


  </div>
  )
}

export default Himalayan450