import { Component, OnInit } from '@angular/core';
import { OperationService } from '../operation-service.service';
import { Operation } from '../operation';
@Component({
  selector: 'app-sum-form',
  templateUrl: './sum-form.component.html',
  styleUrls: ['./sum-form.component.css']
})
export class SumFormComponent {
  operation: Operation;
  message: String;
  constructor(
    private operationService: OperationService) {
    this.operation = new Operation();
    this.message = '';
  }

  onSubmit() {
    //if( this.operation.operator1)
    this.operationService.setOperationEndpoint('sum');
    this.operationService.save(this.operation).subscribe(
        (val)=>{  
            this.message = 'Operation completed, RESULT = ' + val.result;
            this.operationService.findAll();
        },
        (ex) => {
          this.message = 'Operation error: ' + ex.status + " " + ex.error.error;
        }
    );
    
  }

  // gotoUserList() {
  //   this.router.navigate(['/users']);
  // }
}
