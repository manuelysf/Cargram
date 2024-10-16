import React from 'react'
import { Input, Button, InputGroup, InputRightElement, Alert, AlertIcon } from '@chakra-ui/react'
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import useLogin from '../../hooks/useLogin';

const Login = () => {
    const [inputs, setInputs] = useState({
        email:'',
        password:'',
    });

    const [showPassword, setShowPassword] = useState(false);

    const { loading, error, login } = useLogin();
  return (
    <>
        <Input
            placeholder='Email'
            fontSize={14}
            type='email'
            value={inputs.email}
            size={"sm"}
            onChange={(e) => setInputs({...inputs,email: e.target.value})}
        />
        <InputGroup>
            <Input
                placeholder='Password'
                fontSize={14}
                type={showPassword ? "text" : "password"}
                value={inputs.password}
                size={"sm"}
                onChange={(e) => setInputs({...inputs,password: e.target.value})}
            />

            <InputRightElement h={"full"}>
                <Button variant={"ghost"} size={"sm"} onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <ViewIcon/> : <ViewOffIcon/>}
                </Button>
            </InputRightElement>
        </InputGroup>

        {error && (
            <Alert status='error' fontSize={13} p={2} borderRadius={4}>
                <AlertIcon fontSize={12}/>
                {error.message}
            </Alert>
        )}

        <Button w={"full"} colorScheme='blue' size={"sm"} fontSize={14}
            isLoading={loading}
            onClick={() => login(inputs)} >
            Log in
        </Button>
    </>
  )
}

export default Login