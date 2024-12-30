import styled from '@emotion/styled';
import { useParams, useNavigate } from 'react-router-dom';

const PageContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  color: white;
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.text};
  margin-bottom: 2rem;
  text-align: center;
`;

const BackButton = styled.button`
  background: ${props => props.theme.colors.primary};
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 1rem;
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const PhotoCard = styled.div`
  background: rgba(32, 32, 32, 0.6);
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: 1024px) {
    grid-column: span 2;
  }

  @media (max-width: 768px) {
    grid-column: 1 / -1;
  }
`;

const PhotoImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

// Add the same albums data
const albums = [
  // ... copy the same albums array from PhotographyPage
];

function AlbumViewPage() {
  const { location } = useParams();
  const navigate = useNavigate();

  // Find the correct album based on URL
  const album = albums.find(a => 
    a.location.toLowerCase() === location.toLowerCase()
  );

  if (!album) {
    return (
      <PageContainer>
        <BackButton onClick={() => navigate('/photography')}>← Back to Albums</BackButton>
        <Title>Album not found</Title>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <BackButton onClick={() => navigate('/photography')}>← Back to Albums</BackButton>
      <Title>{album.location}</Title>
      <PhotoGrid>
        {album.photos.map(photo => (
          <PhotoCard key={photo.id}>
            <PhotoImage src={photo.src} alt={album.location} />
          </PhotoCard>
        ))}
      </PhotoGrid>
    </PageContainer>
  );
}

export default AlbumViewPage; 