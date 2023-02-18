import React from "react";
import {  Text, View } from "react-native";
import styles from './TodoCounter.styles';

const TodoCounter = ({list}) => {
    
    const listCount=list.filter((item)=>!item.isDone);
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Yapılacklar</Text>
            <Text style={styles.counter}>{listCount.lengt}</Text>
        </View>
    );
}

export default TodoCounter;