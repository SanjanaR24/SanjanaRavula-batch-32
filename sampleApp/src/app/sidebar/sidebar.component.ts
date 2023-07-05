import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isClicked=false;
  items = [
    { id:1,full_name: 'Sanjana Ravula', lead_name: 'Tejan', technology: 'Java',vendor_name:'Tech Systems',rate:'65/hr'},
    { id:2,full_name: 'Roshini Racha', lead_name: 'Manohar', technology: 'Java',vendor_name:'Judge group',rate:'63/hr'},
    { id:3,full_name: 'Rashmitha Reddy', lead_name: 'Kranthi', technology: 'Devops',vendor_name:'Avtech Solutions',rate:'75/hr' },
    { id:4,full_name: 'Sangamithra', lead_name: 'Tejan', technology: 'Devops',vendor_name:'Prodware solutions',rate:'70/hr' },
    { id:5,full_name: 'Rishika', lead_name: 'Manohar', technology: 'Devops',vendor_name:'Tech Systems',rate:'69/hr' },
    { id:6,full_name: 'Bharathu', lead_name: 'Spandana', technology: 'Java',vendor_name:'Diamond Pick',rate:'65/hr' },
    { id:7,full_name: 'Jahnavi', lead_name: 'Tejan', technology: 'Data Engineering',vendor_name:'Avalon software services',rate:'71/hr' },
   ];

  selectedTechnology = '';
  selectedLeadName = '';
  filteredItems = this.items;

  filterTable() {
    this.filteredItems = this.items.filter(item => {
      const selectedTechnologyMatch = this.selectedTechnology ? item.technology === this.selectedTechnology : true;
      const selectedLeadNameMatch = this.selectedLeadName ? item.lead_name === this.selectedLeadName : true;
      return (this.selectedTechnology === 'all' || selectedTechnologyMatch) && (this.selectedLeadName === 'all' || selectedLeadNameMatch);
    });
  }

  
  ngOnInit() {
  }


  editingItem: any = null;

  
  editItem(item: any): void {
    this.editingItem = { ...item };
  }

  
  saveItem(): void {
    const index = this.items.findIndex(item => item.id === this.editingItem.id);
    if (index !== -1) {
      this.items[index] = { ...this.editingItem };
      this.editingItem = null;
      this.filteredItems = [...this.items];
    }
  }
  
  cancelEdit(): void {
    this.editingItem = null;
  }

  deleteItem(item: any): void {
    const index = this.items.findIndex(i => i.id === item.id);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.filteredItems = this.filteredItems.filter(i => i.id !== item.id);
    }
  }
  
  

  trackByFullName(index: number, item: any): number {
    return index;
  }
}
