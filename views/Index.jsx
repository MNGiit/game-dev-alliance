const React = require("react");
const DefaultLayout = require("./layouts/Default");

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
            // <DefaultLayout title={"Home"}>
            
            <DefaultLayout title={"Home"}>
                <h1>Home</h1>
                <div>
                    {loggedIn ? <a href="/users/logout"><button>Logout</button></a> : (<a href="/users/login"><button>Login</button></a>, 
                    <a href="/users/login"><button>Login</button></a>)}
                    {signUp(loggedIn)}


                </div>
                <p>Users (model 1) can create articles (model 2)</p>
                <h2>Articles Index</h2>
                <a href="/articles">Articles</a>
                <p>Users can leave comments (model 3)</p>
                <h2>Games Index</h2>
                <a href="/games">Games</a>
                <p>Users can create games, and add games to their libraries (model 4 or 5?)</p>
            </DefaultLayout>
        );
    }
}

module.exports = Index;