import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'roundNum' })

export class RoundPipe implements PipeTransform {
    transform(value: number) {
        return Math.round(value);
    }
}
