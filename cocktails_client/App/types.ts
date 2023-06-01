import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

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
};

export type CocktailsScreenRouteProp = RouteProp<RootStackParamList, 'CocktailsScreen'>;
export type AccountScreenRouteProp = RouteProp<RootStackParamList, 'AccountScreen'>;
export type MyCoctailsScreenRouteProp = RouteProp<RootStackParamList, 'MyCoctailsScreen'>;

export type Navigation =  StackNavigationProp<RootStackParamList, keyof RootStackParamList>