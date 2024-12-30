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

function PhotographyPage() {
  return (
    <PageContainer>
      <Title>Photography</Title>
      <AlbumGrid>
        <AlbumCard>Test Album 1</AlbumCard>
        <AlbumCard>Test Album 2</AlbumCard>
        <AlbumCard>Test Album 3</AlbumCard>
      </AlbumGrid>
    </PageContainer>
  );
}

export default PhotographyPage; 