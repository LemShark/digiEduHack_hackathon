import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { School } from '../models/school';

@Injectable({ providedIn: 'root' })
export class SchoolService {
	// #region Private Properties
	private readonly schools: School[] = [
		{ id: 's-1', regionId: 'r-1', name: 'North High', address: '1 Elm St', headmasterName: 'Alice Brown' },
		{ id: 's-2', regionId: 'r-1', name: 'North Prep', address: '2 Oak St', headmasterName: 'Bob Clark' },
		{ id: 's-3', regionId: 'r-2', name: 'South Academy', address: '3 Pine St', headmasterName: 'Chloe Davis' }
	];
	// #endregion

	// #region Public Methods
	public list(regionId?: string): Observable<School[]> {
		const list = regionId ? this.schools.filter(s => s.regionId === regionId) : this.schools;
		return of(list);
	}

	public getById(id: string): Observable<School | undefined> {
		return of(this.schools.find(s => s.id === id));
	}

	public create(payload: Omit<School, 'id'>): Observable<School> {
		const created: School = {
			id: `s-${this.schools.length + 1}`,
			...payload
		};
		this.schools.push(created);
		return of(created);
	}

	public update(id: string, update: Partial<School>): Observable<School | undefined> {
		const idx = this.schools.findIndex(s => s.id === id);
		if (idx === -1) return of(undefined);
		const updated: School = { ...this.schools[idx], ...update, id };
		this.schools[idx] = updated;
		return of(updated);
	}
	// #endregion
}

