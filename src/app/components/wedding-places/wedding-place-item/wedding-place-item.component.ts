import { Component, Input } from '@angular/core';
import { WeddingPlace } from 'src/app/models/weddingPlace';
import { WeddingPlaceDetailDto } from 'src/app/models/weddingPlaceDetailDto';
import { ApiImagePipe } from 'src/app/pipes/api-image.pipe';

@Component({
  selector: 'app-wedding-place-item',
  templateUrl: './wedding-place-item.component.html',
  providers: [ApiImagePipe],
})
export class WeddingPlaceItemComponent {
  @Input() weddingPlace!: WeddingPlaceDetailDto;
}
