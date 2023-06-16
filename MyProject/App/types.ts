import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { IngridientItem, IngridientsGroups } from './hooks/api/useGetIngridientsGroupsQuery';

export interface Cocktail {
    Contents: {
        Title: string;
        IngredientsImg: string[];
    };
    Recipe: {
        Name: string;
        Steps: string[];
    };
    _id: string;
    NameRU: string;
    NameEN: string;
    Tags: string[];
    ImageURL: string;
    Ingredient: {
        Name: string;
        Value: string;
        Unit: string;
        require: boolean;
    }[];
    Tooles: {
        Name: string;
        Value: string;
        Unit: string;
    }[];
    History: string;
    __v: number;
}


export type RootStackParamList = {
    CocktailsScreen: undefined;
    AccountScreen: undefined;
    MyCoctailsScreen: undefined;
    Filters: undefined;
    IngridientFilters: IngridientsGroups | IngridientItem;
    RecipScreen: Cocktail,
    FriendsScreen: undefined,
    ChatScreenScreen: undefined,
};

export type CocktailsScreenRouteProp = RouteProp<RootStackParamList, 'CocktailsScreen'>;
export type AccountScreenRouteProp = RouteProp<RootStackParamList, 'AccountScreen'>;
export type MyCoctailsScreenRouteProp = RouteProp<RootStackParamList, 'MyCoctailsScreen'>;
export type FiltersScreenRouteProp = RouteProp<RootStackParamList, 'Filters'>;
export type IngridientFiltersRouteProp = RouteProp<RootStackParamList, 'IngridientFilters'>;
export type RecipScreenRouteProp = RouteProp<RootStackParamList, 'RecipScreen'>;
export type ChatScreenScreenRouteProp = RouteProp<RootStackParamList, 'ChatScreenScreen'>;

export type Navigation =  StackNavigationProp<RootStackParamList, keyof RootStackParamList>