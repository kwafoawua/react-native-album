//Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//Create a component
const App = () => (
    //please expand this compnent to fill the entire content sdfsd de device FLEX
    <View style={{flex : 1}}>
        <Header headerText={'Simtlix Albums'}/>
        <AlbumList/>
    </View>

    );


//o

// const App = () =>(
//         <Text>Averyl Rising</Text>
// );


//no hay variables globales a las ual podamos acceder entre archivos
//para usar el tag text tenemos q si o si importar ReactNative

//Render it to the device
//tenemos que registrar al menos un componente
//el primer parametro es el nombre del proyecto, albums en este caso
//luego se pasa el componente como segundo argumento
AppRegistry.registerComponent('albums', ()=>App);