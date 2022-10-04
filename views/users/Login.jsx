const React = require("react");
// const DefaultLayout = require("./layouts/Default");

class Login extends React.Component {
    render() {
        // Put props obj to destructure //
        // const { exampleOfSomething } = this.props; // also try const exampleOfSomething = this.props.exampleOfSomething

        return (
            // <DefaultLayout title={"Title"}>
            // Could use fieldset
            <>
                <h1>Log in</h1>
                <form action="/users/login" method="POST">
                    <label>
                        Username: <input type="text" name="username" required />
                    </label> <br />
                    <label>
                        Password: <input type="password" name="password" required />
                    </label> <br />
                    <input type="submit" name="" value="Log in"/>
                </form>
            </>
        );
    }
}

module.exports = Login;