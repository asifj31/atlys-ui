import React, { useContext } from 'react';
import {
  OuterContainer,
  Container,
  GreetingHeader,
  GreetingDescription,
} from '../styled-components/home-page.styled-component.ts';
import PostDialog from './post-dialog.tsx';
import CreatePostDialog from './create-post-dialog.tsx';
import { GlobalStateContext } from '../state/glabal-state.tsx';

export default function HomePage() {
  const [globalState] = useContext(GlobalStateContext);
  const userName = globalState.userName ?? 'Jane';
  const allPostMetaData = globalState.allPostMetaData;

  return (
    <OuterContainer>
      <Container>
        <GreetingHeader>Hello {userName}</GreetingHeader>
        <GreetingDescription>
          How are you doing today? Would you like to share something with the
          <br />
          community 🤗
        </GreetingDescription>

        <CreatePostDialog />

        {allPostMetaData.map((postData, key) => {
          return <PostDialog key={key} {...postData} />;
        })}
      </Container>
    </OuterContainer>
  );
}
