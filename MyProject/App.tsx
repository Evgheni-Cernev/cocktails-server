/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useAddFilters } from './App/hooks/useAddFilters';
export const UserContext = React.createContext({} as ContextType);
function App(): JSX.Element {

  const actions = useAddFilters()
  
  return (
    <QueryClientProvider client={new QueryClient}>
      <NavigationContainer>
        <UserContext.Provider value={actions as ContextType}>
          <AppNavigator />
        </UserContext.Provider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;


type ContextType = {
  filters: {
    selectedType: string;
    filtersActiveTab: string;
    ingridients: string[];
  };
  userData: User,
  addFilters: (data: {
    selectedType: string;
    filtersActiveTab: string;
    ingridients: string[]
  }) => void;
  addUserData: (data: User) => void;
  addReaction: (reactions: string) => void
}

interface Filter  {
  selectedType: string;
  filtersActiveTab: string;
  ingridients: string[]
}

export interface User {
  __v: number;
  _id: string;
  email: string;
  friends: string[];
  liked_cocktails: string[];
  filters: {[key: string]: Filter}
  password: string;
}