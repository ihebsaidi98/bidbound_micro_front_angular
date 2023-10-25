import { Injectable } from '@angular/core';
import { Eureka } from 'eureka-js-client';


@Injectable({
  providedIn: 'root'
})
export class EurekaService {

  private client: any;

  constructor() {
    this.client = new Eureka({
      instance: {
        app: 'bidbound_front',
        hostName: 'localhost',
        ipAddr: '127.0.0.1',
        port: {
          '$': 3309,
          '@enabled': true,
        },
        vipAddress: 'jq.test.something.com',
        dataCenterInfo: {
          '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
          name: 'MyOwn',
        },
      },
      eureka: {
        host: 'localhost', // Your Eureka server host
        port: 8761, // Your Eureka server port
        servicePath: '/eureka/apps/',
      },
    });
    this.client.start((error: any) => { // Explicitly define the type for the error parameter
      if (error) {
        console.error('Error registering with Eureka:', error);
      } else {
        console.log('Eureka registration complete');
      }
    });
  }
   }

