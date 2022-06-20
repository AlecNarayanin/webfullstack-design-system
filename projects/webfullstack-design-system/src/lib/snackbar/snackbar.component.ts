import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent implements OnInit {
  @Input() open: boolean = false;
  @Input() onClose: (() => void) | undefined;
  @Input() message: string = '';
  @Input() autoHideDuration: number = 0;
  @Input() textColor: string = 'white';
  @Input() backgroundColor: string = 'black';

  @Output() autoHideEvent = new EventEmitter<any>();

  handleClose() {
    if (this.onClose) {
      this.onClose();
    }

    this.open = false;
  }

  constructor() {}

  ngOnInit(): void {
    if (this.autoHideDuration) {
      setTimeout(() => {
        this.open = false;
        this.autoHideEvent.emit(null);
      }, this.autoHideDuration);
    }
  }
}
