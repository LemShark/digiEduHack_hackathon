import { Injectable } from '@angular/core';
import { Region } from '../models/region';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RegionService {
	// #region Private Properties
	private readonly regions: Region[] = [
		{ id: 'r-1', name: 'North Region', address: '100 North Ave, City' },
		{ id: 'r-2', name: 'South Region', address: '200 South St, City' },
		{ id: 'r-3', name: 'East Region', address: '300 East Rd, City' },
		{ id: 'r-4', name: 'West Region', address: '400 West Blvd, City' }
	];
	// #endregion

	// #region Public Methods
	public list(): Observable<Region[]> {
		return of(this.regions);
	}

	public getById(id: string): Observable<Region | undefined> {
		return of(this.regions.find(r => r.id === id));
	}

	public create(payload: Omit<Region, 'id'>): Observable<Region> {
		const created: Region = {
			id: `r-${this.regions.length + 1}`,
			...payload
		};
		this.regions.push(created);
		return of(created);
	}

	public update(id: string, changes: Partial<Omit<Region, 'id'>>): Observable<Region | undefined> {
		const idx = this.regions.findIndex(r => r.id === id);
		if (idx === -1) {
			return of(undefined);
		}
		const current = this.regions[idx];
		const updated: Region = { ...current, ...changes, id: current.id };
		this.regions[idx] = updated;
		return of(updated);
	}
	// #endregion
}

