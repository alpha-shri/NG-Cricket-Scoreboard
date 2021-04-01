import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { MatchElement } from 'src/app/models/Match';
import { MatchDetails } from 'src/app/models/MatchDetails';
import { CricketService } from 'src/app/service/cricket.service';
import { GenericModalComponent } from '../generic-modal/generic-modal.component';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  matches: MatchElement[];
  matchdetails: MatchDetails;

  constructor(private service: CricketService,
    public dialog: MatDialog) { }

  ngOnInit(): void {

    this.service.getMatchesService()
                .pipe(
                   map( item =>{
                     return item.matches.filter( it => it.type === "Twenty20")
                   })
                )
                .subscribe( data => {
                    this.matches = data;
                    // console.table(this.matches)  
                           
                });
       
  }

  showDetailsByID(unique_id){
      console.log(unique_id);
      this.dialog.open(GenericModalComponent);
      
      this.service.getMatchDetails(unique_id)
                  .subscribe( data => {
                    this.matchdetails = data;
                    
                  })
  }

  
}
