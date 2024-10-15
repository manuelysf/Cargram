import { Avatar, AvatarGroup, Button, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const ProfileHeader = () => {
  return (
    <Flex gap={{base:4,sm:10}} py={10} direction={{base:"column",sm:"row"}}>
        <AvatarGroup
        size={{base:"xl",md:"2xl"}}
        justifySelf={"center"}
        alignSelf={"flex-start"}
        mx={"auto"}>
            <Avatar name='Manuel Youssef' src='/profilepic.png' alt='profile Pic' />
        </AvatarGroup>

        <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
            <Flex
                gap={4}
                direction={{base:"column",sm:"row"}}
                justifyContent={{base:"center",sm:"flex-start"}}
                alignItems={"center"}
                w={"full"}>

                <Text fontSize={{base:"sm",md:"lg"}}>
                    manuel.ysf
                </Text>
                
                <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
                    <Button bg={"white"} color={"black"} _hover={{bg:"whiteAlpha.800"}} size={{base:"xs",md:"sm"}}>
                        Edit Profile
                    </Button>
                </Flex>
            </Flex>
            <Flex alignItems={"center"} gap={{base:2,sm:4}}>
                <Text fontSize={{base:"xs",md:"sm"}}>
                    <Text as={"span"} fontWeight={"bold"} mr={1}>4</Text>
                    Posts
                </Text>
                <Text fontSize={{base:"xs",md:"sm"}}>
                    <Text as={"span"} fontWeight={"bold"} mr={1}>144</Text>
                    Followers
                </Text>
                <Text fontSize={{base:"xs",md:"sm"}}>
                    <Text as={"span"} fontWeight={"bold"} mr={1}>105</Text>
                    Following
                </Text>
            </Flex>
            <Flex alignItems={"center"} gap={4}>
                <Text fontSize={"sm"} fontWeight={"bold"}>Manuel Youssef</Text>
            </Flex>
                <Text fontSize={"sm"} >Car enthusiast and hobby mechanic </Text>
        </VStack>
    </Flex>
  )
}

export default ProfileHeader