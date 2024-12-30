import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

const AlbumGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 1rem;
`;

const AlbumCard = styled.div`
  background: rgba(32, 32, 32, 0.6);
  border-radius: 12px;
  padding: 1rem;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    background: rgba(32, 32, 32, 0.8);
  }
`;

const AlbumCover = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  border-radius: 8px;
`;

const AlbumImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AlbumInfo = styled.div`
  padding: 1rem;
  color: ${props => props.theme.colors.text};
`;

const AlbumDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
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

const PhotoCount = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.5rem;
  border-radius: 4px;
`;

const TestButton = styled.button`
  background: ${props => props.theme.colors.primary};
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
`;

// Replace the testAlbum with an albums array
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
      { id: 1, src: `${import.meta.env.BASE_URL}assets/photos/NYC/photo1.jpg` },
      { id: 2, src: `${import.meta.env.BASE_URL}assets/photos/NYC/photo2.jpg` },
      { id: 3, src: `${import.meta.env.BASE_URL}assets/photos/NYC/photo3.jpg` },
      { id: 4, src: `${import.meta.env.BASE_URL}assets/photos/NYC/photo4.jpg` }
    ]
  },
  {
    id: 3,
    location: 'San Francisco',
    date: '2023',
    coverImage: `${import.meta.env.BASE_URL}assets/photos/SF/cover.jpg`,
    photos: [
      { id: 1, src: `${import.meta.env.BASE_URL}assets/photos/SF/photo1.jpg` },
      { id: 2, src: `${import.meta.env.BASE_URL}assets/photos/SF/photo2.jpg` }
    ]
  },
  {
    id: 4,
    location: 'Seattle',
    date: '2023-2024',
    coverImage: `${import.meta.env.BASE_URL}assets/photos/SEA/cover.jpg`,
    photos: [
      { id: 1, src: `${import.meta.env.BASE_URL}assets/photos/SEA/photo1.jpg` },
      { id: 2, src: `${import.meta.env.BASE_URL}assets/photos/SEA/photo2.jpg` },
      { id: 3, src: `${import.meta.env.BASE_URL}assets/photos/SEA/photo3.jpg` },
      { id: 4, src: `${import.meta.env.BASE_URL}assets/photos/SEA/photo4.jpg` },
      { id: 5, src: `${import.meta.env.BASE_URL}assets/photos/SEA/photo5.jpg` },
      { id: 6, src: `${import.meta.env.BASE_URL}assets/photos/SEA/photo6.jpg` },
      { id: 7, src: `${import.meta.env.BASE_URL}assets/photos/SEA/photo7.jpg` },
      { id: 8, src: `${import.meta.env.BASE_URL}assets/photos/SEA/photo8.jpg` },
      { id: 9, src: `${import.meta.env.BASE_URL}assets/photos/SEA/photo9.jpg` }
    ]
  },
  {
    id: 5,
    location: 'Toronto',
    date: '2017-2024',
    coverImage: `${import.meta.env.BASE_URL}assets/photos/toronto/cover.jpg`,
    photos: [
      { id: 1, src: `${import.meta.env.BASE_URL}assets/photos/toronto/photo1.jpg` },
      { id: 2, src: `${import.meta.env.BASE_URL}assets/photos/toronto/photo2.jpg` },
      { id: 3, src: `${import.meta.env.BASE_URL}assets/photos/toronto/photo3.jpg` },
      { id: 4, src: `${import.meta.env.BASE_URL}assets/photos/toronto/photo4.jpg` },
      { id: 5, src: `${import.meta.env.BASE_URL}assets/photos/toronto/photo5.jpg` },
      { id: 6, src: `${import.meta.env.BASE_URL}assets/photos/toronto/photo6.jpg` },
      { id: 7, src: `${import.meta.env.BASE_URL}assets/photos/toronto/photo7.jpg` },
      { id: 8, src: `${import.meta.env.BASE_URL}assets/photos/toronto/photo8.jpg` },
      { id: 9, src: `${import.meta.env.BASE_URL}assets/photos/toronto/photo9.jpg` },
      { id: 10, src: `${import.meta.env.BASE_URL}assets/photos/toronto/photo10.jpg` },
      { id: 11, src: `${import.meta.env.BASE_URL}assets/photos/toronto/photo11.jpg` }
    ]
  },
  {
    id: 6,
    location: 'Austin',
    date: '2023',
    coverImage: `${import.meta.env.BASE_URL}assets/photos/austin/cover.jpg`,
    photos: [
      { id: 1, src: `${import.meta.env.BASE_URL}assets/photos/austin/photo1.jpg` }
    ]
  },
  {
    id: 7,
    location: 'Bay Area',
    date: '2023',
    coverImage: `${import.meta.env.BASE_URL}assets/photos/Bay/cover.jpg`,
    photos: [
      { id: 1, src: `${import.meta.env.BASE_URL}assets/photos/Bay/cover.jpg` }
    ]
  },
  {
    id: 8,
    location: 'Boston',
    date: '2023',
    coverImage: `${import.meta.env.BASE_URL}assets/photos/boston/cover.jpg`,
    photos: [
      { id: 1, src: `${import.meta.env.BASE_URL}assets/photos/boston/photo1.jpg` },
      { id: 2, src: `${import.meta.env.BASE_URL}assets/photos/boston/photo2.jpg` },
      { id: 3, src: `${import.meta.env.BASE_URL}assets/photos/boston/photo3.jpg` }
    ]
  },
  {
    id: 9,
    location: 'Chicago',
    date: '2023',
    coverImage: `${import.meta.env.BASE_URL}assets/photos/chicago/cover.jpg`,
    photos: [
      { id: 1, src: `${import.meta.env.BASE_URL}assets/photos/chicago/photo1.jpg` }
    ]
  },
  {
    id: 10,
    location: 'Colorado',
    date: '2023',
    coverImage: `${import.meta.env.BASE_URL}assets/photos/CO/cover.jpg`,
    photos: [
      { id: 1, src: `${import.meta.env.BASE_URL}assets/photos/CO/cover.jpg` }
    ]
  },
  {
    id: 11,
    location: 'Detroit',
    date: '2023',
    coverImage: `${import.meta.env.BASE_URL}assets/photos/Detroit/cover.jpg`,
    photos: [
      { id: 1, src: `${import.meta.env.BASE_URL}assets/photos/Detroit/photo1.jpg` }
    ]
  },
  {
    id: 12,
    location: 'Los Angeles',
    date: '2023',
    coverImage: `${import.meta.env.BASE_URL}assets/photos/LA/cover.jpg`,
    photos: [
      { id: 1, src: `${import.meta.env.BASE_URL}assets/photos/LA/photo1.jpg` },
      { id: 2, src: `${import.meta.env.BASE_URL}assets/photos/LA/photo2.jpg` },
      { id: 3, src: `${import.meta.env.BASE_URL}assets/photos/LA/photo3.jpg` },
      { id: 4, src: `${import.meta.env.BASE_URL}assets/photos/LA/photo4.jpg` },
      { id: 5, src: `${import.meta.env.BASE_URL}assets/photos/LA/photo5.jpg` }
    ]
  },
  {
    id: 13,
    location: 'Monterey',
    date: '2023',
    coverImage: `${import.meta.env.BASE_URL}assets/photos/Monterey/cover.jpg`,
    photos: [
      { id: 1, src: `${import.meta.env.BASE_URL}assets/photos/Monterey/photo1.jpg` },
      { id: 2, src: `${import.meta.env.BASE_URL}assets/photos/Monterey/photo2.jpg` }
    ]
  },
  {
    id: 14,
    location: 'Portland',
    date: '2023',
    coverImage: `${import.meta.env.BASE_URL}assets/photos/Portland/cover.jpg`,
    photos: [
      { id: 1, src: `${import.meta.env.BASE_URL}assets/photos/Portland/photo1.jpg` }
    ]
  },
  {
    id: 15,
    location: 'Utah',
    date: '2023',
    coverImage: `${import.meta.env.BASE_URL}assets/photos/UT/cover.jpg`,
    photos: [
      { id: 1, src: `${import.meta.env.BASE_URL}assets/photos/UT/photo1.jpg` },
      { id: 2, src: `${import.meta.env.BASE_URL}assets/photos/UT/photo2.jpg` },
      { id: 3, src: `${import.meta.env.BASE_URL}assets/photos/UT/photo3.jpg` }
    ]
  },
  {
    id: 16,
    location: 'Vancouver',
    date: '2023',
    coverImage: `${import.meta.env.BASE_URL}assets/photos/van/cover.jpg`,
    photos: [
      { id: 1, src: `${import.meta.env.BASE_URL}assets/photos/van/photo1.jpg` },
      { id: 2, src: `${import.meta.env.BASE_URL}assets/photos/van/photo2.jpg` }
    ]
  },
  {
    id: 17,
    location: 'Las Vegas',
    date: '2023',
    coverImage: `${import.meta.env.BASE_URL}assets/photos/vegas/cover.jpg`,
    photos: [
      { id: 1, src: `${import.meta.env.BASE_URL}assets/photos/vegas/photo1.jpg` },
      { id: 2, src: `${import.meta.env.BASE_URL}assets/photos/vegas/photo2.jpg` },
      { id: 3, src: `${import.meta.env.BASE_URL}assets/photos/vegas/photo3.jpg` },
      { id: 4, src: `${import.meta.env.BASE_URL}assets/photos/vegas/photo4.jpg` }
    ]
  },
  {
    id: 18,
    location: 'Washington DC',
    date: '2023',
    coverImage: `${import.meta.env.BASE_URL}assets/photos/DC/cover.jpg`,
    photos: [
      { id: 1, src: `${import.meta.env.BASE_URL}assets/photos/DC/photo1.jpg` },
      { id: 2, src: `${import.meta.env.BASE_URL}assets/photos/DC/photo2.jpg` }
    ]
  }
];

function PhotographyPage() {
  const navigate = useNavigate();

  const handleAlbumClick = (album) => {
    const formattedLocation = album.location.toLowerCase().replace(/\s+/g, '-');
    navigate(`/photography/${formattedLocation}`);
  };

  return (
    <PageContainer>
      <Title>Photography</Title>
      <AlbumGrid>
        {albums.map(album => (
          <AlbumCard 
            key={album.id}
            onClick={() => handleAlbumClick(album)}
          >
            <AlbumCover>
              <AlbumImage src={album.coverImage} alt={album.location} />
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
    </PageContainer>
  );
}

export default PhotographyPage; 