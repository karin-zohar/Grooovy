import { inject } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { ContactService } from "../services/contact.service";
import { delay } from "rxjs";


export function contactResolver(route: ActivatedRouteSnapshot) {
    const id = route.params['id']
    const x = inject(ContactService).getContactById(id).pipe(delay(100))
    console.log('x: ', x)
    return x
}

