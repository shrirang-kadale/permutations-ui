import { Component, OnInit } from '@angular/core';
import { PermutationService } from '../services/permutationService';

@Component({
  selector: 'app-calculate-permutations',
  templateUrl: './calculate-permutations.component.html',
  styleUrls: ['./calculate-permutations.component.scss']
})
export class CalculatePermutationsComponent implements OnInit {

  userInputs: any = {};
  userRole: string;
  savedPermutations: any;
  getPermutations: any;
  errorResponse: any;


  constructor(private permutationService:PermutationService) { }

  ngOnInit() {
    this.userRole=="ADMIN";
  }
  submitForm(f) {

    console.log("Input 1 is: " + JSON.stringify(this.userInputs))
    this.permutationService.checkPermutations(this.userInputs)
		  .subscribe((data)=> {
        this.savedPermutations = data;
        this.getPermutations = null;
		  },
      error => {
        this.errorResponse = error.error;
      }
      );

  }

  getAll(){
    console.log("Get all is: ")
    this.permutationService.getAllPermutations()
		  .subscribe((data)=> {
        this.getPermutations = data;
        this.savedPermutations = null;
      },
      error => {
        this.errorResponse = error.error;
      }
      );
  }

}
