import { Injectable } from '@angular/core';
import { Device } from 'src/app/models/Device';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  devices:Device[];


  constructor(private http:HttpClient) { }

  getDevices():Observable<any>{
    return this.http.get<any>(
      `http://127.0.0.1:8000/api/smart-devices`
    )
  }
}
