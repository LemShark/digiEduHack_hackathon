import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ChatMessage {
	role: 'user' | 'assistant';
	text: string;
	timestamp: Date;
}

@Component({
	selector: 'app-ai-chat',
	standalone: true,
	imports: [CommonModule, FormsModule],
	templateUrl: './ai-chat.component.html',
	styleUrls: ['./ai-chat.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AiChatComponent {
	// #region Public Properties
	public messages: ChatMessage[] = [
		{ role: 'assistant', text: 'Hi! I am your AI BI Agent. Ask me about trends, KPIs, or comparisons.', timestamp: new Date() }
	];
	public draft: string = '';
	public isThinking: boolean = false;
	// #endregion

	// #region Public Methods
	public send(): void {
		const text = this.draft.trim();
		if (!text || this.isThinking) return;
		this.messages = [...this.messages, { role: 'user', text, timestamp: new Date() }];
		this.draft = '';
		this.isThinking = true;
		setTimeout(() => {
			const reply = this.generateReply(text);
			this.messages = [...this.messages, { role: 'assistant', text: reply, timestamp: new Date() }];
			this.isThinking = false;
		}, 600);
	}
	// #endregion

	// #region Private Methods
	private generateReply(prompt: string): string {
		const lower = prompt.toLowerCase();
		if (lower.includes('trend') || lower.includes('increase') || lower.includes('decrease')) {
			return 'Over the selected period, enrollment shows a modest upward trend with occasional volatility. Attendance remains stable.';
		}
		if (lower.includes('kpi') || lower.includes('score') || lower.includes('attendance')) {
			return 'Key KPIs: Attendance ~92%, Avg Test Score ~78, Graduation Rate ~84%. These are mock values for demo purposes.';
		}
		if (lower.includes('compare') || lower.includes('vs')) {
			return 'Comparison indicates Region A outperforms Region B by ~6 pts in test scores, with similar attendance.';
		}
		return 'Here is a brief insight: indicators remain within normal ranges. Try asking: "Show enrollment trend last 12 months" or "Compare regions by test scores".';
	}
	// #endregion
}


