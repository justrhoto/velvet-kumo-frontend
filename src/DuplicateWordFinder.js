import { Container, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

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
        return words.map((word, index) => {
            const isDuplicate = duplicates.includes(word.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ''));
            return (
                <span key={index}>
                    <span style={{ backgroundColor: isDuplicate ? 'yellow' : 'transparent' }}>
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
