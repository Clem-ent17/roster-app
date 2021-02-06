function Player(props) {

    const hobbies = props.hobbie.map(hobbie => {
        return(
            <li>{hobbie}</li>
        )
    })

    return (
        <div>
            <h3>{props.firstName} {props.lastName}, jersey number: {props.jerseyNumber}</h3>

            <ul>{hobbies}</ul>
        </div>
    );
}

export default Player;