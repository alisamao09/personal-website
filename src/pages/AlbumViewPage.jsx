import styled from '@emotion/styled';
import { useParams, useNavigate } from 'react-router-dom';

const PageContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  color: white;
  position: relative;
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.text};
  margin: 4rem 0 2rem;
  text-align: center;
`;

const BackButton = styled.button`
  background: ${props => props.theme.colors.primary};
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  position: absolute;
  top: 2rem;
  left: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.2s;

  &:hover {
    background: ${props => props.theme.colors.secondary};
  }
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 1rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const PhotoCard = styled.div`
  background: rgba(32, 32, 32, 0.6);
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 4/3;

  @media (max-width: 1024px) {
    grid-column: span 2;
  }

  @media (max-width: 768px) {
    grid-column: 1 / -1;
  }
`;

const PhotoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

// Add the complete albums data
const albums = [
  {
    id: 1,
    location: 'Arizona',
    date: '2024',
    coverImage: `${import.meta.env.BASE_URL}assets/photos/AZ/cover.jpg`,
    photos: [
      { id: 1, src: `${import.meta.env.BASE_URL}assets/photos/AZ/photo1.jpg` },
      { id: 2, src: `${import.meta.env.BASE_URL}assets/photos/AZ/photo2.jpg` },
      { id: 3, src: `${import.meta.env.BASE_URL}assets/photos/AZ/photo3.jpg` },
      { id: 4, src: `${import.meta.env.BASE_URL}assets/photos/AZ/photo4.jpg` },
      { id: 5, src: `${import.meta.env.BASE_URL}assets/photos/AZ/photo5.jpg` },
      { id: 6, src: `${import.meta.env.BASE_URL}assets/photos/AZ/photo6.jpg` },
      { id: 7, src: `${import.meta.env.BASE_URL}assets/photos/AZ/photo7.jpg` }
    ]
  },
  {
    id: 2,
    location: 'New York',
    date: '2021-2024',
    coverImage: `${import.meta.env.BASE_URL}assets/photos/NYC/cover.jpg`,
    photos: [
      {
        id: 1,
        src: `${import.meta.env.BASE_URL}assets/photos/NYC/photo1.jpg`,
      },
      {
        id: 2,
        src: `${import.meta.env.BASE_URL}assets/photos/NYC/photo2.jpg`,
      },
      {
        id: 3,
        src: `${import.meta.env.BASE_URL}assets/photos/NYC/photo3.jpg`,
      },
      {
        id: 4,
        src: `${import.meta.env.BASE_URL}assets/photos/NYC/photo4.jpg`,
      }
    ]
  },
  {
    id: 3,
    location: 'San Francisco',
    date: '2023',
    coverImage: `${import.meta.env.BASE_URL}assets/photos/SF/cover.jpg`,
    photos: [
      {
        id: 1,
        src: `${import.meta.env.BASE_URL}assets/photos/SF/cover.jpg`,
      },
      {
        id: 2,
        src: `${import.meta.env.BASE_URL}assets/photos/SF/photo1.jpg`,
      },
      {
        id: 3,
        src: `${import.meta.env.BASE_URL}assets/photos/SF/photo2.jpg`,
      }
    ]
  },
  {
    id: 4,
    location: 'Seattle',
    date: '2023-2024',
    coverImage: `${import.meta.env.BASE_URL}assets/photos/SEA/cover.jpg`,
    photos: [
      // Add all Seattle photos
    ]
  },
  {
    id: 5,
    location: 'Toronto',
    date: '2017-2024',
    coverImage: `${import.meta.env.BASE_URL}assets/photos/toronto/cover.jpg`,
    photos: [
      // Add all Toronto photos
    ]
  },
  // Add all other albums:
  // - Austin
  // - Bay Area
  // - Boston
  // - Chicago
  // - Colorado
  // - Detroit
  // - Los Angeles
  // - Monterey
  // - Portland
  // - Utah
  // - Vancouver
  // - Las Vegas
  // - Washington DC
];

function AlbumViewPage() {
  const { location } = useParams();
  const navigate = useNavigate();

  console.log('URL location:', location); // Add this for debugging

  // Update the find logic to handle spaces and special characters
  const album = albums.find(a => {
    const normalizedAlbumLocation = a.location.toLowerCase().replace(/\s+/g, '-');
    const normalizedUrlLocation = location.toLowerCase().replace(/\s+/g, '-');
    console.log('Comparing:', normalizedAlbumLocation, 'with', normalizedUrlLocation); // Debug
    return normalizedAlbumLocation === normalizedUrlLocation;
  });

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
      <BackButton onClick={() => navigate('/photography')}>
        ← Back to Albums
      </BackButton>
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