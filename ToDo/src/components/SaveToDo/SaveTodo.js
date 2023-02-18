import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import styles from './SaveTodo.styles';

const SaveTodo = ({setTodo,handleSaveTodo,text}) => {

    return(
        <View style={styles.container}>
            <TextInput
            style={styles.inputItem}
            placeholder="Yapılacaklar"
            placeholderTextColor="#808080"
            value={text}
            onChangeText={(text) => setTodo(text)}
            />
            <Pressable style={text.length>0 ? styles.button_hover : styles.button} onPress={handleSaveTodo}>
                <Text style={styles.text}>Kaydet</Text>
            </Pressable>
        </View>
    );
}

export default SaveTodo;