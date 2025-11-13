import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DatasetSummary } from '../models/dataset';

@Injectable({ providedIn: 'root' })
export class DataService {
	// #region Private Properties
	private readonly datasets: DatasetSummary[] = [
		{ id: 'd-1', scope: 'region', scopeId: 'r-1', period: '2025-Q1', records: 1200, lastUpdated: '2025-03-31' },
		{ id: 'd-2', scope: 'region', scopeId: 'r-2', period: '2025-Q1', records: 980, lastUpdated: '2025-03-22' },
		{ id: 'd-3', scope: 'school', scopeId: 's-1', period: '2025-Q1', records: 300, lastUpdated: '2025-03-20' }
	];
	// #endregion

	// #region Public Methods
	public listByScope(scope: 'region' | 'school', scopeId?: string): Observable<DatasetSummary[]> {
		const filtered = scopeId ? this.datasets.filter(d => d.scope === scope && d.scopeId === scopeId) : this.datasets.filter(d => d.scope === scope);
		return of(filtered);
	}

	public upload(scope: 'region' | 'school', scopeId: string, _file: File): Observable<DatasetSummary> {
		const created: DatasetSummary = {
			id: crypto.randomUUID(),
			scope,
			scopeId,
			period: '2025-Q2',
			records: Math.floor(200 + Math.random() * 1200),
			lastUpdated: new Date().toISOString().slice(0, 10)
		};
		this.datasets.push(created);
		return of(created);
	}
	// #endregion
}

