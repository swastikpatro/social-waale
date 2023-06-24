import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { usePostContext } from '../PostsContextProvider';
import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Center,
  Text,
} from '@chakra-ui/react';
import PostCard from '../components/PostCard';

const SinglePostPage = () => {
  const { postId: postIdFromParam } = useParams();

  const { posts } = usePostContext();

  const postToDisplay = posts.find(
    singlePost => singlePost.postId === postIdFromParam
  );

  if (!postToDisplay) {
    return (
      <Box display={'grid'} placeItems={'center'}>
        <Center>
          <Text color="red">No post found</Text>
          <Link to="/">Ho to Home</Link>
        </Center>
      </Box>
    );
  }
  return (
    <Box>
      <Center>
        <PostCard post={postToDisplay} />
      </Center>

      <Box>
        {postToDisplay.comments.map(comment => (
          <Card key={comment.commentId}>
            <CardHeader>
              <Avatar name={comment.username} src={comment.picUrl}></Avatar>
            </CardHeader>
            <CardBody>
              <Text>{comment.comment}</Text>
            </CardBody>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default SinglePostPage;
