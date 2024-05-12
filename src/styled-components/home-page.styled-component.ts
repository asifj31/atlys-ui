import styled from 'styled-components';

export const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #191920;
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  color: #7f8084;
  font-size: 16px;
  font-weight: 400;
  max-width: 700px;
  padding: 57px 0;
`;

export const GreetingContainer = styled.div``;

export const GreetingHeader = styled.div`
  color: #c5c7ca;
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
  padding: 12px 0;
`;
export const GreetingDescription = styled.div`
  line-height: 24px;
  margin-bottom: 40px;
`;

export const PostWrapper = styled.div`
  width: 700px;
  border: 2px solid #35373b;
  border-radius: 8px;
  padding: 24px 20px;
  background: #27292d;
  margin-bottom: 16px;
`;

export const CreatePostHeader = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 21.78px;
  color: #c5c7ca;
`;

export const CreatePostInput = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 21.78px;
  color: #c5c7ca;
  border-radius: 8px;
  background: #191920;
  margin: 16px 0;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 16px;
  padding: 15px 16px;
`;

export const PostInputField = styled.textarea`
  width: 100%;
  background: inherit;
  border: none;
  resize: none;
  color: inherit;
  font-size: 16px;
  font-weight: 400;

  &:focus {
    outline: none;
  }
`;

export const PostButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

export const PostButton = styled.button`
  background: #4a96ff;
  width: 111px;
  height: 43px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;

export const EmojiContainer = styled.div`
  background: #27292d;
  min-height: 48px;
  min-width: 48px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexContainer = styled.div<{
  $justifyContent?: string;
  $alignItems?: string;
  $gap?: string;
}>`
  display: flex;
  justify-content: ${({ $justifyContent: justifyContent }) =>
    justifyContent || 'flex-start'};
  align-items: ${({ $alignItems: alignItems }) => alignItems || 'stretch'};
  gap: ${({ $gap: gap }) => (gap ? `${gap}px` : '0')};
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const UserName = styled.span`
  color: #c5c7ca;
  font-size: 16px;
  font-weight: 500;
`;

export const TimeStamp = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

export const KebabIcon = styled.img`
  cursor: pointer;
`;

export const MessageText = styled.div`
  color: #7f8084;
  fontsize: '16px';
`;

export const CommentInfo = styled(FlexContainer)<{
  $alignItems?: string;
}>`
  gap: 8px;
`;
