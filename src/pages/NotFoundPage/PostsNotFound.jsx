import { Flex, Text } from '@chakra-ui/react';
import React from 'react'

const PostsNotFound = () => {
    return (
		<Flex flexDir='column' textAlign={"center"} mx={"auto"} mt={10}>
			<Text fontSize={"2xl"}>No Posts Found🤔</Text>
		</Flex>
	);
}

export default PostsNotFound