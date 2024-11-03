import React from 'react'
import ProgressBar from './ProgressBar'

export default function SpecialSkill() {

  return (
    <div>
        <div className="special-skill-container" id='special-skill-container-ss'>
            <div className="special-skill-content" id='special-skill-content-ss'>
                <ul>
                    <li>
                        <p className='para'>|| My Special Skills</p>
                        <h1>My Special Skill Field Here</h1>
                        <div className="specialSkill-btn">
                        <button> Resume <i className="fa-solid fa-download"></i></button>
                        </div>
                    </li> 
                    <li>
                        <div className="skill-dt">
                            <ProgressBar initialValue={0} targetValue={80} skillName={'Communication'}/>
                            <ProgressBar initialValue={0} targetValue={70} skillName={'Leadership'}/>
                            <ProgressBar initialValue={0} targetValue={75} skillName={'TeamWork'}/>
                            <ProgressBar initialValue={0} targetValue={60} skillName={'Fexibility'}/>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
