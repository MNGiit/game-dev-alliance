const React = require("react"); // must have
const DefaultLayout = require("../layouts/Default");

class Show extends React.Component {
    render() {
        // Put props obj to destructure
        const { game } = this.props; // also works: const pokemon = this.props.pokemon;

        // Return. Must have parent element or <> </>
        return (
        <DefaultLayout title={"Show"}>
    
            <h2>{game.name}</h2>
            <img src={game.imgurl + ".jpg"}></img><br />
            <p>{game.description}</p>
            <a href={`/games/${game.id}/edit`}>Edit</a><br />
            <a href="/games">back</a><br />
            <form action={`/games/${game.id}?_method=DELETE`} method="POST">
                <input type="submit" value="Delete" />
            </form>            
        </DefaultLayout>
        );
    }
}

module.exports = Show;