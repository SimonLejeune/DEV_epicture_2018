import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

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

    private static extractData(res: Response) {
        return res["data"] || {};
    }

    getToken(): Promise<any> {
        let browserRef = window.open(this.baseUrl + 'oauth2/authorize?client_id=025ed260d215c47&response_type=token', '_blank', 'location=no');
        browserRef.addEventListener("loadstart", (event: any) => {
            if ((event.url).indexOf('access_token=') !== -1) {
                // this.token = event.url.slice(event.url.indexOf('access_token=') + 'access_token='.length);
                this.token = event.url;
                console.log("je print dans le provider : " + event.url);
                // here is your token, now you can close the InAppBrowser
                browserRef.close();
                // return (this.token)
            }
        })
        return Promise.resolve(this.token)
    }

    getAccountBase(): Promise<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Client-ID 025ed260d215c47'
            })
        };

        return this.http.get(this.baseUrl + '3/account/Rototote', httpOptions).toPromise().then(ImgurApiProvider.extractData)
    };

    getTags(): Promise<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Client-ID 025ed260d215c47'
            })
        };

        return this.http.get(this.baseUrl + '3/tags', httpOptions).toPromise().then(ImgurApiProvider.extractData)
    }

    getHomeGallery(): Promise<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Client-ID 025ed260d215c47'
            })
        };

        return this.http.get(this.baseUrl + '3/gallery/hot/time/0/0', httpOptions).toPromise().then(ImgurApiProvider.extractData)
    }

    search(query: string): Promise<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Client-ID 025ed260d215c47'
            })
        };

        return this.http.get(this.baseUrl + '3/gallery/search/top/0?q=' + query, httpOptions).toPromise().then(ImgurApiProvider.extractData);
    }

    getFavorite(): Promise<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Client-ID 025ed260d215c47'
            })
        };

        return this.http.get(this.baseUrl + '3/account/Rototote/favorites/0', httpOptions).toPromise().then(ImgurApiProvider.extractData)
    }

    constructor(public http: HttpClient) {
        console.log('Hello ImgurApiProvider Provider');
    }

}
