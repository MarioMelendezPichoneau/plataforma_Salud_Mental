import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'carousel';

  images = [
    {
      imageSrc:
        'https://document-export.canva.com/0p6Qs/DAFOrU0p6Qs/22/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20221010%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221010T203602Z&X-Amz-Expires=77043&X-Amz-Signature=71f1cde84c8927776c53c6204ebb986f7a3950ea55ae69467a2a6a91c39a3aeb&X-Amz-SignedHeaders=host&response-expires=Tue%2C%2011%20Oct%202022%2018%3A00%3A05%20GMT',
      imageAlt: 'nature1',
    },
    {
      imageSrc:
        'https://document-export.canva.com/0p6Qs/DAFOrU0p6Qs/22/thumbnail/0002.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20221011%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221011T093906Z&X-Amz-Expires=31662&X-Amz-Signature=5c2bdde9e00646c8e872e6ba28e712ed7958aef34a343b70002f484f7fccfb05&X-Amz-SignedHeaders=host&response-expires=Tue%2C%2011%20Oct%202022%2018%3A26%3A48%20GMT',
      imageAlt: 'nature2',
    },
    {
      imageSrc:
        'https://document-export.canva.com/0p6Qs/DAFOrU0p6Qs/22/thumbnail/0003.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20221011%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221011T005952Z&X-Amz-Expires=60162&X-Amz-Signature=234436231ddf2201c18488e0c51cc85ff042593fa326c4d87edf900aefe258a5&X-Amz-SignedHeaders=host&response-expires=Tue%2C%2011%20Oct%202022%2017%3A42%3A34%20GMT',
      imageAlt: 'person1',
    },

  ]
}
