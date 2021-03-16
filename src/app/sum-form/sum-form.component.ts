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
  message: string;
  
  constructor(
    private operationService: OperationService) {
    this.operation = new Operation();
    this.message = '';
  }

  onSubmit() {
    this.message = 'Getting result...';
    this.operationService.setOperationEndpoint('sum'); // SUM
    let firstNumber = this.operation.operator1;
    this.operationService.save(this.operation).subscribe(
        (val)=>{  
            this.operation.operator1 = val.result;
            this.operationService.setOperationEndpoint('product');  // PRODUCT 
            this.operationService.save(this.operation).subscribe(
                (val)=>{  
                  this.operation.operator1 = val.result;
                  this.operationService.setOperationEndpoint('power'); // POWER 
                  this.operationService.save(this.operation).subscribe(
                      (val)=>{  
                        this.operation.operator1 = firstNumber;
                        this.message = 'Operation completed, RESULT = ' + val.result ;
                      },
                      (ex) => {
                        this.operation.operator1 = firstNumber;
                        this.message = 'POWER call error: ' + ex.status + " " + ex.error.error;
                      }
                      
                  );  
                },
                (ex) => {
                  this.operation.operator1 = firstNumber;
                  this.message = 'PRODUCT call error: ' + ex.status + " " + ex.error.error;
                }
                
            );  
        },
        (ex) => {
          this.operation.operator1 = firstNumber;
          this.message = 'SUM call error: ' + ex.status + " " + ex.error.error;
        }
        
    );
  }

}
