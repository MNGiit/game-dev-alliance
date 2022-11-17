const React = require("react");
const DefaultLayout = require("../layouts/Default");
// const DefaultLayout = require("./layouts/Default");

class Edit extends React.Component {
    render() {
        // Put props obj to destructure //
        // const { exampleOfSomething } = this.props; // also try const exampleOfSomething = this.props.exampleOfSomething
        const game = this.props.game;

        return (
            // <DefaultLayout title={"Title"}>
            // Could use fieldset
            <DefaultLayout title={"Edit"}>
                <h1>Edit game</h1>
                <form action={`/games/${game.id}?_method=PUT`} method="POST">
                    <label>
                        Name: <input type="text" name="title" defaultValue={game.title} required />
                    </label> <br />
                    <label>
                        Img URL: <input type="text" name="imgurl" defaultValue={game.imgurl} />
                    </label> <br />
                    <label>
                        <textarea name="description" rows="5" cols="100" defaultValue={game.description}></textarea>
                    </label> <br />
                    <input type="submit" name="" value="Save changes"/>
                </form>
            </DefaultLayout>
        );
    }
}

module.exports = Edit;