import React from 'react'
import PostHeader from './PostHeader'
import { Box, Image } from '@chakra-ui/react'
import PostFooter from './PostFooter'

const FeedPost = () => {
  return (
    <>
        <PostHeader/>
        <Box my={2} borderRadius={4} overflow={"hidden"}>
            <Image src='/img1.jpg' alt='users profile pic'/>
        </Box>
        <PostFooter/>
    </>
  )
}

export default FeedPost