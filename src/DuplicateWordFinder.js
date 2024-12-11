import { Container, Form, Button } from 'react-bootstrap';

function DuplicateWordFinder() {
    const [text, setText] = useState('');
    const [duplicates, setDuplicates] = useState([]);

    const findDuplicates = (e) => {
        e.preventDefault();
        
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

    const highlightDuplicates = (text) => {
        if (!text || duplicates.length === 0) return text;
        
        const regex = new RegExp(`\\b(${duplicates.join('|')})\\b`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
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
                    />
                </Form.Group>
                <Button type="submit" variant="primary">Find Duplicates</Button>
            </Form>
        </Container>
    );
}

export default DuplicateWordFinder;
