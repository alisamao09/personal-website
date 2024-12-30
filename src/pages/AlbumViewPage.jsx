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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  padding: 1rem;
`;

const PhotoCard = styled.div`
  background: rgba(32, 32, 32, 0.6);
  border-radius: 12px;
  overflow: hidden;
`;

const PhotoImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

function AlbumViewPage() {
  const { location } = useParams();
  const navigate = useNavigate();

  // For testing, use the same album data
  const album = {
    location: 'Arizona',
    photos: [
      {
        id: 1,
        src: `${import.meta.env.BASE_URL}assets/photos/AZ/photo1.jpg`,
      },
      {
        id: 2,
        src: `${import.meta.env.BASE_URL}assets/photos/AZ/photo2.jpg`,
      }
    ]
  };

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