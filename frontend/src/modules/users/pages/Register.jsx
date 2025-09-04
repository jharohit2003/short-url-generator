import React from 'react'
import {
  Box,
  Heading,
  Text,
  TextField,
  Flex,
  Button
} from "@radix-ui/themes";
import { useRegister } from '../hooks/register-hook';

const Register = () => {
  const {
    doSubmit,
    register,
    handleSubmit,
    
  }=  useRegister();
  return (
    <>
      <Box style={{ width: "400px", margin: "24px auto" }}>
        <Heading align="center">Register</Heading>
      
      <form onSubmit={handleSubmit(doSubmit)}>
        <Box style={{ margin: "16px 0" }}>
          <Text as="label" size="3" weight="medium">Name</Text>
          <TextField.Root {...register("name")} type="name" placeholder="Enter your name" />
        </Box>
        <Box style={{ margin: "16px 0" }}>
          <Text as="label" size="3" weight="medium">Email</Text>
          <TextField.Root {...register("email")}  type="email" placeholder="Enter your email" />
        </Box>
        {/* {errors.email && <Text>{errors.email.message}</Text>} */}
        <Box style={{ margin: "16px 0" }}>
          <Text as="label" size="3" weight="medium">Password</Text>
          <TextField.Root {...register("password")} type="password" placeholder="Enter your password" />
        </Box>
        <Flex align="center" gap="3" >
	      <Button variant="solid" type='submit'>Register</Button>
	     <Button variant="soft">Reset</Button>
         </Flex>
        
      </form>
      </Box>
    </>
  )
}

export default Register;

