import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterage' })

export class FilterAgePipe implements PipeTransform {
    transform(users: any[], minAge) {
        return users.filter(user => user.age >= minAge);
    }
}
