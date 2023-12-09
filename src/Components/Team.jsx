import React from 'react'
import teamimg1 from '../assets/images/team-img1.png'
import teamimg2 from '../assets/images/team-img2.png'
import teamimg3 from '../assets/images/team-img3.png'
const teams =[
        {
                teamimg1:teamimg1,
                haddingt:"Prime Bullister ",
                teamp:"Pruduct Designer",
                alt:'image'
        },
        {
                teamimg1:teamimg2,
                haddingt:"Solvador Bulli ",
                teamp:"Artist",
                alt:'image'
        },
        {
                teamimg1:teamimg3,
                haddingt:"Meta Bully ",
                teamp:"Pruduct Designer",
                alt:'image'
        },
]

const Team = () => {
        const teamc = teams.map((teamc)=>(
                 <div className='col-lg-4 col-md-6 col-12 mb-3'>
                      <div className='d-flex flex-column align-items-center justify-content-center'>
                        <img src={teamc.teamimg1} alt="teamc.alt" />
                        <h2 className='fs-xl fw-semibold text-white lh-136 pt-3 m-0 '>{teamc.haddingt}</h2>
                        <p className='fs-md fw-normal lh-136 text-white '>{teamc.teamp}</p>
                      </div>
                 </div>
        ))
  return (
    <div className='bg-blue pt-5' id="team">
      <div className="container">        
      <h3 className="fs-xl1 fw-medium text-white lh-136 text-center m-0 pb-5 ">Our Team</h3>
         <div className="row">
              {teamc}
         </div>
      </div>
    </div>
  )
}

export default Team
