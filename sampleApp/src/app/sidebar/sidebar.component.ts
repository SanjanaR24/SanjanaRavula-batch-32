import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isClicked=false;
  items = [
    { full_name: 'Sanjana Ravula', lead_name: 'Tejan', technology: 'Java',vendor_name:'Tech Systems',rate:'65/hr'},
    { full_name: 'Roshini Racha', lead_name: 'Manohar', technology: 'Java',vendor_name:'Judge group',rate:'63/hr'},
    { full_name: 'Rashmitha Reddy', lead_name: 'Kranthi', technology: 'Devops',vendor_name:'Avtech Solutions',rate:'75/hr' },
    { full_name: 'Sangamithra', lead_name: 'Tejan', technology: 'Devops',vendor_name:'Prodware solutions',rate:'70/hr' },
    { full_name: 'Rishika', lead_name: 'Manohar', technology: 'Devops',vendor_name:'Tech Systems',rate:'69/hr' },
    { full_name: 'Bharathu', lead_name: 'Spandana', technology: 'Java',vendor_name:'Diamond Pick',rate:'65/hr' },
    { full_name: 'Jahnavi', lead_name: 'Tejan', technology: 'Data Engineering',vendor_name:'Avalon software services',rate:'71/hr' },
   ];

  selectedTechnology = '';
  selectedLeadName = '';
  filteredItems = this.items;

  filterTable(): void {
    this.filteredItems = this.items.filter(item => {
      const selectedTechnologyMatch = this.selectedTechnology ? item.technology === this.selectedTechnology : true;
      const selectedLeadNameMatch = this.selectedLeadName ? item.lead_name === this.selectedLeadName : true;
      return (this.selectedTechnology === 'all' || selectedTechnologyMatch) && (this.selectedLeadName === 'all' || selectedLeadNameMatch);
    });
  }
  ngOnInit() {
  }
}
