import { Box, Grid, Skeleton, VStack } from '@chakra-ui/react'
import React from 'react'
import ProfilePost from './ProfilePost';
import useGetUserPosts from '../../hooks/useGetUserPosts';
import PostsNotFound from '../../pages/NotFoundPage/PostsNotFound';

const ProfilePosts = () => {

    const {isLoading,posts} = useGetUserPosts();
  
    const noPostsFound = !isLoading && posts.length === 0;
    if(noPostsFound) return <PostsNotFound/>

  return (
    <Grid
        templateColumns={{
            sm:"repeat(1, 1fr)",
            md:"repeat(3, 1fr)"
        }}
        gap={1}
        columnGap={1}>

        {isLoading && [0,1,2,].map((_,idx) => (
           <VStack key={idx} alignItems={"flex-start"} gap={4}>
                <Skeleton w={"full"}> 
                    <Box h={"300px"}>contents wrapped</Box>
                </Skeleton>
           </VStack>
        ))}

        {!isLoading && (
            <>
                {posts.map((post) => (
                    <ProfilePost post={post} key={post.id}/>
                ))}
            </>
        )}
        

    </Grid>
  )
}

export default ProfilePosts