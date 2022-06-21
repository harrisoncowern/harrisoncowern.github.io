import { CSSProperties } from 'react';
import { createTheme, responsiveFontSizes } from '@mui/material';

import headerLogo from '../img/logo.png';

import { ISiteStyle } from '.';

class SiteStyle implements ISiteStyle {
	public readonly PORTFOLIO_BLUE_LIGHT = '#B8D8D8';
	public readonly PORTFOLIO_BLUE_MEDIUM = '#7A9E9F';
	public readonly PORTFOLIO_BLUE_DARK = '#4F6367';
	public readonly PORTFOLIO_MAIN = '#EEF5DB';
	public readonly PORTFOLIO_SECONDARY = '#FE5F55';

	public createMuiTheme() {
		let theme = createTheme({
			palette: {
				primary: {
					main: this.PORTFOLIO_SECONDARY,
					contrastText: this.PORTFOLIO_BLUE_LIGHT,
				},
				secondary: {
					main: this.PORTFOLIO_MAIN,
					contrastText: this.PORTFOLIO_BLUE_LIGHT,
				},
				background: {
					default: '#f2f3f4',
					paper: '#f2f3f4',
				},
			},
			typography: {
				fontFamily: ['Gilroy-Medium', 'sans-serif'].join(','),
				h2: {
					color: this.PORTFOLIO_BLUE_DARK,
				},
				h3: {
					color: this.PORTFOLIO_BLUE_DARK,
					fontWeight: 300,
				},
				h4: {
					textTransform: 'uppercase',
					fontWeight: 700,
					fontFamily: 'Gilroy-bold',
					color: this.PORTFOLIO_BLUE_LIGHT,
					fontSize: '16px',
					lineHeight: '24px',
				},
				h6: {
					fontWeight: 'normal',
				},
			},
			components: {
				MuiFilledInput: {
					styleOverrides: {
						root: {
							backgroundColor: 'rgba(0, 0, 0, 0.07)',
						},
					},
				},
				MuiFormLabel: {
					styleOverrides: {
						root: {
							'&.Mui-focused': {
								color: this.PORTFOLIO_BLUE_MEDIUM,
							},
						},
					},
				},
				MuiListItemText: {
					styleOverrides: {
						primary: {
							color: this.PORTFOLIO_BLUE_MEDIUM,
						},
						secondary: {
							textDecoration: 'none !important',
						},
					},
				},
				MuiLink: {
					styleOverrides: {
						root: {
							color: this.PORTFOLIO_BLUE_MEDIUM,
						},
					},
				},
				MuiTab: {
					styleOverrides: {
						textColorPrimary: {
							'&.Mui-selected': {
								color: this.PORTFOLIO_BLUE_LIGHT,
							},
						},
					},
				},
			},
		});
		theme = responsiveFontSizes(theme);

		return theme;
	}

	public setDocumentHeaders() {
		let headHtml = document.getElementsByTagName('head')[0].innerHTML;
		headHtml += '<link rel="stylesheet" href="https://fonts.cdnfonts.com/css/gilroy-bold?styles=20876,20879" />';

		headHtml += '<link rel="apple-touch-icon" sizes="180x180" href="/img/default/apple-touch-icon.png">';
		headHtml += '<link rel="icon" type="image/png" sizes="32x32" href="/img/default/favicon-32x32.png">';
		headHtml += '<link rel="icon" type="image/png" sizes="16x16" href="/img/default/favicon-16x16.png">';
		headHtml += '<link rel="manifest" href="/img/default/site.webmanifest">';
		headHtml += `<link rel="mask-icon" href="/img/default/safari-pinned-tab.svg" color="${this.PORTFOLIO_BLUE_LIGHT}">`;
		headHtml += '<link rel="shortcut icon" href="/img/default/favicon.ico">';
		headHtml += `<meta name="msapplication-TileColor" content="${this.PORTFOLIO_BLUE_LIGHT}">`;
		headHtml += '<meta name="msapplication-config" content="/img/default/browserconfig.xml">';
		headHtml += `<meta name="theme-color" content="${this.PORTFOLIO_BLUE_LIGHT}">`;

		document.getElementsByTagName('head')[0].innerHTML = headHtml;

		document.title = this.appName;
	}

	public get appName() {
		return 'Harrison Cowern Portfolio';
	}

	public get headerClass(): CSSProperties {
		return {
			backgroundColor: this.PORTFOLIO_BLUE_MEDIUM,
			color: '#fff',
		};
	}

	public get headerLogo() {
		return headerLogo;
	}

	public get footerClass(): CSSProperties {
		return {
			backgroundColor: this.PORTFOLIO_BLUE_DARK,
			color: '#fff',
		};
	}
}

export const style = new SiteStyle();
