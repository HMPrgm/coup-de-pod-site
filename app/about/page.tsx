import Head from 'next/head';
import Explainer from '../components/explainer';
import Image from 'next/image';

interface TeamMember {
  name: string,
  desc: string,
  photo: string
}
interface TeamCategory {
  name: string,
  team: TeamMember[]
}

let team: TeamCategory[] = [
  {
    name:"Co-Hosts",
    team: [
      {
        name:"Juliana Paine",
        desc:"",
        photo:"Juls.jpg"
      },
      {
        name: "Lily Bass",
        desc: "Lily Bass is a third-year at the University of Virginia planning on studying Government and English. Lily lives in Arlington Virginia, but feels it very important it be known that she lived 17 years in Washington D.C. Lily sings in a band (name not important because she doesn’t like it), and she is a member of the club Undergraduate Women in Law. Lily joined Coup de'Pod because she loves to talk and argue and is fascinated by the world’s current (albeit dumpster-fiery) political climate. ",
        photo: "Lily.png"
      },
    ]
  },
  {
    name: "Research",
    team: [
      {
        name: "Justin Gabriele",
        desc: "Justin Gabriele is a fourth-year Economics and Global Development Studies double major from Bucks County, PA. He is constantly dismayed to be a Philadelphia sports fan. Outside of the podcast, he is a member of the UVA Climbing Team, a volunteer with the Blue Ridge Area Food Bank and the Study Abroad Office, and a part of a student research group for Community Development Block Grants. He joined Coup de'Pod because he believes the world needs more places to have and hear non-partisan discussions. In all honesty, though, he’s just excited to have found a space where people indulge his political ramblings.",
        photo: "Justin.png"
      },
      {
        name:"Michelle Nguyen",
        desc:"Michelle Nguyen is a second-year undergraduate majoring in Government with a concentration in American Politics. At UVA, she serves as a Volunteer Income Tax Assistant for Creating, Assets, Savings, and Hope (CASH) as well as a volunteer translator for the Multilingual Outreach Volunteer Effort (MOVE). In her free time, she enjoys reading, listening to political podcasts (Guess which one is her favorite!), and exploring the restaurants of Charlottesville. Michelle joined Coup de'Pod due to a firm belief in the value of free speech, and she hopes to contribute to the preservation of a culture of civil discourse in higher education. ",
        photo:"Michelle.png"
      },
      {
        name:"William \"Berty\" Avellar",
        desc:"William \"Berty\" Avellar is a fourth-year transfer student in the College of Arts & Sciences at UVA. Majoring in History, Berty believes an intersection of historical perspectives leads to the deepest understanding of any given topic. — They come from the Appalachian mountains in SWVA. Growing up they spent most of their time outside and still hold a love for hiking and fresh air. — Berty believes in Coup de'Pod because they know the revelatory power diametrical viewpoints can have when pitted against each other in a civil format. They joined Coup de'Pod because they wanted to be a part of a group that promotes and platforms challenging conversations.",
        photo: "Berty.png"
      }
    ]
  },
  {
    name: "Production",
    team: [
      {
        name:"Will Kennon",
        desc:"Will Kennon is a fourth-year Media Studies student from Richmond, Virginia. After a summer internship at CBS 6 News, he is seeking a career in production, and so is happy to be a part of Coup de'Pod’s production team. Will is excited to contribute his passion for video and audio editing to Coup de'Pod and its listeners, even if that means a few ill-advised silly sound effects get added (that only he may find funny). He works diligently with Henry Morris to make sure every episode is both entertaining, informational, and most importantly, audible. Outside of Coup de'Pod, Will enjoys working at Sal’s (money) and is the president of his fraternity (somehow more work and less money). ",
        photo:"Will.png"
      },
      {
        name: "Henry Morris",
        desc: "Henry Morris is a second-year Computer Science and Math student from Richmond, Virginia. After retiring from his Minecraft YouTube channel for a few years, Henry is excited to be a part of Coup de'Pod production team. He is passionate about computers and eager to work on editing and recording for Coup de'Pod. Along with Will Kennon, Henry works to make sure Coup de'Pod sounds clear and distinguishable. Outside of Coup de'Pod, He likes to play the cello and enjoys language learning (German at the moment).",
        photo: "HenryM.png"
      },
      {
        name: "Henry Becker",
        desc: "Henry Becker Description",
        photo: "HenryB.png"
      }
    ]
  },
  {
    name: "Social Media",
    team:[
      {
        name: "Josh Gao",
        desc: "Josh Gao is a third-year undergraduate student studying Computer Science and Mathematics, provided he doesn’t fail linear algebra this semester. He is from New York and enjoys reading science fiction and playing the cello in his free time. He firmly believes that Coup de'Pod is the best podcast on Grounds not only because he’s the social media person for it, but also because the work to bridge the partisan divide starts in college campuses, led by students. ",
        photo: "Josh.png"
      }
    ]
  }
]


function TeamCategoryDisplay({category}:{category:TeamCategory}) {
  return (
    <div className='flex flex-col'>
      <h3 className='text-center'>{category.name}</h3>
      {category.team.map(m => <TeamMemberDisplay key={m.name} member={m}></TeamMemberDisplay>)}
    </div>
  )
}

function TeamMemberDisplay({ member }: { member: TeamMember }) {
  return (
    <div className='flex justify-evenly gap-24 w-full py-12 px-24 bg-light-2'>

      <div>
        <Image className='border-2 border-dark border-opacity-20 rounded-xl'
          src={`/team-photos/${member.photo}`}
          alt={member.name}
          width={300}
          height={300}
        />
      </div>
      <div className='flex-grow'>
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
        <h2 className='text-center text-5xl text-black font-title font-bold'>Meet the Team</h2>
        {team.map(c => <TeamCategoryDisplay key={c.name} category={c}></TeamCategoryDisplay>)}
      </div>
    </div>
  );
};
