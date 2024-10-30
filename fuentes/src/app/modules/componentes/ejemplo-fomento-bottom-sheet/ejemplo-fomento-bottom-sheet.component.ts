import { Component, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet'; // Ensure MatBottomSheet is imported
import { BottomSheetOverviewExampleComponent } from '@fomento/i-rf-web-component-node-lib';


@Component({
  selector: 'app-ejemplo-fomento-bottom-sheet',
  templateUrl: './ejemplo-fomento-bottom-sheet.component.html',
  styleUrls: ['./ejemplo-fomento-bottom-sheet.component.scss'],
})
export class EjemploFomentoBottomSheetComponent {
  // Define the properties used in the template
  label = 'bottom sheet';
  theme = 'primary';
  icon = 'home'; // Example icon
  disabled = false;
  aria_label = 'Open bottom sheet';
  disableRipple = true;
  links = [
	{ title: 'Ayudas Plan EcoVivienda', url: 'https://example.com/plan-eco-vivienda', subtitle: 'Add to a note' },
	{ title: 'Programa Garantía de Vivienda Joven', url: 'https://example.com/garantia-vivienda-joven', subtitle: 'Embed in a document' },
	{ title: 'Bono Alquiler Joven en Andalucía', url: 'https://example.com/bono-alquiler' },
	{ title: 'Info.vivienda', url: 'https://example.com/info-vivienda', subtitle: 'Show to your coworkers' }
  ];
  constructor(private _bottomSheet: MatBottomSheet) {}
  
  procesaEventoBottomSheet(): void {
    console.log(this.links); // Verifica que los datos están disponibles
    this._bottomSheet.open(BottomSheetOverviewExampleComponent, {
      data: { links: this.links }
    });
  }
  
}
