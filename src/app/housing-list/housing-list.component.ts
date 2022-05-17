import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import {HousingLocation } from '../housing-location';
@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {
  searchHousingLocations(searchText: string) {
    this.results = this.locationList.filter(
    (location: HousingLocation) => location.city
      .toLowerCase()
      .includes(
          searchText.toLowerCase()
    ));
  }
    @Input() locationList: HousingLocation[] = [];
 results: HousingLocation[] = [];

 @Output() locationSelectedEvent = new EventEmitter<HousingLocation>();
 selectHousingLocation(location: HousingLocation) {
  this.locationSelectedEvent.emit(location);
}
  ngOnInit(): void {
  }
  
}
