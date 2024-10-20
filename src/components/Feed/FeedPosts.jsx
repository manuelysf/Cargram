import { Box, Container, Flex, Skeleton, SkeletonCircle, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import FeedPost from './FeedPost'
import useGetFeedPosts from '../../hooks/useGetFeedPosts'

const FeedPosts = () => {
    const {isLoading,posts} = useGetFeedPosts();

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
        {isLoading && [0,1,2].map((_,idx) => (
            <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
                <Flex gap={2}>
                    <SkeletonCircle size={10}/>
                    <VStack gap={2} alignItems={"flex-start"}>
                        <Skeleton height={"10px"} w={"200px"}/>
                        <Skeleton height={"10px"} w={"120px"}/>
                    </VStack>
                </Flex>
                <Skeleton w={"full"}>
                    <Box h={"400px"}>contents wrapped</Box>
                </Skeleton>
            </VStack>
        ))}

        {!isLoading && posts.length > 0 && posts.map((post) => <FeedPost key={post.id} post={post}/>)}
        {!isLoading && posts.length === 0 && (

            <Flex flexDir='column' textAlign={"center"} mx={"auto"} mt={10}>
                <Text fontSize={"md"} color={"white.400"}>
                    Dayyyyum. Looks like you don&apos;t have any friends.
                </Text>
                <Text color={"white.400"}>Stop coding and go make some!!</Text>
            </Flex>
		)}
    </Container>
  )
}

export default FeedPosts