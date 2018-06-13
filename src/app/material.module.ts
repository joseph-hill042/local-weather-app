import { NgModule } from '@angular/core'
import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
} from '@angular/material'

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule],
  declarations: [],
  exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule],
})
export class MaterialModule {}
