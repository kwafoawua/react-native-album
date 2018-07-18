import React, { Component } from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    //default set
    state = {albums : []};
    componentWillMount() {
        //buen lugar para inicializar algunas requests
        console.log('componentWillMount in wtf');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => this.setState({albums: response.data}));
    }

    renderAlbums () {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album}></AlbumDetail>
        );
    }

    //delcarar el render method que va en los class component
    render() {
        return (
            //tiene q ser escroleable ScrollView!!!
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }

}

export default AlbumList;