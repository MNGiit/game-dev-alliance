const React = require("react");
// const DefaultLayout = require("./layouts/Default");
const DefaultLayout = require("../layouts/Default");

class New extends React.Component {
    render() {
        // Put props obj to destructure //
        // const { exampleOfSomething } = this.props; // also try const exampleOfSomething = this.props.exampleOfSomething
        const article = this.props.article;

        return (
            // <DefaultLayout title={"Title"}>
            // Could use fieldset
            <DefaultLayout title={"Edit"}>
                <h1>Edit article</h1>
                <form action={`/articles/${article.id}?_method=PUT`} method="POST">
                    <label>
                        Title: <input type="text" name="title" defaultValue={article.title} required />
                    </label> <br />
                    <label>
                        <textarea name="content" rows="35" cols="150" defaultValue={article.content}></textarea>
                    </label> <br />
                    <input type="submit" name="" value="Save changes"/>
                </form>
            </DefaultLayout>
        );
    }
}

module.exports = New;