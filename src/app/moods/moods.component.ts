import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moods',
  templateUrl: './moods.component.html',
  styleUrls: ['./moods.component.css']
})
export class MoodsComponent implements OnInit {
  
    moods = [
    { name: "Sad", link: "https://youtu.be/rxhC81AwtEA?si=T1UdX5UyJkfVREXu" },
    { name: "Anxious", link: "https://youtu.be/ukxEU_CIhK8?si=fkAeI40-1Ji9extK" },
    { name: "Happy", link: "https://youtu.be/KVjfFN89qvQ?si=-P7uBkvWF8nkCtXI" },
    { name: "Excited", link: "https://youtu.be/bpIfAnMftZE?si=Cw_IGS2vN4dcCjRE" },
    { name: "Angry", link: "https://youtu.be/Yh1-y3TzSO4?si=PyBxm1okEUdiY1tr" },
    { name: "Lonely", link: "https://youtu.be/Kbz9tkbW_gc?si=_reGJUxsB2B8BbUY" },
    { name: "Motivated", link: "https://youtu.be/8ZhoeSaPF-k?si=mrMbRVgPjnk3ZECM" },
    { name: "Tired", link: "https://youtu.be/DAinbPDtujc?si=NfDahZkhYJhcTxOG" },
    { name: "In Love", link: "https://youtu.be/td2O06HfhDY?si=D95skqduc0P4siuC" }
  ];

  openVideo(link: string) {
    window.open(link, '_blank');
  }
  constructor() { }

  ngOnInit(): void {
  }

 
}
