import { Component, Input, Output, EventEmitter, OnInit, SecurityContext, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'lib-fomento-checkbox',
  templateUrl: './fomento.checkbox.component.html',
  styleUrls: ['./fomento.checkbox.component.scss']
})
export class FomentoCheckboxComponent implements OnInit {
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() indeterminate: boolean = false;
  @Input() name: string = '';
  @Input() ariaLabel: string = '';
  @Input() ariaDescribedBy: string = '';
  @Input() errorMessage: string = '';
  @Input() errorLive: boolean = false;
  @Input() label: string = '';

  @Output() changeCheck = new EventEmitter<boolean>();

  focused: boolean = false;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.inputValidation();
  }

  inputValidation() {
    try {
      if (!this.label || this.label.length === 0) {
        throw new Error('Etiqueta vacía');
      }
      this.label = this.sanitizeContent(this.label);
    } catch (err) {
      this.label = 'Error';
      console.error(err.message);
    }
  }

  emitCheck(event: MatCheckboxChange) {
    const value = event.checked;
    this.changeCheck.emit(value);
  }

  private sanitizeContent(content: string): string {
    // Sanitiza solo si hay contenido, y preserva la codificación de caracteres especiales
    const sanitizedContent = this.sanitizer.sanitize(SecurityContext.HTML, content);
    if (!sanitizedContent) {
      throw new Error("Intento de ataque vía 'HTML injection'");
    }
    // Decodificar cualquier entidad HTML para mostrar acentos correctamente
    const textarea = document.createElement('textarea');
    textarea.innerHTML = sanitizedContent;
    return textarea.value;
  }
  
}
