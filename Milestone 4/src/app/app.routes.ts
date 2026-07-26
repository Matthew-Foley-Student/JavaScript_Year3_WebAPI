import { Routes, RouterModule } from '@angular/router';
import { GetBooks } from './get-books/get-books';

import { GetChapters } from './get-chapters/get-chapters';
import { GetVerses } from './get-verses/get-verses';
import { GetNotes } from './get-notes/get-notes';
import { AddNotes} from './add-notes/add-notes';
import { DeleteNotes} from './delete-notes/delete-notes';

export const routes: Routes = [
  { path: 'books', component: GetBooks },
  { path: 'chapters', component: GetChapters },
  { path: 'verses', component: GetVerses },
  { path: 'notes', component: GetNotes },
  { path: 'add-note', component: AddNotes },
  { path: 'delete-note', component: DeleteNotes },
  { path: '', redirectTo: '/books', pathMatch: 'full' }
];
