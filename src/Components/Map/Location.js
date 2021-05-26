import React, { Component } from 'react';
import { YMaps, Map, Placemark } from "react-yandex-maps";

const Location = () =>  {
    const mapData = {
        center: [41.09213324, 74.873856],
        zoom: 6 ,
    };

    const coordinates = [
        [42.870981, 74.569466],
    ];

    return (
        <>
            <div className="horizontal">
                <hr/>
            </div>
            <div style={{width:'100%', height:'70%', position:'relative'}} >
                <YMaps >
                    <Map  width='100%' height='100%'  defaultState={mapData} >
                        {coordinates.map((coordinate, index) => <Placemark key={index} geometry={coordinate} />)}
                    </Map>
                </YMaps>
            </div>
            <div className="horizontal">
                <hr/>
            </div>
        </>
    );
}

export default Location;
