import React from 'react'
import TeamMemberDisplay from '../components/TeamMemberDisplay'
import team from '../data/TeamMemberInfo'

export default function MeetTheTeam() {
  return (
    <div className='flex flex-col items-center gap-12 pt-12 border-dark border-opacity-40 border-t-2'>
        <h2 className='text-center text-5xl text-black font-title '>Meet the Team</h2>
        <div className='border-dark border-opacity-40 border-2 pt-5 mb-5 lg:w-[90vw] xl:w-[80vw] rounded-xl'>
          {team.map(p => <TeamMemberDisplay key={p.name} member={p}></TeamMemberDisplay>)}
        </div>
      </div>
  )
}
