import styled from '@emotion/styled';
import React from 'react';
import {
  AiOutlineCompass as Compass,
  AiOutlineStar as Star,
} from 'react-icons/ai';
import tw from 'twin.macro';

export interface Props {
  /** The item to show in the card. */
  item: RepositoryItem;
}

export interface RepositoryItem {
  /** A short description of the project. */
  description: string;
  /** The project name. */
  name: string;
  /** The number of stars on the github repo. */
  stars: number;
  /** The url of the project. */
  url: string;
}

const RepositoryCard = ({ item }: Props) => {
  return (
    <Container>
      <HeaderText>{item.name}</HeaderText>
      <MainText>{item.description}</MainText>
      <MetaContainer>
        <MetaItem href={item.url}>
          <Compass /> More Info
        </MetaItem>

        <MetaItem href={`${item.url}/stargazers`}>
          <Star /> {item.stars}
        </MetaItem>
      </MetaContainer>
    </Container>
  );
};

const Container = tw.div`flex-grow flex-wrap items-start rounded-md mx-auto px-8 py-8 max-w-md shadow font-body bg-background2 text-main hover:shadow-lg`;

const HeaderText = tw.h1`text-lg hover:text-primary pb-8 hover:cursor-pointer font-semibold`;

const MainText = tw.p`text-base pb-8`;

const MetaContainer = tw.p`flex self-end justify-between`;

const MetaItem = styled.a`
  ${tw`hover:text-primary hover:cursor-pointer`};
  svg {
    ${tw`inline-block text-accent`}
  }
`;

export default RepositoryCard;
