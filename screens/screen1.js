import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";

const Screen1 = (props) => {
  const data = [
    {
      price: 150,
      name: "Stabuck Coffee",
      image: require("../Data_Examination/Caramel.png"),
    },
    {
      price: 120,
      name: "Black Coffee",
      image: require("../Data_Examination/Cacaramel.png"),
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.top1}>
          <Text style={[{ fontSize: 17, marginTop:20 }]}>Good morning, Indro!</Text>
          <View>
            <Image
              source={require("../Data_Examination/Group10.png")}
              style={[{ width: 50, height: 50, marginRight:10 }]}
            ></Image>
          </View>
        </View>
        <View style={styles.top2}>
          <TextInput
            style={[
              {
                color: "red",
                fontSize: 15,
                fontWeight: "bold",
                margin: 10,
                marginLeft: 20,
                width:200
              },
            ]}
            placeholder="Find the coffee for you!"
          ></TextInput>
          <Image
            source={require("../Data_Examination/Group8.png")}
            style={[{ width: 45, height: 40, marginLeft: 70, marginTop:10 }]}
          ></Image>
        </View>

        <View style={styles.top3}>
          <TouchableOpacity
            style={[
              {
                backgroundColor: "#14e0a9",
                width: 150,
                height: 70,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                borderRadius: 30,
                marginLeft: 30,
              },
            ]}
          >
            <Image
              source={require("../Data_Examination/coffee_glass.png")}
            ></Image>
            <Text style={{ fontWeight: "bold", marginLeft: 10, fontSize: 20 }}>
              Coffee
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              {
                backgroundColor: "#7d959b",
                width: 150,
                height: 70,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                borderRadius: 30,
                marginLeft: 40,
                marginRight: 30,
              },
            ]}
          >
            <Image
              source={require("../Data_Examination/coffee_glass.png")}
            ></Image>
            <Text style={{ fontWeight: "bold", marginLeft: 10, fontSize: 20 }}>
              Snack
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.center}>
          <View style={[{ flex: 1, flexDirection: "row", margin: 50 }]}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                width: "70%",
                marginTop: 20,
                color:'#9b8888'
              }}
            >
              50% Discount for All Purchase This Morning
            </Text>
            <Image
              style={{ width: "30%", height: 120, height:100, marginTop:20 }}
              source={require("../Data_Examination/pngtree-coffee-grains-flying-into.png")}
            ></Image>
          </View>
        </View>
        <View style={styles.bottom}>
          <Text style={{ fontSize: 25, marginLeft: 30, fontWeight: "bold" }}>
            Recommendation
          </Text>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <View
                style={{
                  flex: 1,
                  flexDirection: "column",
                  margin: 1,
                }}
              >
                <TouchableOpacity
                  style={[
                    {
                      backgroundColor: "#1087a5",
                      margin: 10,
                      alignItems: "center",
                      borderRadius:20,
                      height:170,
                      width:190
                    },
                  ]}
                  onPress={() =>
                    props.navigation.navigate("Screen2", { item: item })
                  }
                >
                  <Image source={item.image} style={{width:70, height:100, marginTop:10}} ></Image>
                  <Text style={{ fontSize: 17, fontWeight: "bold", color:'white' }}>
                    {item.name}
                  </Text>
                  <Text style={{ fontSize: 17, fontWeight: "bold", color:'#eac809' }}>
                    {item.price}$
                  </Text>
                </TouchableOpacity>
              </View>
            )}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};
export default Screen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  top: {
    marginTop: 20,
    flex: 1,
  },
  top1: {
    // flex: 1,
    marginTop: 20,
    flexDirection: "row",
    // justifyContent:'space-between'
    justifyContent: "flex-end",
  },
  top2: {
    marginTop: 30,
    flexDirection: "row",
    // justifyContent:'space-between'
    justifyContent: "space-between",
    backgroundColor:'#e5dada',
    borderRadius:35,
    height:50,
    marginLeft:10,
    marginRight:10
  },
  top3: {
    // flex: 1,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  center: {
    flex: 1,
    backgroundColor:'#e5dada',
    borderRadius:30,
    marginLeft:20,
    marginRight:20,
    marginTop:30 // flexDirection:'row'
  },
  bottom: { flex: 1 },
});
