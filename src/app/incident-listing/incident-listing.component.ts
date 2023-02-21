import {Component, OnInit} from '@angular/core';
import {IncidentService} from "../incidents.service";
import {Incident} from "../model/incident.model";

@Component({
  selector: 'app-incident-listing',
  templateUrl: './incident-listing.component.html',
  styleUrls: ['./incident-listing.component.css']
})
export class IncidentListingComponent implements OnInit{

  incidents: Incident[] = [];

  constructor(private incidentService: IncidentService) {}

  ngOnInit(): void {
    this.incidentService.findAll()
      .subscribe(incids => this.incidents = incids)
  }

}
