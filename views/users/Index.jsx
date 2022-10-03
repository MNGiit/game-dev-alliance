const React = require("react");
// const DefaultLayout = require("./layouts/Default");

class Index extends React.Component {
    render() {
        // Put props obj to destructure //
        // const { exampleOfSomething } = this.props; // also try const exampleOfSomething = this.props.exampleOfSomething

        return (
            // <DefaultLayout title={"Title"}>
            <>
                <h1>Users</h1>
            </>
        );
    }
}

module.exports = Index;