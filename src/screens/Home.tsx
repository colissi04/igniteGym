import { useState } from 'react';
import { HStack, VStack, FlatList, Heading, Text } from 'native-base';

import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';
import { ExerciseCard } from '@components/ExerciseCard';

export function Home(){
  const [groups, setGroups] = useState(['costas', 'bíceps', 'tríceps', 'ombro']);
  const [exercises, setExercises] = useState(['puxada frontal', 'remada curvada', 'remada unilateral', 'levantamento terra']);
  const [groupSelected, setGroupSelected] = useState('costas');

  return(
    <VStack flex={1}>
      <HomeHeader />

      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) =>(
          <Group
          name={item}
          isActive={groupSelected.toUpperCase() === item.toUpperCase()} 
          onPress={() => setGroupSelected(item)}
        />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{px: 8}}
        my={10}
        maxHeight={10}
      />

      <VStack flex={1} px={8}>
      <HStack justifyContent='space-between' mb={5}>
        <Heading color='gray.200' fontSize='md'>
          Exercícios
        </Heading>
        
        <Text color='gray.200' fontSize='md'>
          {exercises.length}
        </Text>
      </HStack>  
      
      <FlatList 
        data={exercises}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <ExerciseCard />
        )}
        showsVerticalScrollIndicator={false}
        _contentContainerStyle={{ paddingBottom: 20}}
      />

      </VStack>
    </VStack>
  )
}