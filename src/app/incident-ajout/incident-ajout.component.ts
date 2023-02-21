import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IncidentService} from '../incidents.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-incident-ajout',
  templateUrl: './incident-ajout.component.html',
  styleUrls: ['./incident-ajout.component.css']
})
export class IncidentAjoutComponent implements OnInit{
  ourForm!: FormGroup;
  formsubmitted = false;


  constructor(private fb: FormBuilder,
              private pService: IncidentService,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    this.ourForm =   this.fb.group({
      id: ['', Validators.required],
      titre: ['', Validators.required],
      description: ['', Validators.required],
      gravite: ['', Validators.required],
      type:['', Validators.required],
      progression: 0,
      email:['', Validators.required]
    })
  }


  submitForm() {
    this.formsubmitted = true
    if (this.ourForm.valid) {
      this.pService.add(this.ourForm.value)
        .subscribe(p => this.router.navigateByUrl('/incidents'))
    }
  }
}
