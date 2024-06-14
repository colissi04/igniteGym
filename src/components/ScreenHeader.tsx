import { Center, Heading } from "native-base";

type Props = {
  title: string;
}

export function ScreenHeader({ title }: Props){
  return(
    <Center bg='gray.600' pb={10} pt={10}>
      <Heading color='gray.100' fontSize='xl'>
        {title}
      </Heading>
    </Center>
  )
}
