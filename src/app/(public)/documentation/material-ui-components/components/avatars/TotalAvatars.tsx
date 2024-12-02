import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export default function TotalAvatars() {
	return (
		<AvatarGroup total={24}>
			<Avatar
				alt="Remy Sharp"
				src="/material-ui-static/images/avatar/1.jpg"
			/>
			<Avatar
				alt="Travis Howard"
				src="/material-ui-static/images/avatar/2.jpg"
			/>
			<Avatar
				alt="Agnes Walker"
				src="/material-ui-static/images/avatar/4.jpg"
			/>
			<Avatar
				alt="Trevor Henderson"
				src="/material-ui-static/images/avatar/5.jpg"
			/>
		</AvatarGroup>
	);
}
