import { useNavigation } from '@react-navigation/native';
import { VStack, Image, Text, Center, Heading, ScrollView, Box, StatusBar } from 'native-base';
import { useForm, Controller } from 'react-hook-form';

import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

import { useAuth } from '@hooks/useAuth'

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

type FormData = {
  email: string;
  password: string;
}

export function SignIn(){
  const { signIn } = useAuth();

  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const { control, handleSubmit, formState: { errors } } = useForm<FormData>();
  
  async function handleSignIn({email, password}: FormData){
    await signIn(email, password);
  }

  function handleNewAccount(){
    navigation.navigate('SignUp');
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
            Acesse sua conta
          </Heading>

          <Controller 
            control={control}
            name='email'
            rules={{required: 'Informe o e-mail.'}}
            render={({ field: { onChange }}) => (
              <Input
              placeholder='E-mail'
              keyboardType='email-address'
              autoCapitalize='none'
              onChangeText={onChange} 
              errorMessage={errors.email?.message}
            />
            )}
          />

            <Controller 
            control={control}
            name='password'
            rules={{required: 'Informe a senha.'}}
            render={({ field: { onChange }}) => (
              <Input
              placeholder='Senha'
              secureTextEntry
              onChangeText={onChange} 
              errorMessage={errors.password?.message}
            />
            )}
          />

          <Button title='Acessar' onPress={handleSubmit(handleSignIn)}/>
        </Center>

        <Center mt={16} px={10} >
          <Text color='gray.100' fontSize='sm' mb={3} fontFamily='body'>
            Ainda não tem acesso?
          </Text>

          <Button 
            title='Criar conta' 
            variant='outline'
            onPress={handleNewAccount}
          />
        </Center>

      </VStack>
    </ScrollView>
  )
}
