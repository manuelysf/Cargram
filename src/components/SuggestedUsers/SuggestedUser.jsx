import { Avatar, Box, Button, Flex, Link, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import useFollowUser from '../../hooks/useFollowUser'
import useAuthStore from '../../store/authStore';
import { Link as RouterLink } from "react-router-dom";

const SuggestedUser = ({user,setUser}) => {
    const {isFollowing,isUpdating,handleFollowUser} = useFollowUser(user.uid);
    const authUser = useAuthStore(state => state.user);

    const onFollowUser = async () => {
        await handleFollowUser();
        setUser({
            ...user,
            followers: isFollowing
				? user.followers.filter((follower) => follower.uid !== authUser.uid)
				: [...user.followers, authUser],
        })
    }

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        
            <Link
                to={`/${user?.username}`}
				as={RouterLink}>
                    <Flex  alignItems={"center"} gap={2}>
                        <Avatar src={user.profilePicURL} size={"md"}/>
                        <VStack spacing={2} alignItems={"flex-start"}>
                            <Box fontSize={12} fontFamily={"bold"}>
                                {user.fullName}
                            </Box>
                            <Box fontSize={11} color={"gray.500"}>
                                {user.followers.length} followers
                            </Box>
                        </VStack>
                    </Flex>
            </Link>
        {/* Follow btn bei eigenem profil verbergen */}
       {authUser.uid !== user.uid && (
         <Button 
            fontSize={13} 
            bg={"transparent"} 
            p={0} h={"max-content"} 
            fontWeight={"medium"} 
            color={"blue.400"} 
            cursor={"pointer"} 
            _hover={{color: "white"}}
            onClick={onFollowUser}
            isLoading={isUpdating}
            >
            {isFollowing ? "Unfollow" : "Follow"}
        </Button>
       )}
    </Flex>
  )
}

export default SuggestedUser