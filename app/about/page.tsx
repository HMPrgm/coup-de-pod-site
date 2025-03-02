import Head from 'next/head';
import Explainer from '../components/explainer';
import Image from 'next/image';






function TeamCategoryDisplay({ category }: { category: TeamCategory }) {
  return (
    <div className='flex flex-col'>
      <h3 className='text-center text-5xl font-medium font-title'>{category.name}</h3>
      <div className=''>
        {category.team.map(m => <TeamMemberDisplay key={m.name} member={m}></TeamMemberDisplay>)}
      </div>
    </div>
  )
}

function TeamMemberDisplay({ member }: { member: TeamMember }) {
  return (
    <div className='grid md:grid-cols-3 gap-12 md:gap-24 w-full py-12 px-4 sm:px-12 md:px-24 items-center'>

      <div>
        <Image className='object-cover hidden md:block rounded h-72 w-72'
          src={`/team-photos/${member.photo}`}
          alt={member.name}
          width={300}
          height={300}
        />
      </div>
      <div className='col-span-2'>
        <h4 className='font-title text-3xl font-medium'>{member.name}</h4>
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
        <div className='bg-dark bg-opacity-80 w-full h-full flex text-center text-light justify-center items-center pt-24  px-2'>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-title mb-8 font-black italic max-w-[20em] leading-snug tracking-wider"  >To Broadcast Significant, Unconventional Student Thought at UVA</h1>
        </div>

      </div>
      <div className='px-4 sm:px-12 md:px-24 lg:px-36 xl:px-48 flex flex-col gap-4 text-lg sm:text-xl py-10'>
        <h2 className='text-center font-title text-5xl pb-6'>About Us</h2>
        {/* <Explainer picAlt='Temporary' picture='/UVA.jpg' swap={true} title='Our History' paragraph="Coup de'Pod was founded in [Month] of 2023 . . ."></Explainer> */}
        <p>
          Coup de&apos;Pod was formally born in the 2023 Fall semester when, after the recruitment of a select few co-hosts, episode production began. In the following months, a larger cohort of students was recruited. The group then appointed social media chairs, communications chairs, researchers, and a production crew. After receiving a slew of interest within the first month of organizational activity, we realized the grand potential of our project: <b className='font-medium italic'>to broadcast politically significant, sometimes unconventional, student thought throughout UVA Grounds and beyond.</b> This was unique, especially for a new generation who wanted to go beyond the borders of partisan thinking - a generation that, for all their lives, have been spoken for rather than heard.
        </p>
        <p>
          Over the course of the fall semester, we began to regularly release episodes, backed by the work of members actively participating in each journalistic report. In the spring semester, we once again began a recruitment cycle to grow our ever-expanding endeavor and were greeted with more eager, prospective members. Thus, that brings us to the current operation of our podcast. We continue to promote and preach <b className='font-medium italic'>the transformative power of the questioning of the status quo.</b>
        </p>
      </div>
      <div className='flex flex-col items-center gap-12 pt-12 border-dark border-opacity-40 border-t-2'>
        <h2 className='text-center text-5xl text-black font-title '>Meet the Team</h2>
        <div className='border-dark border-opacity-40 border-2 pt-5 mb-5 lg:w-[90vw] xl:w-[80vw] rounded-xl'>
          {team.map(c => <TeamCategoryDisplay key={c.name} category={c}></TeamCategoryDisplay>)}
        </div>
      </div>
    </div>
  );
};
