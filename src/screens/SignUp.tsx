import { useNavigation } from '@react-navigation/native';
import { VStack, Image, Text, Center, Heading, ScrollView, Box, StatusBar } from 'native-base';
import { useForm, Controller } from 'react-hook-form';

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

export function SignUp(){
  const { control } = useForm();

  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();
  }
  
  function handleSignUp(){

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

          <Controller 
            control={control}
            name='name'
            render={({ field: { onChange, value}}) => (
              <Input
                placeholder='Nome'
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <Controller 
            control={control}
            name='email'
            render={({ field: { onChange, value}}) => (
              <Input
              placeholder='E-mail'
              keyboardType='email-address'
              autoCapitalize='none' 
              onChangeText={onChange}
              value={value}
            />
            )}
          />

          
          <Controller 
            control={control}
            name='password'
            render={({ field: { onChange, value}}) => (
              <Input 
              placeholder='Senha' 
              secureTextEntry
              onChangeText={onChange}
              value={value}
            />
            )}
          />

          <Controller 
            control={control}
            name='password_confirm'
            render={({ field: { onChange, value}}) => (
              <Input 
              placeholder='Confirme a Senha' 
              secureTextEntry
              onChangeText={onChange}
              value={value}
            />
            )}
          />

          <Button 
            title='Criar e acessar'
            onPress={handleSignUp}
          />
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
