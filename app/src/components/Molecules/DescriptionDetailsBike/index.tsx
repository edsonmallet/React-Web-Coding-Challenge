import {
  Button,
  TextParagraph,
  Thumb,
  TitleParagraph,
} from '@/components/Atoms';
import React from 'react';
import { Container } from './styles';
import Link from 'next/link';

interface DescriptionDetailsBikeProps {
  description: string | undefined;
  serial: string | undefined;
  url: string | undefined;
  image: string | undefined;
}

const DescriptionDetailsBike: React.FC<DescriptionDetailsBikeProps> = ({
  description,
  serial,
  url,
  image,
}: DescriptionDetailsBikeProps) => {
  return (
    <Container>
      <TitleParagraph>Descrição</TitleParagraph>
      <TextParagraph>{description}</TextParagraph>
      <TextParagraph>Serial: {serial}</TextParagraph>
      <Link href={url as string}>
        <a target="_blank">
          <Button>Mais Detalhes</Button>
        </a>
      </Link>
      <Thumb url={image} size={300} alt={serial as string} />
    </Container>
  );
};

export { DescriptionDetailsBike };
