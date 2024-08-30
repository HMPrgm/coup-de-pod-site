import Head from 'next/head';
import Explainer from '../components/explainer';
import Image from 'next/image';

interface TeamMember {
  jobTitle: string,
  name: string,
  desc: string,
  photo: string
}

let team: TeamMember[] = [
  {
    jobTitle: "Producer",
    name: "Henry",
    desc: "description",
    photo: "Henry.png"
  }
]

function TeamMemberDisplay({ member }: { member: TeamMember }) {
  return (
    <div className='flex justify-evenly gap-24 w-full py-12 px-24 bg-light-2'>

      <div className=''>
        <Image className='border-2 border-dark border-opacity-20 rounded-xl'
          src={`/team-photos/${member.photo}`}
          alt={member.name}
          width={300}
          height={300}
        />
      </div>
      <div className='flex-grow'>
        <h3 className='font-title text-3xl font-normal '><span className='font-medium'>{member.name}:</span> {member.jobTitle}</h3>
        <p className='text-lg text-dark'>{member.desc}</p>
      </div>
    </div>
  )
}



export default function Page() {
  return (
    <div className='bg-light'>

      <div className="bg-cover bg-center max-h-[30rem]" style={{
        backgroundImage: `url('/UVA.jpg')`,
        height: "972px"
      }}>
        <div className='bg-dark bg-opacity-80 w-full h-full flex text-center text-light justify-center items-center pt-24 '>
        <h1 className="text-7xl font-title mb-8 font-black italic max-w-[12em] leading-relaxed tracking-wider"  >Something Politics Probably Important</h1>
        </div>

      </div>
      <div>
        <Explainer picAlt='Temporary' picture='/UVA.jpg' swap={true} title='Our History' paragraph="Coup de'Pod was founded in [Month] of 2023 . . ."></Explainer>
      </div>
      <div className='flex flex-col items-center gap-12 pt-12 border-dark border-t-2'>
        <h2 className='text-center text-5xl text-black font-title font-bold'>Meet the Team</h2>
        {team.map(m => <TeamMemberDisplay key={m.name} member={m}></TeamMemberDisplay>)}
      </div>
    </div>
  );
};
