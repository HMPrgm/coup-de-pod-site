import React from 'react'
import TeamMemberDisplay from '../components/TeamMemberDisplay'
import team from '../data/TeamMemberInfo'

export default function MeetTheTeam() {
  return (
    <div className='flex flex-col items-center gap-12 pt-12 border-dark border-opacity-40 border-t-2'>
        <h2 className='text-center text-6xl text-black font-title '>Meet the Team</h2>
        <div className=''>
          {team.map((p, i) => <TeamMemberDisplay key={p.name} member={p} left={i % 2 == 0}></TeamMemberDisplay>)}
        </div>
      </div>
  )
}
