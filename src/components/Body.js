import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'


function Body() {
    return (
        <div>
          
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://triplanco.com/wp-content/uploads/2019/01/hotel_triplanco.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Hotel Front View</h3>
      <p>the front outside of the hotel</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100" style={{height: 600}}
      src="https://images.trailfinders.com/asset/9bf57/TF638806/TF64678_1500x1500.jpg"
      alt="Second slide" 
    />

    <Carousel.Caption>
      <h3>inside view</h3>
      <p>thats how the inside space look like</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"  style={{height: 600}}
      src="https://i.pinimg.com/originals/cb/1c/51/cb1c5189bf94d90c2829d5781d4ad3dd.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Pool view</h3>
      <p>This is where guest relax and cool down their body</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"  style={{height: 600}}
      src="https://th.bing.com/th/id/R.6afd76057e0058374f5a87d447729f5d?rik=opSPXlwHViDBlA&riu=http%3a%2f%2fwww.nycgo.com%2fimages%2fmade%2fimages%2fphoto_gallery%2fHotel_Rooms_with_a_View%2f13_W-Downtown-Hotel-1_1500_1000_70_c1.jpg&ehk=66lGawk8UIqUTcUS1FiXIOQeb01Fc9pdnh2%2fJGbnSh8%3d&risl=&pid=ImgRaw&r=0"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Night side View</h3>
      <p>Time to relax and enjoy the view</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        </div>
    )
}

export default Body
