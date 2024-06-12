function UserGreeting(props){

    const welcomeMessage = <h2>Welcome {props.userName}</h2>;
    const loginPrompt = <h2>Please login to continue</h2>;

    return ( props.isLoggedIn ? welcomeMessage : loginPrompt)
}

export default UserGreeting