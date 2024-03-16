import { Keyboard, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { PropsWithChildren } from 'react'

interface Props {
    withScrollView?:boolean
}

const KeyboardDismissView:React.FC<Props> = (props:PropsWithChildren<Props>) => {
    if(props.withScrollView){
        return (
            <ScrollView keyboardShouldPersistTaps="never" contentContainerStyle={styles.container}>
                {props.children}
            </ScrollView>
        )
    }
    return (
        <TouchableOpacity activeOpacity={1} style={styles.container} onPress={Keyboard.dismiss}>
            {props.children}
        </TouchableOpacity>
    )
}

export default KeyboardDismissView

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})