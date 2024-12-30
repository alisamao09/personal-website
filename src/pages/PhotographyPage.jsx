import styled from '@emotion/styled';
import { useState } from 'react';

const PageContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.text};
  margin-bottom: 2rem;
  text-align: center;
`;

const AlbumGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const AlbumCard = styled.div`
  background: rgba(32, 32, 32, 0.6);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s;
  box-shadow: ${props => props.theme.shadows.md};
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 1024px) {
    grid-column: span 2;
  }

  @media (max-width: 768px) {
    grid-column: 1 / -1;
  }
`;

const AlbumCover = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
`;

const AlbumImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PhotoCount = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.5rem;
  border-radius: 4px;
`;

const AlbumInfo = styled.div`
  padding: 1rem;
  color: ${props => props.theme.colors.text};
`;

const AlbumTitle = styled.h3`
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.primary};
`;

const AlbumDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
`;

// Modal components for viewing album photos
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  flex: 1;
  overflow-y: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  padding: 1rem;
`;

// Add these missing components for the modal view
const PhotoCard = styled.div`
  background: rgba(32, 32, 32, 0.6);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.md};
`;

const PhotoImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const PhotoInfo = styled.div`
  padding: 1rem;
  color: ${props => props.theme.colors.text};
`;

const PhotoDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
`;

// Add ImageWithFallback for modal photos
const ModalImage = styled(ImageWithFallback)`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

// Sample data structure
const getAssetPath = (path) => `${import.meta.env.BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`;

const albums = [
  {
    id: 1,
    location: 'Ann Arbor, MI',
    date: '2021 - 2023',
    coverImage: getAssetPath('assets/photos/AA/cover.jpg'),
    photos: [
      {
        id: 1,
        src: getAssetPath('assets/photos/AA/photo1.jpg'),
        caption: 'North Campus'
      },
      {
        id: 2,
        src: getAssetPath('assets/photos/AA/photo2.jpg'),
        caption: 'Central Campus'
      },
      {
        id: 3,
        src: getAssetPath('assets/photos/AA/cover.jpg'),
      },
      // Add more photos
    ]
  },
  {
    id: 2,
    location: 'Austin, TX',
    date: '2023',
    coverImage: getAssetPath('assets/photos/austin/cover.jpg'),
    photos: [
      {
        id: 1,
        src: getAssetPath('assets/photos/austin/photo1.jpg'),
      },
      {
        id: 2,
        src: getAssetPath('assets/photos/austin/cover.jpg'),
      },
    ]
  },
  {
    id: 3,
    location: 'Arizona',
    date: '2024',
    coverImage: getAssetPath('assets/photos/AZ/cover.jpg'),
    photos: [
      {
        id: 1,
        src: getAssetPath('assets/photos/AZ/photo1.jpg'),
      },
      {
        id: 2,
        src: getAssetPath('assets/photos/AZ/photo2.jpg'),
      },
      {
        id: 3,
        src: getAssetPath('assets/photos/AZ/photo3.jpg'),
      },
      {
        id: 4,
        src: getAssetPath('assets/photos/AZ/photo4.jpg'),
      },
      {
        id: 5,
        src: getAssetPath('assets/photos/AZ/photo5.jpg'),
      },
      {
        id: 6,
        src: getAssetPath('assets/photos/AZ/photo6.jpg'),
      },
      {
        id: 7,
        src: getAssetPath('assets/photos/AZ/photo7.jpg'),
      },
      {
        id: 8,
        src: getAssetPath('assets/photos/AZ/cover.jpg'),
      },
    ]
  },
  {
    id: 4,
    location: 'New York',
    date: '2021-2024',
    coverImage: getAssetPath('assets/photos/NYC/cover.jpg'),
    photos: [
      {
        id: 1,
        src: getAssetPath('assets/photos/NYC/photo1.jpg'),
      },
      {
        id: 2,
        src: getAssetPath('assets/photos/NYC/photo2.jpg'),
      },
      {
        id: 3,
        src: getAssetPath('assets/photos/NYC/photo3.jpg'),
      },
      {
        id: 4,
        src: getAssetPath('assets/photos/NYC/photo4.jpg'),
      },
      {
        id: 5,
        src: getAssetPath('assets/photos/NYC/cover.jpg'),
      },
    ]
  },
  {
    id: 5,
    location: 'Toronto',
    date: '2017-2024',
    coverImage: getAssetPath('assets/photos/toronto/cover.jpg'),
    photos: [
      {
        id: 1,
        src: getAssetPath('assets/photos/toronto/cover.jpg'),
      },
      {
        id: 2,
        src: getAssetPath('assets/photos/toronto/photo2.jpg'),
      },
      {
        id: 3,
        src: getAssetPath('assets/photos/toronto/photo3.jpg'),
      },
      {
        id: 4,
        src: getAssetPath('assets/photos/toronto/photo4.jpg'),
      },
      {
        id: 5,
        src: getAssetPath('assets/photos/toronto/photo5.jpg'),
      },
      {
        id: 6,
        src: getAssetPath('assets/photos/toronto/photo6.jpg'),
      },
      {
        id: 7,
        src: getAssetPath('assets/photos/toronto/photo7.jpg'),
      },
      {
        id: 8,
        src: getAssetPath('assets/photos/toronto/photo8.jpg'),
      },
      {
        id: 9,
        src: getAssetPath('assets/photos/toronto/photo9.jpg'),
      },
      {
        id: 10,
        src: getAssetPath('assets/photos/toronto/photo10.jpg'),
      },
      {
        id: 11,
        src: getAssetPath('assets/photos/toronto/photo11.jpg'),
      },
    ]
  },
  {
    id: 6,
    location: 'San Francisco',
    date: '2023',
    coverImage: getAssetPath('assets/photos/SF/cover.jpg'),
    photos: [
      {
        id: 1,
        src: getAssetPath('assets/photos/SF/cover.jpg'),
      },
      {
        id: 2,
        src: getAssetPath('assets/photos/SF/photo1.jpg'),
      },
      {
        id: 3,
        src: getAssetPath('assets/photos/SF/photo2.jpg'),
      },
    ]
  },
  {
    id: 7,
    location: 'Seattle',
    date: '2023-2024',
    coverImage: getAssetPath('assets/photos/SEA/cover.jpg'),
    photos: [
      {
        id: 1,
        src: getAssetPath('assets/photos/SEA/cover.jpg'),
      },
      {
        id: 2,
        src: getAssetPath('assets/photos/SEA/photo1.jpg'),
      },
      {
        id: 3,
        src: getAssetPath('assets/photos/SEA/photo2.jpg'),
      },
      {
        id: 4,
        src: getAssetPath('assets/photos/SEA/photo3.jpg'),
      },
      {
        id: 5,
        src: getAssetPath('assets/photos/SEA/photo4.jpg'),
      },
      {
        id: 6,
        src: getAssetPath('assets/photos/SEA/photo5.jpg'),
      },
      {
        id: 7,
        src: getAssetPath('assets/photos/SEA/photo6.jpg'),
      },
      {
        id: 8,
        src: getAssetPath('assets/photos/SEA/photo7.jpg'),
      },
      {
        id: 9,
        src: getAssetPath('assets/photos/SEA/photo8.jpg'),
      },
    ]
  },
  {
    id: 8,
    location: 'Chicago',
    date: '2022',
    coverImage: getAssetPath('assets/photos/chicago/cover.jpg'),
    photos: [
      {
        id: 1,
        src: getAssetPath('assets/photos/chicago/cover.jpg'),
      },
      {
        id: 2,
        src: getAssetPath('assets/photos/chicago/photo1.jpg'),
      },
    ]
  },
  {
    id: 9,
    location: 'Los Angeles',
    date: '2024',
    coverImage: getAssetPath('assets/photos/LA/cover.jpg'),
    photos: [
      {
        id: 1,
        src: getAssetPath('assets/photos/LA/cover.jpg'),
      },
      {
        id: 2,
        src: getAssetPath('assets/photos/LA/photo1.jpg'),
      },
      {
        id: 3,
        src: getAssetPath('assets/photos/LA/photo2.jpg'),
      },
      {
        id: 4,
        src: getAssetPath('assets/photos/LA/photo3.jpg'),
      },
      {
        id: 5,
        src: getAssetPath('assets/photos/LA/photo4.jpg'),
      },
      {
        id: 6,
        src: getAssetPath('assets/photos/LA/photo5.jpg'),
      },
    ]
  },
  {
    id: 10,
    location: 'Detroit',
    date: '2022',
    coverImage: getAssetPath('assets/photos/Detroit/cover.jpg'),
    photos: [
      {
        id: 1,
        src: getAssetPath('assets/photos/Detroit/cover.jpg'),
      },
      {
        id: 2,
        src: getAssetPath('assets/photos/Detroit/photo1.jpg'),
      },
    ]
  },
  {
    id: 11,
    location: 'Portland',
    date: '2024',
    coverImage: getAssetPath('assets/photos/Portland/cover.jpg'),
    photos: [
      {
        id: 1,
        src: getAssetPath('assets/photos/Portland/cover.jpg'),
      },
      {
        id: 2,
        src: getAssetPath('assets/photos/Portland/photo1.jpg'),
      },
    ]
  },
  {
    id: 12,
    location: 'Las Vegas',
    date: '2024',
    coverImage: getAssetPath('assets/photos/vegas/cover.jpg'),
    photos: [
      {
        id: 1,
        src: getAssetPath('assets/photos/vegas/cover.jpg'),
      },
      {
        id: 2,
        src: getAssetPath('assets/photos/vegas/photo1.jpg'),
      },
      {
        id: 3,
        src: getAssetPath('assets/photos/vegas/photo2.jpg'),
      },
      {
        id: 4,
        src: getAssetPath('assets/photos/vegas/photo3.jpg'),
      },
      {
        id: 5,
        src: getAssetPath('assets/photos/vegas/photo4.jpg'),
      },
    ]
  },
  {
    id: 13,
    location: 'Boston, MA',
    date: '2024',
    coverImage: getAssetPath('assets/photos/boston/cover.jpg'),
    photos: [
      {
        id: 1,
        src: getAssetPath('assets/photos/boston/cover.jpg'),
      },
      {
        id: 2,
        src: getAssetPath('assets/photos/boston/photo1.jpg'),
      },
      {
        id: 3,
        src: getAssetPath('assets/photos/boston/photo2.jpg'),
      },
      {
        id: 4,
        src: getAssetPath('assets/photos/boston/photo3.jpg'),
      },
    ]
  },
  {
    id: 14,
    location: 'Bay Area, CA',
    date: '2023',
    coverImage: getAssetPath('assets/photos/Bay/cover.jpg'),
    photos: [
      {
        id: 1,
        src: getAssetPath('assets/photos/Bay/cover.jpg'),
      },
    ]
  },
  {
    id: 15,
    location: 'Colorado',
    date: '2022-2024',
    coverImage: getAssetPath('assets/photos/CO/cover.jpg'),
    photos: [
      {
        id: 1,
        src: getAssetPath('assets/photos/CO/cover.jpg'),
      },
    ]
  },
  {
    id: 16,
    location: 'Washington, DC',
    date: '2023',
    coverImage: getAssetPath('assets/photos/DC/cover.jpg'),
    photos: [
      {
        id: 1,
        src: getAssetPath('assets/photos/DC/cover.jpg'),
      },
      {
        id: 2,
        src: getAssetPath('assets/photos/DC/photo1.jpg'),
      },
      {
        id: 3,
        src: getAssetPath('assets/photos/DC/photo2.jpg'),
      },
    ]
  },
  {
    id: 17,
    location: 'Monterey, CA',
    date: '2022',
    coverImage: getAssetPath('assets/photos/Monterey/cover.jpg'),
    photos: [
      {
        id: 1,
        src: getAssetPath('assets/photos/Monterey/cover.jpg'),
      },
      {
        id: 2,
        src: getAssetPath('assets/photos/Monterey/photo1.jpg'),
      },
      {
        id: 3,
        src: getAssetPath('assets/photos/Monterey/photo2.jpg'),
      },
    ]
  },
  {
    id: 18,
    location: 'Utah',
    date: '2022',
    coverImage: getAssetPath('assets/photos/UT/cover.jpg'),
    photos: [
      {
        id: 1,
        src: getAssetPath('assets/photos/UT/cover.jpg'),
      },
      {
        id: 2,
        src: getAssetPath('assets/photos/UT/photo1.jpg'),
      },
      {
        id: 3,
        src: getAssetPath('assets/photos/UT/photo2.jpg'),
      },
      {
        id: 4,
        src: getAssetPath('assets/photos/UT/photo3.jpg'),
      },
    ]
  },
  {
    id: 19,
    location: 'Vancouver, BC',
    date: '2024',
    coverImage: getAssetPath('assets/photos/van/cover.jpg'),
    photos: [
      {
        id: 1,
        src: getAssetPath('assets/photos/van/cover.jpg'),
      },
      {
        id: 2,
        src: getAssetPath('assets/photos/van/photo1.jpg'),
      },
      {
        id: 3,
        src: getAssetPath('assets/photos/van/photo2.jpg'),
      },
    ]
  },
  // Add more albums
].map(album => ({
  ...album,
  photos: album.photos.map(photo => ({
    ...photo,
    src: getAssetPath(photo.src)
  }))
}));

// Add this component
const ImageWithFallback = ({ src, alt, ...props }) => {
  const [error, setError] = useState(false);

  const handleError = () => {
    console.error(`Failed to load image: ${src}`);
    setError(true);
  };

  if (error) {
    return <div style={{ 
      width: '100%', 
      height: '100%', 
      backgroundColor: '#333',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    }}>Image not found</div>;
  }

  return <AlbumImage src={src} alt={alt} onError={handleError} {...props} />;
};

function PhotographyPage() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  // Sort albums by date (most recent first)
  const sortedAlbums = [...albums].sort((a, b) => {
    // Extract the latest year from date ranges (e.g., "2021-2024" -> 2024)
    const getLatestYear = date => {
      const years = date.match(/\d{4}/g);
      return years ? Math.max(...years.map(Number)) : 0;
    };

    const yearA = getLatestYear(a.date);
    const yearB = getLatestYear(b.date);

    if (yearA !== yearB) {
      return yearB - yearA; // Sort by year descending
    }

    // If years are the same, sort by location
    return a.location.localeCompare(b.location);
  });

  return (
    <PageContainer>
      <Title>Photography</Title>
      <AlbumGrid>
        {sortedAlbums.map(album => (
          <AlbumCard key={album.id} onClick={() => setSelectedAlbum(album)}>
            <AlbumCover>
              <ImageWithFallback 
                src={album.coverImage} 
                alt={album.location} 
                loading="lazy" 
              />
              <PhotoCount>{album.photos.length} photos</PhotoCount>
            </AlbumCover>
            <AlbumInfo>
              <AlbumDescription>
                📍 {album.location}<br />
                📅 {album.date}
              </AlbumDescription>
            </AlbumInfo>
          </AlbumCard>
        ))}
      </AlbumGrid>

      {selectedAlbum && (
        <Modal>
          <CloseButton onClick={() => setSelectedAlbum(null)}>×</CloseButton>
          <ModalContent>
            <Title>{selectedAlbum.location}</Title>
            <PhotoGrid>
              {selectedAlbum.photos.map(photo => (
                <PhotoCard key={photo.id}>
                  <ImageWithFallback 
                    src={photo.src} 
                    alt={photo.caption || selectedAlbum.location}
                    loading="lazy"
                  />
                  {photo.caption && (
                    <PhotoInfo>
                      <PhotoDescription>{photo.caption}</PhotoDescription>
                    </PhotoInfo>
                  )}
                </PhotoCard>
              ))}
            </PhotoGrid>
          </ModalContent>
        </Modal>
      )}
    </PageContainer>
  );
}

export default PhotographyPage; 