import React from 'react'
import {GraduationCap} from 'lucide-react'
import {CalendarDays} from 'lucide-react'
import {SquareUser} from 'lucide-react'


const Card = (props) => {
  return (
    <div className='card'>
       <div className='upper'>
        <img src={props.image} alt={props.name} />
        <h1>{props.name}</h1>
        <h2>Engineering Physics</h2>
        <div className="student-info">
    
        <p><GraduationCap />  Branch: <span>{props.branch}</span></p>
        <p><CalendarDays />  Year: <span>{props.year}</span></p>
        <p><SquareUser />  Roll No: <span>{props.enrollment}</span></p>
</div>



       </div>
       <hr />
       <div className="bottom">
        <p>{props.motive}</p>
        <button>View Profile</button>
       </div>
    </div>
  )
}

export default Card