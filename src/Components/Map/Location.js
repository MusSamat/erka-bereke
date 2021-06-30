import React, { Component } from 'react';
import { YMaps, Map, Placemark } from "react-yandex-maps";

const Location = () =>  {
    const mapData = {
        center: [42.834639, 74.568732],
        zoom: 14 ,
    };

    const coordinates = [
        [42.834639, 74.568732],
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
