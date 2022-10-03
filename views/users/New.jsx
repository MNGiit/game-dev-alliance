const React = require("react");
// const DefaultLayout = require("./layouts/Default");

class New extends React.Component {
    render() {
        // Put props obj to destructure //
        // const { exampleOfSomething } = this.props; // also try const exampleOfSomething = this.props.exampleOfSomething

        return (
            // <DefaultLayout title={"Title"}>
            // Could use fieldset
            <>
                <h1>Create user account</h1>
                <form action="/users/new" method="POST">
                    <label>
                        Username: <input type="text" name="username" required />
                    </label> <br />
                    <label>
                        Password: <input type="password" name="password" required />
                    </label> <br />
                    <input type="submit" name="" value="Sign up"/>
                </form>
            </>
        );
    }
}

module.exports = New;