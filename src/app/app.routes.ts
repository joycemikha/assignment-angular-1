import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {path:"", redirectTo: "about", pathMatch: 'full'},
    {path:"about", component: AboutComponent},
    {path:"contact", component: ContactComponent},
    {path:"gallery", component: GalleryComponent},
    {path:"Portfolio", component: PortfolioComponent},
    {path:"**" ,component : NotfoundComponent}
];
