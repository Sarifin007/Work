import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Purchase } from './PurchaseListModel';
import { Observable } from 'rxjs';
import { StockReceived } from './StockReceiveModel';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private apiUrl = 'http://localhost:8080/stockReceived';
  private apiPurUrl = 'http://localhost:8080/purchase';

  constructor(private http: HttpClient) { }

  getAllPurchaseByCurrentDate(): Observable<Purchase[]> {
    return this.http.get<Purchase[]>(`${this.apiPurUrl}/getAllPurchaseByCurrentDate`);
  }

  getAllStock(): Observable<StockReceived[]> {
    return this.http.get<StockReceived[]>(`${this.apiUrl}/getAllStockReceived`);
  }
}
