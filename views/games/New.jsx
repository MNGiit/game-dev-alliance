const React = require("react");
const DefaultLayout = require("../layouts/Default");
// const DefaultLayout = require("./layouts/Default");

class New extends React.Component {
    render() {
        // Put props obj to destructure //
        // const { exampleOfSomething } = this.props; // also try const exampleOfSomething = this.props.exampleOfSomething

        return (
            // <DefaultLayout title={"Title"}>
            // Could use fieldset
            <DefaultLayout title={"New"}>
                <h1>Create new game</h1>
                <form action="/games/new" method="POST">
                    <label>
                        Name: <input type="text" name="name" required />
                    </label> <br />
                    <label>
                        Img URL: <input type="text" name="imgurl" />
                    </label> <br />
                    <label>
                        <textarea name="description" rows="5" cols="100">
                            Give a description of this game
                        </textarea>
                    </label> <br />
                    <input type="submit" name="" value="Create game"/>
                </form>
            </DefaultLayout>
        );
    }
}

module.exports = New;