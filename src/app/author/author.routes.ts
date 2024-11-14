import { AuthorFormComponent } from "./author-form/author-form.component";

export default [
    {
        path: '',
        component: AuthorFormComponent
    }, {
        path: ':id',
        component: AuthorFormComponent
    }
];