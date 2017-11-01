import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sortuser' })

export class SortUserPipe implements PipeTransform {
    transform(users: any[], propName: string) {
        return users.sort((a, b) => {
            if (typeof a[propName] === 'number') {
                return a[propName] - b[propName];
            }
            return (a[propName] as string).localeCompare(b[propName]);
        });
    }
}
