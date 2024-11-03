import React from 'react'

export default function Experience() {
    const experiencBoxes=[
        {
            expIcon:'fa-regular fa-user',
            expCount:'20+',
            title:'My Satisfied Clients'
        },
        {
            expIcon:'fa-solid fa-diagram-project',
            expCount:'15+',
            title:'Complete Projects'
        },
        {
            expIcon:'fa-solid fa-calendar-days',
            expCount:'2',
            title:'Years Experience'
        },
    ]
  return (
    <div>
        <div className="experience-container" id='experience-container-ss'>
            <div className="experience-content" id='experience-content-ss'>
                <ul>
                    {experiencBoxes.map((experiencBox, index)=>(
                    <li>
                         <div className='workdetail' id='workdetail-ss'>
                         <div className="icons" id='icons-ss'>
                         <i class={experiencBox.expIcon}></i>
                         </div>
                         <div className="detail" id='detail-ss'>
                             <h3>{experiencBox.expCount}</h3>
                         </div>
                         </div>
                         <p>{experiencBox.title}</p>
                     </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}
