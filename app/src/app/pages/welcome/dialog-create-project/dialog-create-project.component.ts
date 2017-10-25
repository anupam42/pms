import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, AbstractControl, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material";
import {WelcomeService} from "../welcome.service";

@Component({
  selector: 'app-dialog-create-project',
  templateUrl: './dialog-create-project.component.html',
  styleUrls: ['./dialog-create-project.component.css'],
  providers: [WelcomeService]
})
export class DialogCreateProjectComponent implements OnInit {

  name: AbstractControl;
  detail: AbstractControl;

  projectForm: FormGroup;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<DialogCreateProjectComponent>,private _service:WelcomeService) {
    this.projectForm = this.fb.group({
      'name': ['', Validators.compose([Validators.required])],
      'detail': ['', Validators.compose([])]
    })
  }

  ngOnInit() {
  }

  onSubmit(event: any) {
    this._service.newProject(this.projectForm.value)
      .then(res=>{
        console.log("dialog",res)
      })
  }

  closeDialog(){
    this.dialogRef.close();
  }


}
