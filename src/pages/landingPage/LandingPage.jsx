import React from 'react'
import NavBar from '../../components/re-useableComponents/NavBar'
import my_img from '../../assets/images/WIN_20221118_15_35_50_Pro.jpg'
import HeroSection from '../../components/re-useableComponents/HeroSection'

export default function LandingPage() {
  return (
    <div className='body-div  '>
      <NavBar/>
      <HeroSection text= 'Master mind' />

      <div className='top-text row'>
        <div className='col md'>
          <p> col-xs-6 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores et nam laudantium! Modi id itaque magnam voluptates, quisquam quia molestiae delectus, aliquam repellat rerum deserunt, atque dolorem perferendis consequatur qui?</p>
        </div>
        <div className='col md '>
          <p>md - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores et nam laudantium! Modi id itaque magnam voluptates, quisquam quia molestiae delectus, aliquam repellat rerum deserunt, atque dolorem perferendis consequatur qui?</p>
        </div>
        <div className='col md '>
          <p>md - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores et nam laudantium! Modi id itaque magnam voluptates, quisquam quia molestiae delectus, aliquam repellat rerum deserunt, atque dolorem perferendis consequatur qui?</p>
        </div>
      </div>

    <div className='row'>
      <div className='col xs'>
        <p>video first set of text responsive... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, a repudiandae. Placeat commodi, natus repudiandae, consequuntur ipsum deleniti, ducimus molestiae minima error fugit numquam a! Distinctio nesciunt ad eligendi exercitationem.</p>
      </div>
      <div className='col xs'>
        <p>video first set of text responsive... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, a repudiandae. Placeat commodi, natus repudiandae, consequuntur ipsum deleniti, ducimus molestiae minima error fugit numquam a! Distinctio nesciunt ad eligendi exercitationem.</p>
      </div>
    </div>
    <div className='row'>
      <div className='col xs-4'>
        <p>video second set of text responsive personal trial... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, a repudiandae. Placeat commodi, natus repudiandae, consequuntur ipsum deleniti, ducimus molestiae minima error fugit numquam a! Distinctio nesciunt ad eligendi exercitationem.</p>
      </div>
      <div className='col xs-4'>
        <p>video second set of text responsive personal trial... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, a repudiandae. Placeat commodi, natus repudiandae, consequuntur ipsum deleniti, ducimus molestiae minima error fugit numquam a! Distinctio nesciunt ad eligendi exercitationem.</p>
      </div>
    </div>

    <div className='md-same-as-top-text row'>
        <div className='col md'>
          <p> col-xs-6 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores et nam laudantium! Modi id itaque magnam voluptates, quisquam quia molestiae delectus, aliquam repellat rerum deserunt, atque dolorem perferendis consequatur qui?</p>
        </div>
        <div className='col md '>
          <p>md - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores et nam laudantium! Modi id itaque magnam voluptates, quisquam quia molestiae delectus, aliquam repellat rerum deserunt, atque dolorem perferendis consequatur qui?</p>
        </div>
        <div className='col md '>
          <p>md - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores et nam laudantium! Modi id itaque magnam voluptates, quisquam quia molestiae delectus, aliquam repellat rerum deserunt, atque dolorem perferendis consequatur qui?</p>
        </div>
      </div>

    <div className='row'>
      <div className='col sm '>
        <p>video third set of text responsive continued video study... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, a repudiandae. Placeat commodi, natus repudiandae, consequuntur ipsum deleniti, ducimus molestiae minima error fugit numquam a! Distinctio nesciunt ad eligendi exercitationem.</p>
      </div>
      <div className='col sm '>
        <p>video third set of textresponsive continued video study Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, a repudiandae. Placeat commodi, natus repudiandae, consequuntur ipsum deleniti, ducimus molestiae minima error fugit numquam a! Distinctio nesciunt ad eligendi exercitationem.</p>
      </div>
    </div>
  </div>
  )
} 
