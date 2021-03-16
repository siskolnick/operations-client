import { Component, OnInit } from '@angular/core';
import { Operation } from '../operation';
import { OperationService } from '../operation-service.service';
@Component({
  selector: 'app-operation-list',
  templateUrl: './operation-list.component.html',
  styleUrls: ['./operation-list.component.css']
})
export class OperationListComponent implements OnInit {

  operations: Operation[] | undefined;

  constructor(private operationService: OperationService) {
  }

  ngOnInit() {
    this.operationService.findAll().subscribe(data => {
      this.operations = data;
    });
  }

}
