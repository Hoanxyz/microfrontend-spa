import { NgModule } from '@angular/core';
import { CommonLibraryComponent } from './common-library.component';
import { TestComponent } from './components/test/test.component';



@NgModule({
  declarations: [
    CommonLibraryComponent
  ],
  imports: [
  ],
  exports: [
    CommonLibraryComponent
  ]
})
export class CommonLibraryModule { }
