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
    }
]

export default team;