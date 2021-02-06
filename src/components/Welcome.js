function Welcome() {

    const currentHour = new Date().getHours();
    const message = currentHour < 5 ? "Why are you still up?"
                    : currentHour < 12 ? "Good morning"
                    : currentHour < 18 ? "Good afternoon"
                    : "Good evening!";

    return (
        <>
        <p>{message} sports nerds.</p>
        <h2>Welcome Albatros fan?!</h2>
        </>
    );
  }

  export default Welcome;