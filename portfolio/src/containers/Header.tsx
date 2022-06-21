import * as React from 'react';
import { AppBar, Box, Menu, MenuItem, Toolbar } from '@mui/material';

import { style } from '../siteStyles';

export function Header() {
	const [optionsMenuAnchor, setOptionsMenuAnchor] = React.useState<null | HTMLElement>(null);



	return (
		<Box mb={3}>
			<AppBar position="static" color="secondary" style={style.headerClass}>
				<Toolbar>
					<Box width={1} display="flex" justifyContent="flex-end" alignItems="center">
						<Menu anchorEl={optionsMenuAnchor} open={Boolean(optionsMenuAnchor)} onClose={() => setOptionsMenuAnchor(null)}>
							<MenuItem onClick={() => console.log('home')}>Home</MenuItem>
						</Menu>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
