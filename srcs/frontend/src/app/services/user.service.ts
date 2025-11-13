import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import { AccessLevel } from '../models/access-level';

@Injectable({ providedIn: 'root' })
export class UserService {
	// #region Private Properties
	private readonly users: User[] = [
		{ id: 'u-1', name: 'Global', surname: 'Admin', email: 'global@demo.local', accessLevel: AccessLevel.Global },
		{ id: 'u-2', name: 'Regina', surname: 'North', email: 'reg-north@demo.local', accessLevel: AccessLevel.Region, regionId: 'r-1' },
		{ id: 'u-3', name: 'Sam', surname: 'South', email: 'reg-south@demo.local', accessLevel: AccessLevel.Region, regionId: 'r-2' },
		{ id: 'u-4', name: 'Sally', surname: 'Teach', email: 'school-north-high@demo.local', accessLevel: AccessLevel.School, schoolId: 's-1' }
	];
	// #endregion

	// #region Public Methods
	public list(): Observable<User[]> {
		return of(this.users);
	}

	public getById(id: string): Observable<User | undefined> {
		return of(this.users.find(u => u.id === id));
	}

	public update(id: string, changes: Partial<User>): Observable<User | undefined> {
		const idx = this.users.findIndex(u => u.id === id);
		if (idx === -1) return of(undefined);
		const updated: User = { ...this.users[idx], ...changes, id };
		this.users[idx] = updated;
		return of(updated);
	}
	// #endregion
}

