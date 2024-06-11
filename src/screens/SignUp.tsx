import { useNavigation } from '@react-navigation/native';
import { VStack, Image, Text, Center, Heading, ScrollView, Box, StatusBar } from 'native-base';

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

export function SignUp(){

  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();
  }

  return(
    <ScrollView contentContainerStyle={{ flexGrow: 1}} showsVerticalScrollIndicator={false}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="#202024"
        translucent
      />
      <VStack flex={1} pb={10}>
        <Box>
          <Image
            source={BackgroundImg}
            defaultSource={BackgroundImg}
            alt='Pessoas Treinando'
            position='absolute'
            width='full'
          />
        </Box>

        <Center my={20} px={10} >
          <LogoSvg />
          <Text color='gray.100' fontSize='sm'>
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center px={10} >
          <Heading color='gray.100'  mb={6} fontSize='xl' fontFamily='heading'>
            Crie sua conta
          </Heading>

          <Input
            placeholder='Nome'
          />

          <Input
            placeholder='E-mail'
            keyboardType='email-address'
            autoCapitalize='none' 
          />

          <Input 
            placeholder='Senha' 
            secureTextEntry
          />

          <Button title='Criar e acessar'/>
        </Center>

        <Center mt={16} px={10} >
          <Button 
            title='Voltar para o login' 
            variant='outline'
            onPress={handleGoBack}
          />
        </Center>

      </VStack>
    </ScrollView>
  )
}
