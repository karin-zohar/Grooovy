import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, map } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit, OnDestroy {

  // contacts$: Observable
  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  @Output() back = new EventEmitter<void>()
  subscription!: Subscription

  contact$!: Observable<Contact>
  contact!: Contact

  ngOnInit(): void {
    this.contact$ = this.route.data.pipe(map(data => data['contact']))
  }

  onBack() {
    this.router.navigateByUrl('/')
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}
