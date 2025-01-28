import React, {useState} from "react";
import { StatusBar, StyleSheet, Text, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {useStore} from "../store/store";
import { ScrollView, View } from "moti";
import {useBottomTabBarHeight} from "@react-navigation/bottom-tabs";
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../theme/theme";
import HeaderBar from "../components/HeaderBar";
import { FlatList } from "react-native-gesture-handler";
import CoffeeCard from "../components/CoffeeCard";

const getCategoriesFormData = (data: any) => {
    let temp: any ={};
    for (let i = 0; i < data.length; i++) {
        if (temp[data[i].name] == undefined) {   
            temp[data[i].name] = 1;
        } else {
            temp[data[i].name]++;
        }
    }
    let categories = Object.keys(temp);
    categories.unshift("All");
    return categories;
}

const getCoffeeList = (category: string, data: any) => {
    if (category == "All") {
        return data;
    }else{
    let coffeelist = data.filter((item: any) => item.name == category);
    return coffeelist;
    }
};

const HomeScreen = () => {
    const CoffeeList = useStore((state: any) => state.CoffeeList);
    const BeanList = useStore((state: any) => state.BeanList);
    const [categories, setCategories] = useState(
        getCategoriesFormData(CoffeeList),
    );
    const [searchText, setSearchText] = useState('');
    const [categoryIndex, setCategoryIndex] = useState({
        index: 1,
        category: categories[1],
    });
    const [sortedCoffee, setSortedCoffee] = useState(
        getCoffeeList(categoryIndex.category, CoffeeList),
    );
    const tabBarHeight = useBottomTabBarHeight();
    // console.log("categories", categories);

    return (<View style={styles.ScreenContainer}>
        <StatusBar backgroundColor={COLORS.primaryBlackHex} />
        <ScrollView 
            showsVerticalScrollIndicator = {false} 
            contentContainerStyle={styles.ScrollViewFlex}>
                {/* Header */}
              <HeaderBar/>
              <Text style={styles.ScreenTitle}>
                Find the best{'\n'}coffee for you</Text>
                
                {/* Search Input */}
                <View style={styles.InputContainerComponent}>
                    <TouchableOpacity onPress={() => {}}>
                        <Ionicons
                            style={styles.InputIcon}
                            name="search"
                            size={FONTSIZE.size_18}
                            color={searchText.length > 0 ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
                        />
                    </TouchableOpacity>
                    <TextInput
                        placeholder="Find Your Coffee..."
                        value={searchText}
                        placeholderTextColor={COLORS.primaryLightGreyHex}
                        style={styles.TextInputContainer}
                        onChangeText={text => setSearchText(text)}
                        />
                </View>
                {/* Categories */}
                <ScrollView horizontal 
                showsHorizontalScrollIndicator={false} 
                contentContainerStyle={styles.CategoryScrollViewStyle}>
                {categories.map((data, index) => (
                    <View key={index.toString()}
                          style={styles.CategoryScrollViewContainer}>
                        <TouchableOpacity 
                        style={styles.CategoryScrollViewItem}
                        onPress={() => {
                            setCategoryIndex({index: index, category: categories[index]});
                            setSortedCoffee([
                                ...getCoffeeList(categories[index], CoffeeList),
                            ]);
                        }}>
                            <Text style={[styles.CategoryText,
                            categoryIndex.index == index ? {color: COLORS.primaryOrangeHex}
                             : {},
                        ]}>
                            {data}
                            </Text> 
                            {categoryIndex.index == index ? (
                            <View style={styles.ActiveCategory}/>
                            ) : ( 
                            <></>
                            )}
                        </TouchableOpacity>
                    </View>
                ))}
                </ScrollView>
                {/* Coffee FlatList */}
                <FlatList horizontal
                showsHorizontalScrollIndicator={false}
                data={sortedCoffee}
                contentContainerStyle={styles.FlatListContainer}
                keyExtractor={item => item.id}
                renderItem={(item) => {
                    return (
                      <TouchableOpacity>
                        <CoffeeCard
                          name={item.name}/>
                      </TouchableOpacity>
                    );
                }}/>
                {/* Bean FlatList*/}
        </ScrollView>
    </View> );
};

const styles = StyleSheet.create({
    ScreenContainer: {
        flex: 1,
        backgroundColor: COLORS.primaryBlackHex,
    },
    ScrollViewFlex: {
        flexGrow: 1,
    },
    ScreenTitle: {
        color: COLORS.primaryWhiteHex,
        fontSize: FONTSIZE.size_28,
        fontFamily: FONTFAMILY.poppins_semibold,
        paddingLeft:SPACING.space_30,
    },
    InputIcon: {
        marginHorizontal: SPACING.space_20,
    },
    TextInputContainer: {
        height: SPACING.space_20 * 3,
        color: COLORS.primaryWhiteHex,
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_14,
        flex: 1,
    },
    InputContainerComponent: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: SPACING.space_30,
        borderRadius:BORDERRADIUS.radius_20,
        backgroundColor: COLORS.primaryDarkGreyHex,
    },
    CategoryScrollViewStyle:{
        paddingHorizontal: SPACING.space_20,
        marginBottom: SPACING.space_20,
    },

    CategoryScrollViewContainer:{
        paddingHorizontal: SPACING.space_15,
    },
    CategoryScrollViewItem:{
        alignItems: 'center',
    },
    CategoryText:{
        color: COLORS.primaryLightGreyHex,
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_16,
        marginBottom: SPACING.space_4,
    },
    ActiveCategory:{
        height: SPACING.space_10,
        width: SPACING.space_10,
        backgroundColor: COLORS.primaryOrangeHex,
        borderRadius: BORDERRADIUS.radius_10,
    },
    FlatListContainer:{
        gap: SPACING.space_20,
        paddingVertical: SPACING.space_20,
        paddingHorizontal: SPACING.space_30,
    },
});

export default HomeScreen;