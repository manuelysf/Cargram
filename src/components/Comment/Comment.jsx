import { Avatar, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import useGetUserProfileById from '../../hooks/useGetUserProfileById'
import CommentSkeleton from './CommentSkeleton';
import { Link } from 'react-router-dom';
import { timeAgo } from '../../utils/timeAgo';

const Comment = ({comment}) => {
   const {userProfile,isLoading} = useGetUserProfileById(comment.createdBy);
   if(isLoading) return <CommentSkeleton/>
  return (
    <Flex gap={4}>
        <Link to={`/${userProfile.username}`}>
            <Avatar src={userProfile.profilePicURL} size={"sm"}/>
        </Link>
        <Flex direction={"column"}>
            <Flex gap={2} alignItems={"flex-start"}>
                <Link to={`/${userProfile.username}`}>
                    <Text fontSize={14} fontWeight={"bold"}>
                        {userProfile.username}
                    </Text>
                    <Text fontSize={12} color={"gray"}>
                        {timeAgo(comment.createdAt)}    
                    </Text>
                </Link>
                <Text fontSize={14} whiteSpace={"normal"} wordBreak={"break-word"}>
                    {comment.comment}
                </Text>
            </Flex>
            
        </Flex>
    </Flex>
  )
}

export default Comment