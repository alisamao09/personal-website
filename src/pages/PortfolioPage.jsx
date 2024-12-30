import { useState } from 'react';
import styled from '@emotion/styled';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const PDFContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background: rgba(32, 32, 32, 0.6);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  width: 100%;
`;

const Controls = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: ${props => props.theme.colors.secondary};
  }

  &:disabled {
    background: gray;
    cursor: not-allowed;
  }
`;

const PageInfo = styled.div`
  color: ${props => props.theme.colors.text};
  margin: 0 1rem;
  display: flex;
  align-items: center;
`;

const LoadingMessage = styled.div`
  color: ${props => props.theme.colors.text};
  padding: 2rem;
`;

const ErrorMessage = styled.div`
  color: ${props => props.theme.colors.accent};
  padding: 2rem;
`;

function PortfolioPage() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setError(null);
  }

  function onDocumentLoadError(err) {
    console.error('PDF Load Error:', err);
    setError('Failed to load PDF. Please try again later.');
  }

  return (
    <Container>
      <PDFContainer>
        <Controls>
          <Button 
            onClick={() => setPageNumber(prev => Math.max(prev - 1, 1))}
            disabled={pageNumber <= 1}
          >
            Previous
          </Button>
          <PageInfo>
            Page {pageNumber} of {numPages}
          </PageInfo>
          <Button 
            onClick={() => setPageNumber(prev => Math.min(prev + 1, numPages))}
            disabled={pageNumber >= numPages}
          >
            Next
          </Button>
        </Controls>

        {error ? (
          <ErrorMessage>{error}</ErrorMessage>
        ) : (
          <Document
            file="/assets/portfolio.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={<LoadingMessage>Loading PDF...</LoadingMessage>}
          >
            <Page 
              pageNumber={pageNumber} 
              renderTextLayer={false}
              renderAnnotationLayer={false}
              width={Math.min(window.innerWidth - 200, 1000)}
              scale={1.2}
              loading={<LoadingMessage>Loading page...</LoadingMessage>}
              error={<ErrorMessage>Error loading page.</ErrorMessage>}
            />
          </Document>
        )}
      </PDFContainer>
    </Container>
  );
}

export default PortfolioPage; 