import React, { useContext, useRef } from 'react';
import {
  PostWrapper,
  CreatePostHeader,
  CreatePostInput,
  EmojiContainer,
  PostInputField,
  PostButtonWrapper,
  PostButton,
} from '../styled-components/home-page.styled-component.ts';
import EmojiPicker from 'emoji-picker-react';
import useClickAway from '../hooks/use-click-away.hook.tsx';
import { GlobalStateContext } from '../state/glabal-state.tsx';
import { PostMetaDataType } from '../types/post.type.ts';

export default function CreatePostDialog() {
  const [globalState, setGlobalState] = useContext(GlobalStateContext);
  const [showPicker, setShowPicker] = React.useState(false);
  const [selectedEmoji, setSelectedEmoji] = React.useState('💬');
  const pickerRef = useRef(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const hidePicker = () => {
    setShowPicker(false);
  };

  const addEmoji = emojiObj => {
    setSelectedEmoji(emojiObj.emoji);
    hidePicker();
  };

  const addPost = () => {
    if (!globalState.authenticated) {
      setGlobalState(prevState => ({
        ...prevState,
        hideAuthDialog: false,
      }));

      return;
    }

    let postContent = inputRef.current?.value;

    if (!postContent?.length) {
      postContent = 'Lorem ipsum dolor';
    }

    const postMetaData: PostMetaDataType = {
      message: postContent,
      emoji: selectedEmoji,
      userName: globalState.userName ?? 'Theresa',
      timePassedInMins: 2,
      commentCount: 13,
      edited: false,
      imgSrc: './Theresa.png',
    };

    setGlobalState(prevState => ({
      ...prevState,
      allPostMetaData: [postMetaData, ...prevState.allPostMetaData],
    }));
  };

  useClickAway(pickerRef, hidePicker);

  return (
    <PostWrapper>
      <CreatePostHeader>Create post</CreatePostHeader>
      <CreatePostInput>
        <EmojiContainer
          style={{ cursor: 'pointer' }}
          onClick={() => setShowPicker(!showPicker)}
        >
          <span>{selectedEmoji}</span>
        </EmojiContainer>

        {showPicker && (
          <div ref={pickerRef}>
            <EmojiPicker
              style={{ position: 'absolute' }}
              onEmojiClick={addEmoji}
            />
          </div>
        )}

        <PostInputField
          ref={inputRef}
          placeholder="How are you feeling today?"
        ></PostInputField>
      </CreatePostInput>

      <PostButtonWrapper>
        <PostButton onClick={addPost}>Post</PostButton>
      </PostButtonWrapper>
    </PostWrapper>
  );
}
