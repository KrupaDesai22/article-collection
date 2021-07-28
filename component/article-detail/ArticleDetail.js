import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import * as Styled from './ArticleDetail.styled';

const ArticleDetail = ({ data }) => {
  const { image, title, publishDate, body } = data;

  return (
    <Styled.Container>
      <Styled.Image src={image.url} alt={image.description} />
      <Styled.Content>
        <Styled.H1>{title}</Styled.H1>
        <Styled.PublishDate>
          {new Date(publishDate).toDateString()}
        </Styled.PublishDate>
      </Styled.Content>
      <Styled.Body>{documentToReactComponents(body.json)}</Styled.Body>
    </Styled.Container>
  );
};

export default ArticleDetail;