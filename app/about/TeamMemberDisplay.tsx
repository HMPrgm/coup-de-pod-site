import React from 'react'
import Image from 'next/image'
import { TeamMember } from './TeamMemberInfo'

export default function TeamMemberDisplay({ member }: { member: TeamMember }) {
  return (
    <div className='flex flex-col px-6 py-4 gap-4'>
      <div className='flex items-center mx-auto'>
        <div className='aspect-square w-44'>
          <Image className='object-fill rounded-full'
            src={`/team-photos/${member.photo}`}
            alt={member.name}
            width={300}
            height={300}
          />
        </div>
        <div className='flex-grow ml-12'>
          <h4 className='font-title text-5xl font-medium mb-2'>{member.name}</h4>
          <h4 className='font-title text-3xl font-normal text-dark'>{member.title}</h4>
        </div>
      </div>
      <div className='col-span-2'>
        <p className=' text-dark'>{member.desc}</p>
      </div>
    </div>
  )
}