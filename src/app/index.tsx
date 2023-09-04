import { useState } from "react";
import { View, Text } from "react-native"
import { styles } from "./styles"
import Estudies from "../modules/estudies"
import { Button } from "../components/button";



export function App() {
  const [result, setResult] = useState(0.0)

  const calaculateResult = async () => {
    Estudies?.add(20.0, 20.0, (resultAccount) => {
      setResult(resultAccount);
    })!
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá mundo</Text>
      <Text>Resultado: {result}</Text>
      <Button onPress={calaculateResult}>Calcular</Button>
    </View>
  )
} 