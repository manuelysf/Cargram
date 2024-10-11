import { Box, Flex, Link } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { CargramLogo, CargramLogoMobile } from '../../assets/constants'

const Sidebar = () => {
  return (
    <Box
       height={"100vh"}
       borderRight={"1px solid"}
       borderColor={"whiteAlpha.300"}
       py={8}
       position={"sticky"}
       top={0}
       left={0}
       px={{base:2,md:4}}>

        <Flex direction={"column"} gap={10} w={"full"} height={"full"}>
             {/* This way we can add Chakra Sytles to the Link */}
             <Link to={"/"} as={RouterLink} pl={2} display={{ base: "none", md: "block" }} cursor='pointer'>
				<CargramLogo/>
			</Link>
            <Link
					to={"/"}
					as={RouterLink}
					p={2}
					display={{ base: "block", md: "none" }}
					borderRadius={6}
					_hover={{
						bg: "whiteAlpha.200",
					}}
					w={10}
					cursor='pointer'
				>
					<CargramLogoMobile/>
				</Link>
        </Flex>
    </Box>
  )
}

export default Sidebar