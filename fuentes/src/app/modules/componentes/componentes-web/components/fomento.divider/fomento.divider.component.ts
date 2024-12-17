import { Component, Input, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Component({
	selector: 'lib-fomento-divider',
	templateUrl: './fomento.divider.component.html',
	styleUrls: ['./fomento.divider.component.scss'],
})
export class FomentoDividerComponent implements AfterViewInit {
	//Atributos mat-divider
	@Input() inset = false;
	@Input() vertical = false;
	@Input() color = '#000000';

	constructor(private el: ElementRef, private renderer: Renderer2) {}

	ngAfterViewInit() {
		const matDivider = this.el.nativeElement.querySelector('.mat-divider');
	
		if (matDivider) {
			
			if (this.vertical) {
				this.renderer.setStyle(matDivider, 'height', '100%'); 
				this.renderer.setStyle(matDivider, 'width', '2px'); 
				this.renderer.setStyle(matDivider, 'border-left-color', this.color); 
				this.renderer.setStyle(matDivider, 'border-left-width', '1px');
				this.renderer.setStyle(matDivider, 'border-left-style', 'solid');
				this.renderer.removeStyle(matDivider, 'border-top'); 
			} else {
				
				this.renderer.setStyle(matDivider, 'border-top-color', this.color);
				this.renderer.setStyle(matDivider, 'border-top-width', '1px');
				this.renderer.setStyle(matDivider, 'border-top-style', 'solid');		
			}

			if (this.inset) {
				this.renderer.setStyle(matDivider, 'margin-left', '0.5%');
				this.renderer.setStyle(matDivider, 'margin-right', '0.5%');
			  }
		}
	}
}
