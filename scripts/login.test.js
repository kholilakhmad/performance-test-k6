import http from 'k6/http';
import { check, sleep } from 'k6';
import { config } from '../config/env.js';

export const options = {
    vus: 10, // Number of virtual users
    duration: '30s', // Duration of the test
}

export default function () {
    // Make a POST request to the login endpoint
    const response = http.post(`${config.baseUrl}/auth/login`, { // Construct the request body with username and password
        username: config.users.user1.username, // Use the username from the config
        password: config.users.user1.password, //
    });

    // Check if the response status is 200 OK
    check(response, {
        'is status 200': (r) => r.status === 200, // Check if the status code is 200
        'accessToken is returned': (r) => r.json().accessToken !== undefined, // Check if accessToken is present in the response
    });

    // Sleep for a short duration to simulate user activity
    sleep(1);
}