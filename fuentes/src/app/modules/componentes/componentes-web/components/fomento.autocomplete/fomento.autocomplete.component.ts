import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { map, startWith } from 'rxjs/operators';

@Component({
	selector: 'lib-fomento-autocomplete',
	templateUrl: './fomento.autocomplete.component.html',
	styleUrls: ['./fomento.autocomplete.component.scss'],
})
export class FomentoAutocompleteComponent implements OnInit {
	//Propiedades de mat-autocomplete

	@Input() ariaLabel: string;
	@Input() ariaLabelledby: string;
	@Input() autoActiveFirstOption = false;
	@Input() disabledRipple = false;
	@Input() hideSingleSelectionIndicator = false;
	@Input() panelWidth: string | number;
	@Input() requireSelection: boolean;
	@Input() label = 'Etiqueta';
	@Input() placeholder = 'Selecciona uno';
	@Input() options: string[] = ['Uno', 'Dos', 'Tres'];

	myControl = new FormControl('');

	filteredOptions: Observable<string[]>;

	ngOnInit() {
		this.filteredOptions = this.myControl.valueChanges.pipe(
			startWith(''),
			map((value) => this._filter(value || '')),
		);
	}

	private _filter(value: string): string[] {
		const filterValue = value.toLowerCase();

		return this.options.filter((option) =>
			option.toLowerCase().includes(filterValue),
		);
	}
}
