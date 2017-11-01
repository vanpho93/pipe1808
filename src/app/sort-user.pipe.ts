import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sortuser' })

export class SortUserPipe implements PipeTransform {
    transform(users: any[], propName: string) {
        return users.sort((a, b) => a[propName] - b[propName]);
    }
}
