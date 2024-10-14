import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import FeedPost from './FeedPost'

const FeedPosts = () => {
    const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        },1000)
    },[])

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
        {isLoading && [0,1,2,3].map((_,idx) => (
            <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
                <Flex gap={2}>
                    <SkeletonCircle size={10}/>
                    <VStack gap={2} alignItems={"flex-start"}>
                        <Skeleton height={"10px"} w={"200px"}/>
                        <Skeleton height={"10px"} w={"120px"}/>
                    </VStack>
                </Flex>
                <Skeleton w={"full"}>
                    <Box h={"500px"}>contents wrapped</Box>
                </Skeleton>
            </VStack>
        ))}

        {!isLoading && (
            <>
                <FeedPost img='/img1.jpg' username='manuel.ysf' avatar='/img1.jpg' />
                <FeedPost img='/img2.jpg' username='josh' avatar='/img2.jpg' />
                <FeedPost img='/img3.jpg' username='jana' avatar='/img3.jpg' />
                <FeedPost img='/img4.jpg' username='john' avatar='/img4.jpg' />
            </>
        )}
    </Container>
  )
}

export default FeedPosts