import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

/*
  Generated class for the ImgurApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ImgurApiProvider {
    private baseUrl: string = "https://api.imgur.com/";
    private token: string = "";
    private clientId: string = "025ed260d215c47";
    private clientSecret: string = "ec5590992f4cd34e6fc1435b03304485cdc2035d";

    getToken() {
        let browserRef = window.open(this.baseUrl + 'oauth2/authorize?client_id=025ed260d215c47&response_type=token', '_blank', 'location=no');
        browserRef.addEventListener("loadstart", (event: any) => {
            if ((event.url).indexOf('access_token=') !== -1) {
                this.token = event.url.slice(event.url.indexOf('access_token=') + 'access_token='.length);
                // here is your token, now you can close the InAppBrowser
                browserRef.close();
                // return (this.token)
            }
        })
        return Promise.resolve(this.token)
    }

    getAccountBase() {
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Client-ID 025ed260d215c47'
            })
        };

        return new Promise(resolve => {
            this.http.get(this.baseUrl + '3/account/Rototote', httpOptions).subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

    getTags() {
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Client-ID 025ed260d215c47'
            })
        };
        return new Promise(resolve => {
            this.http.get(this.baseUrl + '3/tags', httpOptions).subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

    constructor(public http: HttpClient) {
        console.log('Hello ImgurApiProvider Provider');
    }

}
