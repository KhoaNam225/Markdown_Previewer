import React, { Fragment } from 'react';
import EditorArea from './EditorArea';
import Result from './Result';
import marked from 'marked';

// Set this option so that the marked library will treat the carriage return
// as <br>
marked.setOptions({
    breaks: true
});

/**
 * The main component of the app
 */
class MainApp extends React.Component {
    constructor(props) {
        super(props);
        // The state of the app has 2 parts:
        // - rawContent: the content in the editor (the unparsed markdown code)
        // - markdedContent: the content after parsing
        this.state = {
            rawContent: props.defaultText,
            markedContent: marked(props.defaultText)
        };
    }

    /**
     * Handle the changing of the content in the editor
     * @param {Object} event.target.value The value of the content
     */
    handleChange = (event) => {
        let newContent = event.target.value;
        this.setState({ 
            rawContent: newContent,
            markedContent: marked(newContent)
        });
    }

    render() {
        return (
            <Fragment>
                <h1>React Markdown Previewer</h1>
                <div className="container">
                    <EditorArea content={this.state.rawContent} handleChange={this.handleChange} />
                    <Result text={this.state.markedContent}/>    
                </div>
            </Fragment>
        );
    }
}

export default MainApp;