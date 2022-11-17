const React = require("react"); // must have
const DefaultLayout = require("../layouts/Default");

class Show extends React.Component {
    render() {
        // Put props obj to destructure
        const { article } = this.props; // also works: const pokemon = this.props.pokemon;

        // Return. Must have parent element or <> </>
        return (
        <DefaultLayout title={"Article"}>
    
            <h2>{article.title}</h2>
            <h3>By: {article.username}</h3>
            <p>{article.content}</p>
            <a href={`/articles/${article.id}/edit`}>Edit</a><br />
            <a href="/articles">back</a><br />
            <form action={`/articles/${article.id}?_method=DELETE`} method="POST">
                <input type="submit" value="Delete" />
            </form>            
        </DefaultLayout>
        );
    }
}

module.exports = Show;