'use strict';

const {createApp} = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            path: 'img/akira.jpeg'
        }
    }
}).mount('#app')




/*
const vm = createApp({
    data() {
        return {
            message: 'Hello Vue!',
            picPath: 'img/akira.jpeg'
        }
    }
}).mount('#app')*/