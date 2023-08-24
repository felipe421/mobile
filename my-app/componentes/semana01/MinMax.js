import { Text, View } from "react-native";
import React from "react";

export default function MinMax(props) {
    const { min, max } = props;

    const maxValue = Math.max(parseInt(max));
    const minValue = Math.max(parseInt(min));

    return (
        <View>
            <Text>O valor minimo é: {minValue}</Text>
            <Text>O valor maximo é: {maxValue}</Text>       
        </View>
    );
}