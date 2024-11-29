import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { createEmbeddingContext } from 'amazon-quicksight-embedding-sdk';
import { EmbeddingContext } from 'amazon-quicksight-embedding-sdk/dist';
import { DsButtonModule } from '@bmw-ds/components';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    DsButtonModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  constructor(private http: HttpClient) { }
  loadingError = false;
  dashboard: any;
 
  ngOnInit() {
    this.GetDashboardURL();
  }
  public GetDashboardURL() {
    fetch('https://vddyfdabr9.execute-api.us-east-1.amazonaws.com/dev/dashboard')
    .then(response => response.json())
    .then(data => {
      console.log(data.url.EmbedUrl);
      this.Dashboard(data.url.EmbedUrl);
    })
    .catch(error => {
      console.error('Error:', error);
    });

  }
  
  public async Dashboard(embeddedURL: any) {
    var containerDiv = document.getElementById("dashboardContainer") || '';
    const frameOptions = {
      url: embeddedURL,
      container: containerDiv,
      height: "1000px",
      width: "100%",
      resizeHeightOnSizeChangedEvent: true,
  }
    const embeddingContext: EmbeddingContext = await createEmbeddingContext();
    this.dashboard = embeddingContext.embedDashboard(frameOptions);
  }
}
