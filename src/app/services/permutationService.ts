import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInputs } from '../models/userInputs';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class PermutationService {

    constructor(private http: HttpClient) { }

    private userInputs = new UserInputs();

    getAllPermutations() {
        const headers = { 
        'Authorization': 'Basic U2hyaXJhbmc6S2FkYWxl',  
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'GET, POST',
        'Access-Control-Allow-Origin': '*' 
    }

    	return this.http.get<UserInputs[]>(environment.getPermutationsUrl, {headers});
    }

    checkPermutations(userInputs: UserInputs): Observable<UserInputs> {
        const headers = { 
            'Authorization': 'Basic S2FpbGFzaDpUaGFsZQ==',  
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': 'GET, POST',
            'Access-Control-Allow-Origin': '*' 
        }
        console.log("Inside checkPermutations method :" + userInputs);
        return this.http.post<UserInputs>(environment.checkPermutationsUrl, userInputs, {headers});
    }
}
