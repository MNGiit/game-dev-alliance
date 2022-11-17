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
            // <DefaultLayout title={"Articles"}>
            
            <DefaultLayout title={"Articles"}>
                <h1>Articles</h1>
                
                <div>
                    {loggedIn ? <a href="/users/logout"><button>Logout</button></a> : (<a href="/users/login"><button>Login</button></a>, 
                    <a href="/users/login"><button>Login</button></a>)}
                    {signUp(loggedIn)}
                </div>

                <ul>
                {this.props.articles.map((article, i) => {
                    return (
                        // should put key={i} for convention
                        <li key={i}><a href={`/articles/${article.id}`}>{article.title}</a></li>
                        )
                    })}
                </ul>

                <a href="/articles/new">Create article</a>

                <a href="/">Home</a>
            </DefaultLayout>
        );
    }
}

module.exports = Index;