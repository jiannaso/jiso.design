
import React from 'react';

export const InfoList = ({ people }) => {
    const renderTextWithLineBreaks = (text) => {
        if (!text) return null;
        return text.split('\n').map((line, index, array) => (
            <React.Fragment key={index}>
                {line}
                {index < array.length - 1 && <br />}
            </React.Fragment>
        ));
    };

    const renderTextWithLinks = (text) => {
        if (!text) return null;

        // First split by line breaks
        const lines = text.split('\n');

        const processText = (textContent) => {
            const parts = [];
            let lastIndex = 0;
            let partKey = 0;

            // Find all opening tags
            const openTagRegex = /<(a\s+href=["']([^"']+)["']|b)>/gi;
            const closeTagRegex = /<\/(a|b)>/gi;

            // Collect all tag positions
            const tags = [];
            let match;

            // Find opening tags
            while ((match = openTagRegex.exec(textContent)) !== null) {
                tags.push({
                    index: match.index,
                    type: match[1].startsWith('a') ? 'a-open' : 'b-open',
                    fullMatch: match[0],
                    href: match[2] || null
                });
            }

            // Find closing tags
            while ((match = closeTagRegex.exec(textContent)) !== null) {
                tags.push({
                    index: match.index,
                    type: match[1] === 'a' ? 'a-close' : 'b-close',
                    fullMatch: match[0]
                });
            }

            // Sort tags by position
            tags.sort((a, b) => a.index - b.index);

            // Process tags in pairs
            let i = 0;
            while (i < tags.length) {
                const openTag = tags[i];

                // Add text before the tag
                if (openTag.index > lastIndex) {
                    const textBefore = textContent.substring(lastIndex, openTag.index);
                    if (textBefore) {
                        parts.push({
                            type: 'text',
                            content: textBefore,
                            key: partKey++
                        });
                    }
                }

                // Find matching closing tag
                let depth = 1;
                let j = i + 1;
                const expectedClose = openTag.type === 'a-open' ? 'a-close' : 'b-close';

                while (j < tags.length && depth > 0) {
                    if (tags[j].type === openTag.type) {
                        depth++;
                    } else if (tags[j].type === expectedClose) {
                        depth--;
                    }
                    if (depth > 0) j++;
                }

                if (j < tags.length && depth === 0) {
                    // Found matching closing tag
                    const contentStart = openTag.index + openTag.fullMatch.length;
                    const contentEnd = tags[j].index;
                    const innerContent = textContent.substring(contentStart, contentEnd);

                    if (openTag.type === 'a-open') {
                        parts.push({
                            type: 'link',
                            href: openTag.href,
                            text: processText(innerContent),
                            key: partKey++
                        });
                    } else if (openTag.type === 'b-open') {
                        parts.push({
                            type: 'bold',
                            content: processText(innerContent),
                            key: partKey++
                        });
                    }

                    lastIndex = tags[j].index + tags[j].fullMatch.length;
                    i = j + 1;
                } else {
                    // No matching closing tag, skip
                    lastIndex = openTag.index;
                    i++;
                }
            }

            // Add remaining text
            if (lastIndex < textContent.length) {
                const remainingText = textContent.substring(lastIndex);
                if (remainingText) {
                    parts.push({
                        type: 'text',
                        content: remainingText,
                        key: partKey++
                    });
                }
            }

            return parts.length > 0 ? parts : [{ type: 'text', content: textContent, key: 0 }];
        };

        const renderParts = (parts) => {
            if (!Array.isArray(parts)) {
                return parts;
            }

            return parts.map(part => {
                if (part.type === 'link') {
                    return (
                        <a key={part.key} href={part.href} style={{ textAlign: 'left' }}>
                            {renderParts(part.text)}
                        </a>
                    );
                } else if (part.type === 'bold') {
                    return <strong key={part.key}>{renderParts(part.content)}</strong>;
                } else {
                    return <span key={part.key}>{part.content}</span>;
                }
            });
        };

        return lines.map((line, lineIndex) => {
            const parts = processText(line);

            return (
                <React.Fragment key={lineIndex}>
                    {renderParts(parts)}
                    {lineIndex < lines.length - 1 && <br />}
                </React.Fragment>
            );
        });
    };

    return (
        <div>
            {people.map((item) => (
                <div className="info-list-item" style={{ display: 'flex', flexDirection: 'row'}}>

                    <div className='info-list-text'style={{ width: '100%', paddingRight: '20px', display:'flex', flexDirection:'column', justifyContent: 'space-between'}}>
                        <div>
                        <p style={{ color: "black", fontSize: '.8rem',backgroundColor: "#F1F1F1", padding: "5px", borderRadius: "20px", width: "fit-content", marginBottom: "20px"}} key={item.id}>{renderTextWithLinks(item.desc)}</p>
                        {item.title && <h3>{renderTextWithLinks(item.title)}</h3>}
                        {item.award && <p style={{ color: "black", backgroundColor: "rgba(255, 120, 172, 0.15)", padding: "5px", borderRadius: "5px", width: "fit-content", marginBottom: "20px" }} key={item.id}>{item.award}</p>}
                            </div>
                        
                        <p key={item.id}>{renderTextWithLinks(item.name)}</p>

                        {item.link && item.linkname && (
                            <p><a style={{ textAlign: 'left' }} href={item.link} key={item.id}>{item.linkname}</a></p>
                        )}

                    </div>
                    <img style={{width: '40%'}}className="info-list-image" src={item.img} />

                </div>
            ))}
        </div>
    );
}
export default InfoList;
