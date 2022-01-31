
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-search-form',
  templateUrl: 'searchForm.component.html',
  styleUrls: ['./searchForm.component.scss']
})

export class SearchFormComponent implements OnInit {
  public searchForm: FormGroup;

  constructor(
    private filterService: FilterService
  ) {
  }

  public ngOnInit() {
    this.searchForm = new FormGroup({
      searchString: new FormControl()
    });
  }

  public submit() {
    this.filterService.changeSearchString(this.searchForm.value.searchString);
  }
}
