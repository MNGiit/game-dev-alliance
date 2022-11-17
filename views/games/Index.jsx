const React = require("react");
// const DefaultLayout = require("./layouts/Default");
const DefaultLayout = require("../layouts/Default");

class Index extends React.Component {
    render() {
        // Put props obj to destructure //
        // const { exampleOfSomething } = this.props; // also try const exampleOfSomething = this.props.exampleOfSomething
        // const { loggedIn } = this.props.loggedIn;
        const loggedIn = this.props.loggedIn;
        // can also try a function and calling it for logout login signup buttons// https://reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx
        function signUp(loggedIn) {
            if(loggedIn) return
            else return <a href="/users/new"><button>Sign up</button></a>
        }
        return (
            // <DefaultLayout title={"Games"}>
            
            <DefaultLayout title={"Games"}>
                <h1>Games</h1>
                
                <div>
                    {loggedIn ? <a href="/users/logout"><button>Logout</button></a> : (<a href="/users/login"><button>Login</button></a>, 
                    <a href="/users/login"><button>Login</button></a>)}
                    {signUp(loggedIn)}
                </div>

                <ul>
                {this.props.games.map((game, i) => {
                    return (
                        // should put key={i} for convention
                        <li key={i}><a href={`/games/${game.id}`}>{game.name}</a></li>
                        )
                    })}
                </ul>

                <a href="/games/new">Create game</a>

                <a href="/">Home</a>
            </DefaultLayout>
        );
    }
}

module.exports = Index;