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
  return (
    <PageContainer>
      <Title>Photography</Title>
      <AlbumGrid>
        <AlbumCard>
          <AlbumCover>
            <AlbumImage src={testAlbum.coverImage} alt={testAlbum.location} />
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