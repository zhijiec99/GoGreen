import React from 'react';

const url = "http://localhost:3001";

export function sendPicture(uri){
    const body = new FormData();

    body.append("photo", {
        name: "test.jpeg",
        type: "image/jpeg",
        uri:  Platform.OS === "android" ? uri : uri.replace("file://", "")
    });

    return fetch(url+"/predict", {
        method: "POST",
        body: body
    })
}

