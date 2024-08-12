
import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"

const users = [
    {
        userName:  "midudev",
        name: "Miguel  Angel Duran",
        isFollowing: true
    },
    {
        userName:  "oscarArismendi",
        name: "Oscar Arismendi",
        isFollowing: false
    }
];

export function App() {
    const format = (userName) =>  `@${userName}`
    return (
        <>
            <section className="App">
                {
                    users.map(({userName,name,isFollowing}) => (
                            <TwitterFollowCard
                                key={userName}
                                userName={userName}
                                initialIsFollowing={isFollowing}
                                formatUserName={format}
                            >
                                {name}
                            </TwitterFollowCard>
                        )
                    )
                }
            </section>

        </>
    )
}