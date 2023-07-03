import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private contactService: ContactService) { }
  title = 'grooovy';

  ngOnInit(): void {
    this.contactService.loadContacts()
      .pipe(take(1))
      .subscribe({
        error: err => {
          console.log('err: ', err)
        }
      })
  }
}
