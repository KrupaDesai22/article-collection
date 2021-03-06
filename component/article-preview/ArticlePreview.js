import React from 'react';
import Link from 'next/link';

import * as Styled from './ArticlePreview.styled';

const ArticlePreview = ({ tag, title, image, publishDate }) => (
  <Styled.Container>
    <Styled.Image src={image.url} alt={image.description} />
    <Styled.AnchorContainer>
      <Link href="/article/[tag]" as={`/article/${tag}`}>
        <a>
          <Styled.H1>{title}</Styled.H1>
        </a>
      </Link>
    </Styled.AnchorContainer>
    <Styled.PublishDate>
      {new Date(publishDate).toDateString()}
    </Styled.PublishDate>
    <Styled.HorizontalRule />
  </Styled.Container>
);

export default ArticlePreview;