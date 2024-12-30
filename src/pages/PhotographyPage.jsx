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

// Test with one album first
const testAlbum = {
  id: 1,
  location: 'Arizona',
  date: '2024',
  coverImage: `${import.meta.env.BASE_URL}assets/photos/AZ/cover.jpg`,
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

function PhotographyPage() {
  const navigate = useNavigate();

  const handleAlbumClick = (album) => {
    navigate(`/photography/${album.location.toLowerCase()}`);
  };

  return (
    <PageContainer>
      <Title>Photography</Title>
      <AlbumGrid>
        <AlbumCard onClick={() => handleAlbumClick(testAlbum)}>
          <AlbumCover>
            <AlbumImage src={testAlbum.coverImage} alt={testAlbum.location} />
            <PhotoCount>{testAlbum.photos.length} photos</PhotoCount>
          </AlbumCover>
          <AlbumInfo>
            <AlbumDescription>
              📍 {testAlbum.location}<br />
              📅 {testAlbum.date}
            </AlbumDescription>
          </AlbumInfo>
        </AlbumCard>
      </AlbumGrid>
    </PageContainer>
  );
}

export default PhotographyPage; 