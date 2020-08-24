
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { MainComponent } from './main/main.component';
import { CardsComponent } from './cards/cards.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContentComponent } from './content/content.component';
import { FormsComponent } from './forms/forms.component';


export const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'cards',
        component: CardsComponent
    },
    {
        path: 'pricing',
        component: PricingComponent
    },
    {
        path: 'content',
        component: ContentComponent
    },
    {
        path: 'forms',
        component: FormsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}