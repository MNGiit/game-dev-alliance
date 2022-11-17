const React = require("react");
const DefaultLayout = require("../layouts/Default");

class New extends React.Component {
    render() {
        // Put props obj to destructure //
        // const { exampleOfSomething } = this.props; // also try const exampleOfSomething = this.props.exampleOfSomething

        return (
            // <DefaultLayout title={"Title"}>
            // Could use fieldset
            <DefaultLayout title={"New"}>
                <h1>Create new article</h1>
                <form action="/articles/new" method="POST">
                    <label>
                        Title: <input type="text" name="title" required />
                    </label> <br />
                    <label>
                        <textarea name="content" rows="35" cols="150">
                            Write your article here.
                        </textarea>
                    </label> <br />
                    <input type="submit" name="" value="Create article"/>
                </form>
            </DefaultLayout>
        );
    }
}

module.exports = New;