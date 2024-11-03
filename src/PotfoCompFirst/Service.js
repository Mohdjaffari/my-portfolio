import React from 'react'

export default function Service() {
    const services=[
        {
            courseIcon:'fa-solid fa-laptop-code',
            courseName:'Web Development',
            arrowicon:'fa-solid fa-angles-right',
            courseDt1:"Html/CSS",
            courseDt2:"Java Script",
            courseDt3:"Bootstrap",
            courseDt4:"React.js",
            courseDt5:"Animation",
        },
        {
            courseIcon:'fa-solid fa-layer-group',
            courseName:'UX / UI Design',
            arrowicon:'fa-solid fa-angles-right',
            courseDt1:"Landing Page",
            courseDt2:"User Flow",
            courseDt3:"WireFraming",
            courseDt4:"Prototyping",
            courseDt5:"Mobile App Design",
        },
        {
            courseIcon:'fa-solid fa-bezier-curve',
            courseName:'Illustration',
            arrowicon:'fa-solid fa-angles-right',
            courseDt1:"Character Design",
            courseDt2:"Icon Set",
            courseDt3:"Illustration Guid",
            courseDt4:"Illustration Set",
            courseDt5:"Motion Graphic",
        },
    ]
  return (
    <div>
        <div className="service-container" id='service-container-ss'>
            <div className="titles" id='titles-ss'>
               <p>|| My service</p>
               <h1>Service Provide For My Clients.</h1>
            </div>
            
            <div className="service-content" id='service-content-ss'>
                <ul>
                    {services.map((service,index)=>(
                        <li key={index}>
                        <div className="icons">
                          <i className={service.courseIcon}></i>
                        </div>
                        <h2>{service.courseName}</h2>
                        <div className="service-dt">
                            <p><i className={service.arrowicon}></i>{service.courseDt1}</p>
                            <p><i className={service.arrowicon}></i>{service.courseDt2}</p>
                            <p><i className={service.arrowicon}></i>{service.courseDt3}</p>
                            <p><i className={service.arrowicon}></i>{service.courseDt4}</p>
                            <p><i className={service.arrowicon}></i>{service.courseDt5}</p>
                        </div>
                        
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}
