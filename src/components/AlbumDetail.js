import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import  CardItem from './CardItem';
import Button from "./Button";

const AlbumDetail = ({album}) => {
    const {title, artist, thumbnail_image, image, url } = album;
    const {
        headerContentStyle,
        headerTextStyle,
        thumbnailStyle,
        thumbnailContainerStyle,
        imageStyle
    } = styles;

    return (
        <Card>
            <CardItem>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{uri: thumbnail_image }}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>

            </CardItem>
            <CardItem>
                <Image style={imageStyle} source={{uri: image}}/>
            </CardItem>
            <CardItem>
                <Button onPress={() => Linking.openURL(url)}/>
            </CardItem>
        </Card>
    );
};

//en reactnative no hay anchor tag <a>
//ver esto en la documentacion https://facebook.github.io/react-native/docs/linking

const styles = {
    headerContentStyle : {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
      fontSize: 18,
    },
    thumbnailStyle: {
        height:50,
        width: 50,
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10
    },
    imageStyle: {
        height: 300,
        //para que ocupe todos el ancho flex 1 width null
        flex: 1,
        width: null
    }
};
export default AlbumDetail;
