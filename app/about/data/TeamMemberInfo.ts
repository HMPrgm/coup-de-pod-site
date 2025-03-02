export interface TeamMember {
    name: string,
    title: string,
    desc: string,
    photo: string
}

let team: TeamMember[] = [
    {
        name: "Juliana (Juls) Paine",
        title: "Codirector and Co Host for National Team",
        desc: "Juliana is a fourth year student at the University of Virginia, studying at the McIntire School of Commerce with concentrations in finance and marketing. She's from a small town located in southwest Virginia, where her favorite activities are to watch tractors, cow tip, and stalk the town's Facebook group to watch hot gossip go down in real time. Juliana is also the vice president and cofounder of Middle Grounds at UVA (a Bridge USA Chapter), which is funny because, like, shouldn't she be in some business related club? LOL! Juliana started Coup De Pod because she believes that student discourse on current events is a necessity, especially since most of the time people don't actually know what students believe, instead opting to disseminate blanket statements about a young, “doomed”, generation. She believes that, even though the apparent end of the world is approaching and nihilism is on the rise, these conversations between differing perspectives do, indeed, matter. Ruh roh.",
        photo: "Juls.jpg",
    },
    {
        name:"Alex Friedlander",
        title:"Co-director and Co-Host for Local Team",
        desc:"Alex is a fourth year double majoring in Economics and Spanish and is intent on going to law school. He is from New Orleans, Louisiana, and yes (he says with a sigh) he has been to Mardi Gras. Outside of the classroom and his beloved Coup De Pod, Alex is on the Middle Grounds Executive Committee, writes for the Virginia Undergraduate Law Review, and volunteers with Achilles, an organization that assists neurodivergent adults exercise. Outside of his love to argue, Alex helped start Coup de Pod because he HATES echo chambers, and strongly believes it would do a lot of people a whole lot of good to listen to the opposing side of the argument. In his free time, Alex loves seeking out live music, learning about all things astronomy, and convincing others to go on a run with him.",
        photo:"Alex.jpg",
    },
    {
        name:"Lily Bass",
        title:"Co Host for National Team",
        desc:"Lily Bass is a third year double majoring in English and Political Philosophy, Policy, and Law. She was born and raised in Washington D.C. and recently moved to the lovely Arlington, Virginia #InState. She has two English Springer Spaniels named April and June and she loves them more than life. Lily joined Coup De Pod because she loves talking and is sick and tired of all this fighting #IsSheRightOrIsSheRight? Lily also volunteers at the CASPCA and loves spending her time with the animals and cleaning their cages. She also is the social media chair for Middle Grounds at UVA and she makes really awesome posts for their instagram all the time. Lily is passionate about politics and having healthy and constructive conversations.",
        photo:"Lily.jpg",
    },
    {
        name:"Nick Felsman",
        title:"Co Host for short-form content",
        desc:"Nick is a first-year undecided student. He was born in Charlottesville and moved all over the world just to settle right back in Virginia. He has two dogs (alr that chill). Nick mains Rocket in the game Marvel Rivals - he just got Grandmaster (go Nick). He's going places. Nick's an ally asf. Nick is also a member of the amazing club middle grounds where he delves deep into interesting political topics with grace. Nick loves to wear his headphones on his head. Nick is currently in his winter arc (like an all-year thing?). Nick knows sick vape tricks and was on a vape team in highschool - they would meet at the mall. Sick. ",
        photo:"Nick.jpg",
    },
    {
        name:"Juan Salazar",
        desc:"Juan is a fourth year at the University of Virginia majoring in Foreign Affairs. He was born in Santiago, Chile and moved to Northern Virginia at age 13. While adapting to this new culture he learned just how important our cultural identity is, and how it affects our values and beliefs. He holds the view that cultural identity at the individual and collective level shapes the way a society behaves, determining the character of the law of the land. Juan joined Coup De Pod with the desire to learn as well as discuss specific topics of historical importance at the international level. In addition, he believes that any society inevitably stops working when people in disagreement stop talking. It is always good to hear multiple points of views and opinions to fight polarization- and for now, this is my way of doing so here at Coup De Pod.",
        title:"Co Host for International Team ",
        photo:"Juan.jpg",
    },
    {
        name:"Jacob Rabin",
        title:"Co Host for International Team",
        desc:"Jacob is a third year student at the University of Virginia, studying Foreign Affairs and History. He's from Raleigh, North Carolina, where he developed an interest in politics and foreign policy from an early age. Jacob is also a staff writer for the Virginia Review of Politics and the Virginia Journal of International Affairs, as well as serving as the Treasurer of Middle Grounds at UVA (a BridgeUSA Chapter). Jacob believes that a nuanced conversation on politics and foreign policy is incredibly important in an era of such polarization and controversy. He also thinks that we can learn much about the direction of the future by looking towards the past.",
        photo:"Jacob.jpg",
    },
    {
        name:"Michelle Nguyen",
        title:"Director of Research",
        desc:"Michelle Nguyen is a third-year undergraduate majoring in Government with a concentration in American Politics. She joined Coup de'Pod due to her firm belief in the value of free speech, and she hopes to contribute to a culture of civil discourse in higher education. Through her role as Director of Research, she has had the opportunity to analyze the wide range of perspectives featured in international, national, and local policy debates. At UVA, Michelle also serves as a Program Director for Creating, Assets, Savings, and Hope (CASH) and a research assistant for the National Marriage Project. In her free time, she enjoys reading, listening to political podcasts, and exploring the restaurants of Charlottesville.",
        photo:"Michelle.jpg",
    },
    {
        name:"Justin Gabriele",
        title:"Researcher",
        desc:"Justin Gabriele is a fourth-year Economics and Global Development Studies double major from Bucks County, PA. He is constantly dismayed to be a Philadelphia sports fan. Outside of the podcast, he is a member of the UVA Climbing Team, a volunteer with the Blue Ridge Area Food Bank and the Study Abroad Office, and a part of a student research group for Community Development Block Grants. He joined Coup de'Pod because he believes the world needs more places to have and hear non-partisan discussions. In all honesty, though, he's just excited to have found a space where people indulge his political ramblings.",
        photo:"Justin.jpg",
    },
    {
        name:"William \"Berty\" Avellar",
        title:"On Grounds Researcher",
        desc:"Berty is a transfer student at University of Virginia seeking a bachelors in history. They're from Floyd, VA, famous for its bluegrass, music festival, and assorted trees - talking christmas trees! Berty transferred to University of Virginia from Virginia Western Community College in Roanoke, VA. They found the transition to be a bit of a shock at first but have come to love the beautiful scenery and palpable history on Grounds and in Charlottesville. In their spare time they like to read, write, hike, and go out with friends. On weekends you can either find them at home under a good book, or in DC at a gay-bar. Berty joined Coup de Pod because they felt empowered by the friendly atmosphere and inflamed by CDP's mission statement. In their time at CDP Berty feels privileged to have researched topics stretching from UVA's foreign investment to what role politics does and should play in the classroom - looking at topics from every angle and not shying away from the hard questions.",
        photo:"Berty.jpg",
    },
    {
        name:"Josh Gao",
        title:"Social Media Director",
        desc:"Josh is a third year student at the University of Virginia studying mathematics and computer science. He was born in upstate New York, a place that is renowned for not being New York City. In his spare time, he enjoys reading science fiction, practicing the cello, and playing rhythm games (ask him about osu!). Josh joined Coup de Pod because he believes in the power of humor and lighthearted-ness to make difficult, serious topics more accessible. In managing the social media accounts for the podcast, he has gained new perspectives on key issues surrounding UVA and U.S. politics as a whole. He hopes you apply to join Coup de Pod!",
        photo:"Josh.jpg",
    },
    {
        name:"Will Kennon",
        title:"Producer",
        desc:"Will Kennon is a fourth-year Media Studies student from Richmond, Virginia. After a summer internship at CBS 6 News, he is seeking a career in production, and so is happy to be a part of Coup de'Pod's production team. Will is excited to contribute his passion for video and audio editing to Coup de'Pod and its listeners, even if that means a few ill-advised silly sound effects get added (that only he may find funny). He works diligently to make sure every episode is both entertaining, informational, and most importantly, audible. Outside of Coup de'Pod, Will enjoys working at Sal's (money) and is the president of his fraternity (somehow more work and less money).",
        photo:"Will.jpg",
    },
    {
        name:"Henry Morris (Henry #1)",
        title:"Producer and Director of Medium-Form Content",
        desc:"Henry Morris is a second-year Computer Science and Math student from Richmond, Virginia. After retiring from his Minecraft YouTube channel for a few years, Henry is excited to be a part of Coup de'Pod production team. He is passionate about computers and eager to work on editing and recording for Coup de'Pod. Henry works to make sure Coup de'Pod sounds clear and distinguishable. Outside of Coup de'Pod, He likes to play the cello, draw and paint, and learn languages (Italian at the moment).",
        photo:"Henry1.jpg",
    },
    {
        name:"Henry Becker (Henry #2)",
        title:"Producer",
        desc:"Henry Becker is a third year majoring in Psychology and minoring in Philosophy. He is from Stafford, Virginia, a suburban town in NOVA. He is also a research assistant at the Virginia Affect and Interoception Lab (VAIL). As a producer at Coup de'Pod, Henry is excited to help facilitate political discussion on grounds.",
        photo:"Henry2.jpg",
    },
    {
        name:"Owen Brown",
        title:"Co Host",
        desc:"",
        photo:"Owen.jpg",
    },
    {
        name:"Rishi Chandra",
        title:"Social Media",
        desc:"",
        photo:"Rishi.jpg",
    },
    {
        name:"Max Morrish",
        title:"Researcher",
        desc:"",
        photo:"Max.jpg",
    },
    {
        name:"David Samy",
        title:"Reasearcher",
        desc:"",
        photo:"David.jpg",
    },
]

export default team;