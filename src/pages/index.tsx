import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Text, Textarea } from '@chakra-ui/react'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>Form com NextJS e Chakra UI</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Flex
          minHeight='100vh'
          width='full'
          align='center'
          justifyContent='center'
          backgroundColor='gray.900'
        >
          <Box px={12} py={12} width='full' maxWidth='450px' textAlign='center'
            boxShadow='lg' borderRadius='6px' background='gray.700'>
            <Heading>
              <Text color='gray.200' fontSize='2xl'>
                Formulário de Registro
              </Text>
            </Heading>
            <Box>
              <form action="" autoComplete='off'>
                <Flex justify='space-between'>
                <FormControl isRequired marginTop='15px' width='49%'>
                  <FormLabel color='gray.200' >First Name</FormLabel>
                  <Input 
                  type='text' 
                  name='name' 
                  border='none' 
                  outline='none' 
                  bgColor='gray.900' 
                  focusBorderColor='gray.600' 
                  color='gray.200' 
                  placeholder='first name'
                  />
                </FormControl>
                <FormControl  isRequired marginTop='15px' width='49%'>
                  <FormLabel color='gray.200' >Last Name</FormLabel>
                  <Input 
                  type='text' 
                  border='none' 
                  outline='none' 
                  bgColor='gray.900' 
                  focusBorderColor='gray.600' 
                  color='gray.200' 
                  placeholder='Last name'/>
                </FormControl>
                </Flex>
                <FormControl  isRequired marginTop='15px' >
                  <FormLabel color='gray.200' > Your e-mail</FormLabel>
                  <Input 
                  type='text' 
                  outline='none' 
                  bgColor='gray.900' 
                  focusBorderColor='gray.600' 
                  color='gray.200' 
                  placeholder='Your e-mail'/>
                </FormControl>
                <Flex justify='space-between' >
                <FormControl  isRequired marginTop='15px' width='49%'>
                  <FormLabel color='gray.200' >Your address</FormLabel>
                  <Input 
                  type='text' 
                  outline='none' 
                  bgColor='gray.900' 
                  focusBorderColor='gray.600' 
                  color='gray.200' 
                  placeholder='Your address'/>
                </FormControl>
                <FormControl  isRequired marginTop='15px' width='49%'>
                  <FormLabel color='gray.200' >Your phone</FormLabel>
                  <Input 
                  type='number' 
                  outline='none' 
                  bgColor='gray.900' 
                  focusBorderColor='gray.600' 
                  color='gray.200' 
                  placeholder='Your phone'/>
                </FormControl>
                </Flex>
                <FormControl  isRequired marginTop='15px'>
                  <FormLabel color='gray.200' >Your descript message</FormLabel>
                  <Textarea 
                    outline='none' 
                    bgColor='gray.900' 
                    focusBorderColor='gray.600' 
                    color='gray.200' 
                    placeholder='Your descript message'
                    resize='none'
                    />
                </FormControl>
        
                <Button
                  type='submit'
                  width='full'
                  bgColor='green.400'
                  mt={4}
                  color='gray.200'
                  _hover={{color: 'black'}}
                >Cadastro</Button>
              </form>
            </Box>
          </Box>
        </Flex>
      </main>
    </>
  )
}
