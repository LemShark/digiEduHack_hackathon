import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MockChartsComponent } from '../../components/mock-charts/mock-charts.component';
import { AiChatComponent } from '../../components/ai-chat/ai-chat.component';

@Component({
	selector: 'app-global-overview',
	standalone: true,
	imports: [CommonModule, RouterLink, MockChartsComponent, AiChatComponent],
	templateUrl: './global-overview.component.html',
	styleUrls: ['./global-overview.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlobalOverviewComponent implements OnInit {
	// #region Public Methods
	public ngOnInit(): void {
	}
	// #endregion
}


