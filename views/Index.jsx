const React = require("react");
// const DefaultLayout = require("./layouts/Default");

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
            // <DefaultLayout title={"Title"}>
            <>
                <h1>Hello world!</h1>
                <div>
                    {loggedIn ? <a href="/users/logout"><button>Logout</button></a> : (<a href="/users/login"><button>Login</button></a>, 
                    <a href="/users/login"><button>Login</button></a>)}
                    {signUp(loggedIn)}


                </div>
                <h2>Users Index</h2>
                <p>Users (model 1) can create articles (model 2)</p>
                <h2>Articles Index</h2>
                <p>Users can leave comments (model 3)</p>
                <h2>Admin page (model 4?)</h2>
                <p>Admin can delete users or articles or comments</p>
                <h2>Help request (model 5?)</h2>
            </>
        );
    }
}

module.exports = Index;