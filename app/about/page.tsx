import Head from 'next/head';
import Explainer from '../components/explainer';
import Image from 'next/image';
import team, { TeamCategory, TeamMember } from './TeamMemberInfo';
import TeamMemberDisplay from './TeamMemberDisplay';
import AboutUs from './sections/AboutUs';
import Hero from './sections/Hero';




function TeamCategoryDisplay({ category }: { category: TeamCategory }) {
  return (
    <div className='flex flex-col'>
      <h3 className='text-center text-5xl font-medium font-title pb-8'>{category.name}</h3>
      <div className=''>
        {category.team.map(m => <TeamMemberDisplay key={m.name} member={m}></TeamMemberDisplay>)}
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <div className='bg-light'>
      <Hero/>
      <AboutUs/>
      <div className='flex flex-col items-center gap-12 pt-12 border-dark border-opacity-40 border-t-2'>
        <h2 className='text-center text-5xl text-black font-title '>Meet the Team</h2>
        <div className='border-dark border-opacity-40 border-2 pt-5 mb-5 lg:w-[90vw] xl:w-[80vw] rounded-xl'>
          {team.map(c => <TeamCategoryDisplay key={c.name} category={c}></TeamCategoryDisplay>)}
        </div>
      </div>
    </div>
  );
};
