import { CSSProperties } from 'react';
import { Theme } from '@mui/material';

export interface ISiteStyle {
	createMuiTheme(): Theme;
	setDocumentHeaders(): void;
	appName: string;
	headerClass: CSSProperties;
	headerLogo: string;
	footerClass: CSSProperties;
}
