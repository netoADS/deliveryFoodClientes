import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { featured } from "../../constants";
import { themeColors } from "../../theme";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";

const CartScreen = () => {
  const restaurant = featured.restaurants[0];
  const navigation = useNavigation();
  return (
    <View className="bg-white flex-1 top-5">
      {/* back button */}
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="absolute z-10 rounded-full p-1 shadow top-10 left-2"
        >
          <Icon.ArrowLeft strokeWidth={3} stroke="white" />
        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-xl">Your cart</Text>
          <Text className="text-center text-gray-500">{restaurant.name}</Text>
        </View>
      </View>
      {/* delivery time */}
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="flex-row px-4 items-center"
      >
        <Image
          source={require("../../../assets/images/food-delivery.png")}
          className="w-20 h-20 rounded-full"
        />
        <Text className="flex-1 pl-4">Delivery in 20-30 minutes</Text>
        <TouchableOpacity>
          <Text className="font-bold" style={{ color: themeColors.text }}>
            Change
          </Text>
        </TouchableOpacity>
      </View>
      {/* dishes */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
        className="bg-gray-50 pt-5"
      >
        {restaurant.dishes.map((dishes, index) => {
          return (
            <View
              key={index}
              className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-lg"
            >
              <Text className="font-bold" style={{ color: themeColors.text }}>
                2 x
              </Text>
              <Image className="h-14 w-14 rounded-full" source={dishes.image} />
              <Text className="flex-1 font-bold text-gray-700">
                {dishes.name}
              </Text>
              <Text className="font-semibold text-base">R$ {dishes.price}</Text>
              <TouchableOpacity
                className="p-1 rounded-full"
                style={{ backgroundColor: themeColors.bgColor(1) }}
              >
                <Icon.Minus
                  strokeWidth={2}
                  height={20}
                  width={20}
                  stroke="white"
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      {/* total */}
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="p-6 px-8 rounded-t-3xl space-y-4"
      >
        <View className="flex-row justify-between">
            <Text className="text-gray-700">Subtotal</Text>
            <Text className="text-gray-700">R$ 20</Text>
        </View>
        <View className="flex-row justify-between">
            <Text className="text-gray-700">Taxa entrega</Text>
            <Text className="text-gray-700">R$ 2</Text>
        </View>
        <View className="flex-row justify-between">
            <Text className="text-gray-700 font-extrabold">Total do pedido</Text>
            <Text className="text-gray-700 font-extrabold">R$ 22</Text>
        </View>
        <View>
            <TouchableOpacity
            onPress={()=> navigation.navigate('OrderPrepairing')}
            style={{backgroundColor: themeColors.bgColor(1)}}
            className="p-3 rounded-full">
                <Text className="text-white text-center font-bold text-lg">
                    Realizar Pedido
                </Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;
