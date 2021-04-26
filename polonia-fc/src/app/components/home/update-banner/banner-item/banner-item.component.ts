import { Component, OnInit } from '@angular/core';
import { BannerItem } from '../../models/interfaces';

@Component({
  selector: 'app-banner-item',
  templateUrl: './banner-item.component.html',
  styleUrls: ['./banner-item.component.scss'],
})
export class BannerItemComponent implements OnInit {
  bannerItem: BannerItem;
  constructor() {}

  ngOnInit(): void {}
}
