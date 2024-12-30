import styled from '@emotion/styled';
import { useState } from 'react';

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

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  flex-direction: column;
  z-index: 9999;
  padding: 2rem;
  overflow-y: auto;
`;

const ModalContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  flex: 1;
  overflow-y: auto;
`;

const CloseButton = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  z-index: 10000;
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
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const handleAlbumClick = (album) => {
    alert('Album clicked!');
    console.log('Album clicked:', album);
    setSelectedAlbum(album);
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

      {selectedAlbum && (
        <Modal onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={() => setSelectedAlbum(null)}>×</CloseButton>
          <ModalContent>
            <Title>{selectedAlbum.location}</Title>
            <PhotoGrid>
              {selectedAlbum.photos.map(photo => (
                <PhotoCard key={photo.id}>
                  <PhotoImage src={photo.src} alt={selectedAlbum.location} />
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