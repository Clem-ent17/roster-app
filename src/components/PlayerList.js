import Player from './Player';

function PlayerList(props) {
    console.log('pl', props.players)

    // create a list of Player component
    const allPlayers = props.players.map(player => {
        return (
            <Player 
            firstName={player.firstName} 
            jerseyNumber={player.jerseyNumber}
            lastName={player.lastName}
            hobbie={player.hobbies}
            />
        )
    })

    return (
        <div>{ allPlayers }</div>
    )
}

export default PlayerList;