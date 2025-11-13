import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/auth.service';
import { MockChartsComponent } from '../../components/mock-charts/mock-charts.component';
import { AiChatComponent } from '../../components/ai-chat/ai-chat.component';

@Component({
	selector: 'app-regional-overview',
	standalone: true,
	imports: [CommonModule, MockChartsComponent, AiChatComponent],
	templateUrl: './regional-overview.component.html',
	styleUrls: ['./regional-overview.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionalOverviewComponent implements OnInit {
	// #region Public Properties
	// #endregion

	// #region Private Properties
	private readonly auth: AuthService = inject(AuthService);
	// #endregion

	// #region Public Methods
	public ngOnInit(): void {
		// no-op: charts and chat are mock components
	}
	// #endregion
}

