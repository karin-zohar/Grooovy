import { Component, Input } from '@angular/core';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent {
  @Input() contact!: Contact | null



  onRemoveContact(ev: MouseEvent) {

  }


}
