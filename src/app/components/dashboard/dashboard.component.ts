import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { DevicesService } from 'src/app/services/devices/devices.service';
import {Device} from "../../models/Device"
import { NgxSpinnerService } from 'ngx-spinner';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA = [

];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit ,AfterViewInit{


  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit(){
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0)

 
  }

  devices:Device[] = [];

  displayedColumns: string[] = ['serial', 'manufacturer', 'description', 'CreatedAt','UpdatedAt'];
  dataSource;


  constructor(private deviceService:DevicesService, private spinner:NgxSpinnerService) {

   }

   ngvi
   
  ngOnInit(): void {
    let arrayData = []
    this.spinner.show()
    this.deviceService.getDevices().subscribe((data) =>  {
      data.data.map((device) => {
        arrayData.push({serial:device.serial, manufacturer:device.manufacturer.name, description:device.manufacturer.name, CreatedAt:device.created_at, UpdatedAt:device.updated_at})
      })
      this.dataSource = new MatTableDataSource(arrayData)
      this.spinner.hide()
    }, error => {
      console.log(error)
      this.spinner.hide()
    })
  };
  

}
