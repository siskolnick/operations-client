import { Component, OnInit } from '@angular/core';
import { OperationService } from '../operation-service.service';
import { Operation } from '../operation';
import { Input } from '@angular/core';
@Component({
  selector: 'app-operation-form',
  templateUrl: './operation-form.component.html',
  styleUrls: ['./operation-form.component.css']
})
export class OperationFormComponent{
  operation: Operation;
  message: string;
  @Input() operationType: string;
  @Input() endpoint: string;
  constructor(
    private operationService: OperationService) {
    this.operation = new Operation();
    this.message = '';
    this.operationType = '';
    this.endpoint = '';
  }

  onSubmit() {
    //if( this.operation.operator1)
    this.operationService.setOperationEndpoint(this.endpoint);
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


}
