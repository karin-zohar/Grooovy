import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactFilter } from 'src/app/models/contact.filter';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit {

  contactFilter: ContactFilter = {term: ''}
  subscription!: Subscription

  constructor(private contactService: ContactService) { }
 
  ngOnInit(): void {
    this.subscription = this.contactService.contactFilter$.subscribe(contactFilter => {
      console.log('contactFilter cmp:', contactFilter)
      this.contactFilter = contactFilter
    })
  }

  onSetFilter() {
    this.contactService.setContactFilter({ ...this.contactFilter })
  }
} 
