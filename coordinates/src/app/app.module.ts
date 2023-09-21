import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { DataService } from './data.service';
import { xyPipe } from './xy.pipe';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { GchildComponent } from './gchild/gchild.component';



@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    xyPipe,
    DialogboxComponent,
    GchildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
