import { Component, OnInit } from '@angular/core';
import {Incident} from "../model/incident.model";
import {IncidentService} from "../incidents.service";
import {ActivatedRoute, Router, Route} from "@angular/router";
import {logMessages} from '@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild';

@Component({
  selector: 'app-incident-consult',
  templateUrl: './incident-consult.component.html',
  styleUrls: ['./incident-consult.component.css']
})
export class IncidentConsultComponent {
  incident!: Incident;

  constructor(private iService: IncidentService,
              private aRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    const id = this.aRoute.snapshot.paramMap.get('id') || ''

    if (id != '') {
      this.iService.findOne(+id).subscribe(p => this.incident = p)
    }
  }

  deleteIncident() {
    this.iService.remove(this.incident.id)
      .subscribe(() => this.router.navigateByUrl('/incidents'))
  }
}
