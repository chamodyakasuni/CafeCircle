import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { produce } from 'immer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CoffeeData from '../data/CoffeeData';
import BeanData from '../data/BeanData';


export const useStore = create(
    persist(
        (set, get) => ({
            CoffeeList: CoffeeData,
            BeanList: BeanData,
            CartPrice: 0,
            FavoriteList: [],
            CartList: [],
            OrderHistoryList: [],
        }),
        {
            name: 'coffee-app',
            storage:createJSONStorage(() => AsyncStorage),
        },
    ),
);