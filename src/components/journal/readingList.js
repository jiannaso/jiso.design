import React from 'react';

export const ReadingList = ({ books }) => {
    const renderTextWithLineBreaks = (text) => {
        if (!text) return null;
        return text.split('\n').map((line, index, array) => (
            <React.Fragment key={index}>
                {line}
                {index < array.length - 1 && <br />}
            </React.Fragment>
        ));
    };

    return (
    <div>
        {books.map((item) => (
                <div className="info-list-item" style={{display: 'flex', flexDirection: 'row',paddingTop: "20px"}}>

                <div style={{width:'100%'}}>
        <p style={{color: "gray"}} key={item.id}>{item.dateRead}</p>
        {item.title && <h3>{item.title}</h3>}
        {item.author && <h4>{item.author}</h4>}

        <p key={item.id}>{renderTextWithLineBreaks(item.reviewText)}</p>
        <p><a style={{textAlign: 'left'}}href={item.link} key={item.id}>{item.linkname}</a></p>
        

        </div>
            </div>
      ))}
        </div>
    );
        }
    export default ReadingList;