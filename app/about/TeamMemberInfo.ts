export interface TeamMember {
    name: string,
    title: string,
    desc: string,
    photo: string
}

export interface TeamCategory {
    name: string,
    team: TeamMember[]
}

let team: TeamCategory[] = [
    {
        name: "Co-hosts",
        team: [
            {
                name:"",
                title:"",
                desc:"",
                photo:"",
            }
        ]
    }
]

export default team;