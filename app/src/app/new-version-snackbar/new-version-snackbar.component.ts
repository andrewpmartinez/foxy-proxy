import {Component, Inject} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from "@angular/material/snack-bar";

@Component({
  selector: 'app-new-version-snackbar',
  templateUrl: './new-version-snackbar.component.html',
  styleUrls: ['./new-version-snackbar.component.scss']
})
export class NewVersionSnackbarComponent {

  public showChangelog = false;

  constructor(
    private snackBarRef: MatSnackBarRef<NewVersionSnackbarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) {}

  dismiss(): void {
    this.snackBarRef.dismiss();
  }

  update(): void {
    this.snackBarRef.dismissWithAction();
  }

  toggleChangelog() {
    this.showChangelog = !this.showChangelog;
  }
}
