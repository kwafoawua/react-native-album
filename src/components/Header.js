//import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

//declare component
//el mismo nombre que el archivo
//los parentesis se usan si en el return hay mas de una linea de jxs
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>);
};

const styles = {
    viewStyle : {
        backgroundColor : '#F8F8F8',
        justifyContent: 'center', //vertical
        alignItems: 'center',//horizontal
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20},
        elevation: 3, //para android
        shadowOpacity: 0.2,
        position: 'relative'
    },
  textStyle : {
      fontSize: 20
    }
};
//Make the component available to others parts of the app
export default Header;