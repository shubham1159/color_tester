import React from 'react'
import benefit1 from '../assets/benefits.webp'
import './Benefits.css'
import benefit2 from '../assets/benefits1.webp'

const Benefits = () => {
  return (
    <>
    <div id='benefits'>
      <div className='benefit1'>
      
        <div class="bf"><h1>Check professionally</h1>
            
            <p class="para">Check your images in just a few clicks</p>
            <p class="para1">ColorX checks the images for  entrepreneurs on the go. No design experience is required to check your own banner.</p>
                </div>
                <img src={benefit1} alt="" />
      </div>
     </div>

      <div className='benefit2'>
        <img src={benefit2} alt="" />
        <div className='benefit2_content'><h1>Build a unique brand</h1>
        <p className='para2'>Endless design possibilities</p>
        <p className='para3'>Check your bannner free using hundreds of templates, icons, fonts, and color combinations in our design studio.</p></div>
        
      </div>
    </>
        
  )
}

export default Benefits
