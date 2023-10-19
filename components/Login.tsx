import { TouchableOpacity, View, Text, TextInput } from "react-native";

const Login = () => {

  const handlePress = ()=> {
    console.log("Entrou")
  }

  return(
    <View>
      <Text>Digite seu nome:</Text>
      <TextInput style={{backgroundColor: "#000"}}></TextInput>
      <Text>Digite sua senha:</Text>
      <TextInput style={{backgroundColor: "#000"}}></TextInput>
      <TouchableOpacity onPress={handlePress}>
        <Text>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;