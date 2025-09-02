import React from 'react'
import {
  Box,
  Heading,
  Text,
  TextField,
  Flex,
  Button
} from "@radix-ui/themes";

const Register = () => {
  return (
    <>
      <Box style={{ width: "400px", margin: "24px auto" }}>
        <Heading align="center">Register</Heading>
      
      <form>
        <Box style={{ margin: "16px 0" }}>
          <Text as="label" size="3" weight="medium">Email</Text>
          <TextField.Root type="email" placeholder="Enter your email" />
        </Box>
        <Box style={{ margin: "16px 0" }}>
          <Text as="label" size="3" weight="medium">Password</Text>
          <TextField.Root type="email" placeholder="Enter your password" />
        </Box>
        <Box style={{ margin: "16px 0" }}>
          <Text as="label" size="3" weight="medium">Confirm Password</Text>
          <TextField.Root type="email" placeholder="Confirm your password" />
        </Box>
        <Flex align="center" gap="3" >
	      <Button variant="solid">Submit</Button>
	     <Button variant="soft">Reset</Button>
         </Flex>
        
      </form>
      </Box>
    </>
  )
}

export default Register;

