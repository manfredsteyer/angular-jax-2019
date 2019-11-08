import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CityPipe } from "./city.pipe";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    declarations: [
        CityPipe
    ],
    exports: [
        CityPipe,
        FormsModule,
        CommonModule,
    ]
})
export class SharedModule {
}