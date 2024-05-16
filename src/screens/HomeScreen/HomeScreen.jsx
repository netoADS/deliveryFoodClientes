import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "react-native-feather";
import { themeColors } from "../../theme";
import { featured } from "../../constants";
import { Categories, FeaturedRow } from "../../components";

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />
      {/* search bar */}
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-grey-300">
          <Icon.Search height="25" width="25" stroke="grey" />
          <TextInput placeholder="Restaurantes" className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-grey-300">
            <Icon.MapPin height="20" width="20" stroke="grey" />
            <Text className="text-grey-600">Taubaté, SP</Text>
          </View>
        </View>
        <View
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="p-3 rounded-full"
        >
          <Icon.Sliders
            height="20"
            width="20"
            strokeWidth={2.5}
            stroke="white"
          />
        </View>
        {/* <Text>teste 123</Text> */}
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        <Categories />

        <View className="mt-5">
          {[featured, featured, featured].map((item, index) => {
            return (
              <FeaturedRow 
                key={index} 
                title={item.title} 
                restaurants={item.restaurants}
                descripition={item.description} />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
