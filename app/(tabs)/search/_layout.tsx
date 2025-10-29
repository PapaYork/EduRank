import { Stack } from 'expo-router';

const SearchLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Search',
          headerSearchBarOptions: {
            placement: 'automatic',
            placeholder: 'Search',
            onChangeText: () => {},
          },
        }}
      />
    </Stack>
  );
}

export default SearchLayout;
