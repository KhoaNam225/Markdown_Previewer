import React from 'react';

/**
 * This component displays the parsed content
 * 
 * @param {String} props.text The parsed content (ready to be displayed) 
 */
const Result = (props) => {
    const htmlContent = { __html: props.text };

    return (
        <div id="preview" dangerouslySetInnerHTML={htmlContent} ss-container>
        </div>
    );
}

export default Result;