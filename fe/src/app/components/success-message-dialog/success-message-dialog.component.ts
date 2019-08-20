import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'shopie-success-message-dialog',
  templateUrl: './success-message-dialog.component.html',
  styleUrls: ['./success-message-dialog.component.scss']
})
export class SuccessMessageDialogComponent implements OnInit {

  id: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<SuccessMessageDialogComponent>) { }

  ngOnInit() {
    this.id = this.data.id;
  }

  close() {
    this.dialogRef.close();
  }
}
