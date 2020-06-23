import React from 'react';

/**
 * This component represents the editor area
 * 
 * @param {String} props.content The raw content in the editor area
 * @param {Function} props.handleChange The handler when the content changes 
 */
const EditorArea = (props) => {
    const { content, handleChange } = props;
    
    return (
        <div id="editor-container">
            <textarea id="editor" value={content} onChange={handleChange}>
            </textarea>
        </div>
    );
}

export default EditorArea;