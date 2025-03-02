import AboutUs from './sections/AboutUs';
import Hero from './sections/Hero';
import MeetTheTeam from './sections/MeetTheTeam';

export default function Page() {
  return (
    <div className='bg-light'>
      <Hero/>
      <AboutUs/>
      <MeetTheTeam/>
    </div>
  );
};
