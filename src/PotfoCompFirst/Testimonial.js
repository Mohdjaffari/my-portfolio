import React from 'react'

export default function Testimonial() {
    const testimonials=[
        {
            clientPic:'/image/me.jpg',
            clientName:'Jaffari',
            clientStatus:'CEO of fun zone',
            clientsSms:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tempore, asperiores velit delectus molestias nisi optio praesentium excepturi consequuntur quis eligendi nobis at non! Eum libero consequuntur eveniet. Tempore, amet',
        },
        {
            clientPic:'/image/me.jpg',
            clientName:'Jaffari',
            clientStatus:'CEO of fun zone',
            clientsSms:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tempore, asperiores velit delectus molestias nisi optio praesentium excepturi consequuntur quis eligendi nobis at non! Eum libero consequuntur eveniet. Tempore, amet',
        },
        {
            clientPic:'/image/me.jpg',
            clientName:'Jaffari',
            clientStatus:'CEO of fun zone',
            clientsSms:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tempore, asperiores velit delectus molestias nisi optio praesentium excepturi consequuntur quis eligendi nobis at non! Eum libero consequuntur eveniet. Tempore, amet',
        },
        {
            clientPic:'/image/me.jpg',
            clientName:'Jaffari',
            clientStatus:'CEO of fun zone',
            clientsSms:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tempore, asperiores velit delectus molestias nisi optio praesentium excepturi consequuntur quis eligendi nobis at non! Eum libero consequuntur eveniet. Tempore, amet',
        }
        , {
            clientPic:'/image/me.jpg',
            clientName:'Jaffari',
            clientStatus:'CEO of fun zone',
            clientsSms:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tempore, asperiores velit delectus molestias nisi optio praesentium excepturi consequuntur quis eligendi nobis at non! Eum libero consequuntur eveniet. Tempore, amet',
        },
        {
            clientPic:'/image/me.jpg',
            clientName:'Jaffari',
            clientStatus:'CEO of fun zone',
            clientsSms:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tempore, asperiores velit delectus molestias nisi optio praesentium excepturi consequuntur quis eligendi nobis at non! Eum libero consequuntur eveniet. Tempore, amet',
        }
    ]
  return (
    <div>
        <div className="testimonial-container" id='testimonial-container-ss'>
            <p>|| Testimonial</p>
            <h1>Satisfied Clients Say</h1>
            <div className="testimonial-content" id='testimonial-content-ss'>
                <ul>
                    {testimonials.map((testimonial,index)=>(
                        <li key={index}>
                        <div className="client-profile">
                            <div className="client-pic">
                                <img src={testimonial.clientPic} alt="" />
                            </div>
                            <div className="client-name">
                                <h3>{testimonial.clientName}</h3>
                                <p>{testimonial.clientStatus}</p>
                            </div>
                        </div>
                        <div className="client-message">
                            <p>{testimonial.clientsSms}</p>
                        </div>
                        <div className="star-icons">
                        <i class="fa-solid fa-star" style={{color:'yellow'}}></i>
                        <i class="fa-solid fa-star" style={{color:'yellow'}}></i>
                        <i class="fa-solid fa-star" style={{color:'yellow'}}></i>
                        <i class="fa-solid fa-star" style={{color:'yellow'}}></i>
                        <i class="fa-solid fa-star"></i>
                        </div>
                     </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}
