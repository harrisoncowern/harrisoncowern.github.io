import { CSSProperties } from 'react';
import { createTheme, responsiveFontSizes } from '@mui/material';

import headerLogo from '../img/logo.png';

import { ISiteStyle } from '.';

class SiteStyle implements ISiteStyle {
    public readonly PORTFOLIO_COLOUR_1 = '#88BDBC';
    public readonly PORTFOLIO_COLOUR_2 = '#254E58';
    public readonly PORTFOLIO_COLOUR_3 = '#112D32';
    public readonly PORTFOLIO_COLOUR_4 = '#4F4A41';
    public readonly PORTFOLIO_COLOUR_5 = '#6E6658';
    public readonly PORTFOLIO_CREAM = '#f2f3f4';
    public readonly PORTFOLIO_WHITE = '#FFFFFF';

    public createMuiTheme() {
        let theme = createTheme({
            palette: {
                primary: {
                    main: this.PORTFOLIO_COLOUR_1,
                    contrastText: this.PORTFOLIO_CREAM,
                },
                secondary: {
                    main: this.PORTFOLIO_COLOUR_2,
                    contrastText: this.PORTFOLIO_CREAM,
                },
                background: {
                    default: this.PORTFOLIO_CREAM,
                    paper: this.PORTFOLIO_CREAM,
                },
            },
            typography: {
                fontFamily: ['Gilroy-Medium', 'sans-serif'].join(','),
                h2: {
                    color: this.PORTFOLIO_COLOUR_1,
                },
                h3: {
                    color: this.PORTFOLIO_COLOUR_3,
                    fontWeight: 300,
                },
                h4: {
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    fontFamily: 'Gilroy-bold',
                    color: this.PORTFOLIO_COLOUR_1,
                    fontSize: '16px',
                    lineHeight: '24px',
                },
                h6: {
                    fontWeight: 'normal',
                },
                subtitle1: {
                    color: this.PORTFOLIO_COLOUR_4,
                    fontWeight: 500,
                },
            },
            components: {
                MuiFilledInput: {
                    styleOverrides: {
                        root: {
                            backgroundColor: this.PORTFOLIO_COLOUR_5,
                        },
                    },
                },
                MuiFormLabel: {
                    styleOverrides: {
                        root: {
                            '&.Mui-focused': {
                                color: this.PORTFOLIO_COLOUR_2,
                            },
                        },
                    },
                },
                MuiListItemText: {
                    styleOverrides: {
                        primary: {
                            color: this.PORTFOLIO_COLOUR_2,
                        },
                        secondary: {
                            textDecoration: 'none !important',
                        },
                    },
                },
                MuiLink: {
                    styleOverrides: {
                        root: {
                            color: this.PORTFOLIO_COLOUR_2,
                        },
                    },
                },
                MuiTab: {
                    styleOverrides: {
                        textColorPrimary: {
                            '&.Mui-selected': {
                                color: this.PORTFOLIO_COLOUR_1,
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
        headHtml += `<link rel="mask-icon" href="/img/default/safari-pinned-tab.svg" color="${this.PORTFOLIO_COLOUR_1}">`;
        headHtml += '<link rel="shortcut icon" href="/img/default/favicon.ico">';
        headHtml += `<meta name="msapplication-TileColor" content="${this.PORTFOLIO_COLOUR_1}">`;
        headHtml += '<meta name="msapplication-config" content="/img/default/browserconfig.xml">';
        headHtml += `<meta name="theme-color" content="${this.PORTFOLIO_COLOUR_1}">`;

        document.getElementsByTagName('head')[0].innerHTML = headHtml;

        document.title = this.appName;
    }

    public get appName() {
        return 'Harrison Cowern Portfolio';
    }

    public get headerClass(): CSSProperties {
        return {
            backgroundColor: this.PORTFOLIO_COLOUR_3,
            color: this.PORTFOLIO_CREAM,
        };
    }

    public get headerLogo() {
        return headerLogo;
    }

    public get footerClass(): CSSProperties {
        return {
            backgroundColor: this.PORTFOLIO_COLOUR_3,
            color: this.PORTFOLIO_CREAM,
        };
    }
}

export const style = new SiteStyle();
