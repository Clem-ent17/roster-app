function Player(props) {

    const hobbies = props.hobbies.length
    ? props.hobbies.map(hobby =>{return <li>{hobby}</li>})
    : <p>None listed.</p>
    

    return (
        <div>
            <h3>{props.firstName} {props.lastName}:</h3>

            <p>Jersey number is: {props.jerseyNumber}</p>

            <ul>{hobbies}</ul>
        </div>
    );
}

export default Player;