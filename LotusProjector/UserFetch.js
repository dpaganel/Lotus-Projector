import React, { Component } from 'react';
import { Text, TextInput, StyleSheet, View, Button } from 'react-native';


export async function fetchUser(user) {
    //This is wildly insecure and needs to be resolved.
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAIKhgwEAAAAAMBH%2BqF1LWN6QMcdJ0X6B8Cop2Jo%3DgwdsLYFOqcDgFqkSR38t9EdTHSZAwGqHejVsEBv2zAF7XVmb8H");
    myHeaders.append("Cookie", "guest_id=v1%3A166363400325218122");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    redirect: 'follow'
    };

    //need to convert this to 3 strings: first half, the user name we want to input, and the second half.
    try {
    const response = await fetch("https://api.twitter.com/2/users/by/username/" + user + "?user.fields=description,verified,created_at,public_metrics&tweet.fields=", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    console.dir(response);
    return response; //This is what we want to actually get back
    } catch (error) {
        console.error(error);
    }

};




