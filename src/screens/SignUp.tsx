import { useNavigation } from '@react-navigation/native';
import { VStack, Image, Text, Center, Heading, ScrollView, Box, StatusBar } from 'native-base';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}

const signUpSchema = yup.object({
  name: yup.string().required('Informe o nome.'),
  email: yup.string().required('Informe o e-mail.').email('E-mail inválido.'),
  password: yup.string().required('Informe a senha.').min(6, 'A senha deve ter pelo menos 6 dígitos.'),
  password_confirm: yup.string()
  .oneOf([yup.ref('password'), undefined], 'As senhas não coincidem.')
  .required('Confirme a senha.'),
});

export function SignUp(){
  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema)
  });

  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();
  }
  
  function handleSignUp({name, email, password, password_confirm}: FormDataProps){
    console.log({name, email, password, password_confirm});
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
                errorMessage={errors.name?.message}
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
                errorMessage={errors.email?.message}
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
                errorMessage={errors.password?.message}
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
                onSubmitEditing={handleSubmit(handleSignUp)}
                returnKeyType='send'
                errorMessage={errors.password_confirm?.message}
              />
            )}
          />

          <Button 
            title='Criar e acessar'
            onPress={handleSubmit(handleSignUp)}
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
