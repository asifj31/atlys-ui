import React from 'react';
import {
  PostWrapper,
  CreatePostInput,
  CommentInfo,
  EmojiContainer,
  FlexContainer,
  KebabIcon,
  MessageText,
  TimeStamp,
  UserInfo,
  UserName,
} from '../styled-components/home-page.styled-component.ts';
import { PostMetaDataType } from '../types/post.type.ts';



export default function PostDialog(props: PostMetaDataType) {
  const {
    userName,
    timePassedInMins,
    emoji,
    message,
    commentCount,
    imgSrc,
    edited,
  } = props;

  return (
    <PostWrapper>
      <FlexContainer $justifyContent="space-between">
        <FlexContainer $gap="16">
          <img src={imgSrc} alt="Theresa Webb" />
          <UserInfo>
            <UserName>{userName}</UserName>
            <TimeStamp>
              {timePassedInMins}mins ago {edited && <span>• Edited</span>}
            </TimeStamp>
          </UserInfo>
        </FlexContainer>
        <FlexContainer $justifyContent="center" $alignItems="center">
          <KebabIcon src="./KebabIcon.png" alt="Select emoji" />
        </FlexContainer>
      </FlexContainer>

      <CreatePostInput>
        <EmojiContainer>{emoji}</EmojiContainer>
        <MessageText>{message}</MessageText>
      </CreatePostInput>

      <CommentInfo $alignItems="center">
        <img src="./ChatBubble.png" alt="Select emoji" />
        <span style={{ fontSize: '14px', fontWeight: '500' }}>
          {commentCount} comments
        </span>
      </CommentInfo>
    </PostWrapper>
  );
}
