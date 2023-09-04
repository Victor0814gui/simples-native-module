import { useState } from "react";
import { View, Text, Pressable, PressableProps, TouchableOpacityProps, TouchableOpacity } from "react-native";


import { styles } from "./styles"

type ButtonProps = TouchableOpacityProps & {
  children: string;
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      {...rest}
      role="button"
    >
      <View style={styles.container}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </TouchableOpacity>
  )
}