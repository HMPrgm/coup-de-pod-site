import React from 'react'
import Image from 'next/image'
import { TeamMember } from '../data/TeamMemberInfo'
TeamMemberDisplay.defaultProps = {
  left: true
}

export default function TeamMemberDisplay({ member, left }: { member: TeamMember, left: boolean }) {
  return (
    <div className={`flex flex-col md:flex-row px-6 py-8 items-center md:items-start gap-12 md:mx-4 lg:mx-12 xl:mx-40 ${left ? '' : 'md:flex-row-reverse' }`}>
      <div className='relative aspect-square w-44 md:w-64 lg:w-80 xl:w-96 flex-shrink-0'>
        <Image 
          className='object-cover rounded-full border-4 border-dark'
          src={`/team-photos/${member.photo}`}
          alt={member.name}
          fill
        />
      </div>

      <div>
        <div className={`text-center ${left ?'md:text-left' : 'md:text-right'}`}>
          <h4 className='font-title text-4xl md:text-5xl font-medium mb-2'>{member.name}</h4>
          <h4 className='font-title text-2xl md:text-3xl font-normal text-dark mb-2'>{member.title}</h4>
        </div>
        <p className='text-dark text-justify text-sm lg:text-base'>{member.desc}</p>
      </div>
    </div>
  )
}