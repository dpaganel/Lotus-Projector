import React, { Component } from 'react';
import { Text, TextInput, StyleSheet, View, Button } from 'react-native';


export async function fetchUser(user) {
    // This is wildly insecure and needs to be resolved.
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAIKhgwEAAAAAMBH%2BqF1LWN6QMcdJ0X6B8Cop2Jo%3DgwdsLYFOqcDgFqkSR38t9EdTHSZAwGqHejVsEBv2zAF7XVmb8H");
    myHeaders.append("Cookie", "guest_id=v1%3A166363400325218122");
    myHeaders.append("Content-type", "application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    redirect: 'follow'
    };


    // Need to concatenate 3 strings: first half of API call, the user name we want to input, and the second half.
    try {
    var fetched_json;
    const response = await fetch("https://api.twitter.com/2/users/by/username/" + user + "?user.fields=description,verified,created_at,public_metrics&tweet.fields=", requestOptions)
    .catch(error => console.log('error', error));
    let fetched_data = await response.json();
    return fetched_data;    // This is what we want to get back from the API
    }
    catch (error) {
        console.error(error);
    }
};




