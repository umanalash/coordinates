import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { DialogboxComponent } from './dialogbox/dialogbox.component';

const routes: Routes = [
    { path: '', redirectTo: '/parent', pathMatch: 'full' },
    { path: 'parent', component: ParentComponent },
    { path: 'child', component: ChildComponent },
    { path: 'dialog', component: DialogboxComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
