import { Component, VERSION } from '@angular/core';
import { ImagePickerConf } from 'ngp-image-picker';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  initialImage: string = '';
  imageSrc: any = '';
  config: ImagePickerConf = {
    borderRadius: '8px',
    language: 'en',
    width: '300px',
    objectFit: 'contain',
    aspectRatio: 4 / 3,
    compressInitial: null,
  };

  constructor() {}

  ngOnInit(): void {}

  onImageChanged(dataUri) {
    this.imageSrc = dataUri;
  }
}
