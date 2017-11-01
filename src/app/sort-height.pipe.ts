import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sortheight' })

export class SortHeightPipe implements PipeTransform {
    transform(users: any[]) {
        return users.sort((a, b) => a.height - b.height);
    }
}
