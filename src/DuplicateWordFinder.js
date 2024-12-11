import { Container, Form } from 'react-bootstrap';
import { useState } from 'react';

function generateColorGradient(startColor, endColor, steps) {
    const start = parseInt(startColor.slice(1), 16);
    const end = parseInt(endColor.slice(1), 16);

    const r1 = (start >> 16) & 0xff;
    const g1 = (start >> 8) & 0xff;
    const b1 = start & 0xff;

    const r2 = (end >> 16) & 0xff;
    const g2 = (end >> 8) & 0xff;
    const b2 = end & 0xff;

    const colorArray = [];

    for (let i = 0; i < steps; i++) {
        const r = Math.round(r1 + ((r2 - r1) * i) / (steps - 1));
        const g = Math.round(g1 + ((g2 - g1) * i) / (steps - 1));
        const b = Math.round(b1 + ((b2 - b1) * i) / (steps - 1));

        colorArray.push(`#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`);
    }

    return colorArray;
}

function DuplicateWordFinder() {
    const [text, setText] = useState('');
    const [duplicates, setDuplicates] = useState([]);

    const findDuplicates = () => {
        // Split text into words, convert to lowercase and remove punctuation
        const words = text.toLowerCase()
            .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
            .split(/\s+/);
        
        const wordCounts = {};
        const duplicateWords = [];
        
        words.forEach(word => {
            if (word) {
                wordCounts[word] = (wordCounts[word] || 0) + 1;
                if (wordCounts[word] === 2) {
                    duplicateWords.push(word);
                }
            }
        });
        
        setDuplicates(duplicateWords);
    };

    const renderHighlightedText = () => {
        if (!text) return null;

        const words = text.split(/\s+/);
        const colors = generateColorGradient('#ff0000', '#0000ff', duplicates.length);

        // Create a map of duplicate words to their corresponding colors
        const duplicateColorMap = {};
        duplicates.forEach((word, index) => {
            duplicateColorMap[word] = colors[index];
        });

        return words.map((word, index) => {
            const cleanWord = word.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
            const backgroundColor = duplicateColorMap[cleanWord] || 'transparent';
            const color = backgroundColor === 'transparent' ? 'black' : 'white';
            return (
                <span key={index}>
                    <span style={{ backgroundColor: backgroundColor, color: color }}>
                        {word}
                    </span>
                    {' '}
                </span>
            );
        });
    };

    return (
        <Container>
            <h1>Duplicate Word Finder</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Enter your text:</Form.Label>
                    <Form.Control
                        as="textarea" 
                        rows={10}
                        placeholder="Paste your text here..."
                        onChange={(e) => {setText(e.target.value); findDuplicates();}}
                    />
                </Form.Group>
            </Form>
            <div>
                {renderHighlightedText()}
            </div>
        </Container>
    );
}

export default DuplicateWordFinder;
