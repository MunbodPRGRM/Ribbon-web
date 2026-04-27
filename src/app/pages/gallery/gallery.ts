import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  images = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    url: `assets/images/${i + 1}.jpg`,
    title: `รูปที่ ${i + 1}`
  }));
}
