import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'roundNum' })

export class RoundPipe implements PipeTransform {
    transform(value: number, isCeil) {
        if (isCeil) {
            return Math.ceil(value);
        }
        return Math.floor(value);
    }
}
