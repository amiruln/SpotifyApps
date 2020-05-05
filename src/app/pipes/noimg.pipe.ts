import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimg'
})
export class NoimgPipe implements PipeTransform {
//Function if artist have no image
  transform(images: any[], ...args: unknown[]): string {
    if (!images) {
    return 'assets/no-image.png';
    }
    if (images.length > 0) {
      return images[0].url
    } else {
      return 'assets/no-image.png';
    }
  }

}
