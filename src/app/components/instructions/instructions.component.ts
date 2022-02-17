/* Core modules*/
import {Component, Inject, Input, OnInit, ViewEncapsulation} from '@angular/core';
/* Material design modules */
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import * as AWS from "aws-sdk";
/* Debug config import */

/* Task models*/
import {Instruction} from "../../models/shared/instructions";
import {ConfigService} from "../../services/config.service";
/* Data inteface for the underlying dialog component */
export interface DialogData {}

/* Component HTML Tag definition */
@Component({
  selector: 'app-instructions',
  templateUrl: 'instructions.component.html',
  styleUrls: ['instructions.component.scss'],
})

/*
 * This class implements the instruction dialog of the skeleton for Crowdsourcing tasks.
 */
export class InstructionsComponent implements OnInit {

  configService: ConfigService

  /* |---------  ELEMENTS - DECLARATION ---------| */

  /* Instructions to perform the task */
  @Input() instructions: Array<Instruction>;
  /* Amount of instructions sentences */
  instructionsAmount: number;

  /* |--------- CONSTRUCTOR ---------| */

  constructor(
    public dialog: MatDialog,
    configService: ConfigService
  ) {
    this.configService = configService
  }

  /* |--------- ELEMENTS - FUNCTIONS ---------| */

  /*
   * This function inits an instance of the instruction modal after main view init.
   */
  ngOnInit(): void {
    this.instructionsAmount = this.instructions.length
  }

  /*
   * This function opens the modal and loads its look&feel and content.
   */
  openDialog(instructions: Array<Instruction>): void {
    this.dialog.open(InstructionsDialog, {
      width: '80%',
      minHeight: '86%',
      data: {instructions: instructions}
    });
  }

}

/* Component HTML Tag definition */
@Component({
  selector: 'app-instructions-dialog',
  styleUrls: ['instructions-dialog.component.scss'],
  templateUrl: 'instructions-dialog.component.html',
  encapsulation: ViewEncapsulation.None
})

/*
 * This class implements the content of the instruction modal of the skeleton for Crowdsourcing tasks.
 */
export class InstructionsDialog {

  /* |---------  ELEMENTS - DECLARATION ---------| */

  scale: string;
  instructions: string;

  /* |--------- CONSTRUCTOR ---------| */

  constructor(public dialogRef: MatDialogRef<InstructionsDialog>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.instructions = data["instructions"];
  }

  /* |--------- ELEMENTS - FUNCTIONS ---------| */

  /*
   * This function closes the modal previously opened.
   */
  closeInstructions(): void {
    this.dialogRef.close();
  }

}
