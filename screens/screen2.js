import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";

const Screen2 = ({ navigation, route }) => {
  const [number, setNumber] = useState(1);
  return (
    <View style={{ alignItems: "center", backgroundColor: "#1087a5", flex: 1 }}>
      <Text
        style={{
          color: "white",
          marginTop: 30,
          fontSize: 25,
          fontWeight: "bold",
        }}
      >
        Item Detail
      </Text>
      <View
        style={{
          alignContent: "space-between",
          flexDirection: "row",
          marginTop: 50,
        }}
      >
        <TouchableOpacity
          style={{ marginBottom: 20, marginRight: 220 }}
          onPress={() => navigation.navigate("Screen1")}
        >
          <Image
            source={require("../Data_Examination/akar-icons_arrow-back-thick-fill.png")}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginBottom: 20 }}>
          <Image source={require("../Data_Examination/Vector.png")}></Image>
        </TouchableOpacity>
      </View>
      <Text style={{ fontWeight: "bold", fontSize: 25, color: "white" }}>
        {route.params.item.name}
      </Text>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 25,
          color: "yellow",
          marginTop: 30,
        }}
      >
        {route.params.item.price}$
      </Text>
      <View style={{ flexDirection: "row", marginTop: 50 }}>
        <View style={{ marginRight: 100 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#07f787",
              borderRadius: 10,
              width: 50,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "black", fontSize: 40 }}>S</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 10,
              width: 50,
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ color: "white", fontSize: 40 }}>M</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 10,
              width: 50,
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ color: "white", fontSize: 40 }}>L</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Image
            source={route.params.item.image}
            style={{ width: 100, height: 150 }}
          ></Image>
          <Text
            style={{
              marginLeft: 40,
              color: "white",
              fontWeight: "bold",
              fontSize: 25,
            }}
          >
            {number}
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              style={{
                borderColor: "white",
                borderWidth: 1,
                borderRadius: 30,
                width: 30,
                height: 30,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => setNumber(number - 1)}
            >
              <Text
                style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
              >
                -
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                borderColor: "white",
                borderWidth: 1,
                borderRadius: 30,
                width: 30,
                height: 30,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => setNumber(number + 1)}
            >
              <Text
                style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
              >
                +
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            color: "white",
            fontSize: 18,
            fontWeight: "bold",
            marginLeft: 20,
            textAlign: "center",
            marginTop: 30,
          }}
        >
          Stabucks Ethiopia Medium Roast is the perfect coffee for the cold brew
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "red",
          marginTop: 50,
          borderRadius: 20,
          width: "90%",
          marginLeft: 20,
          marginRight: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => navigation.navigate("Screen1")}
      >
        <Text style={{ color: "white", fontWeight: "bold", padding:15, fontSize:18}}>Add to card</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
};
export default Screen2;
