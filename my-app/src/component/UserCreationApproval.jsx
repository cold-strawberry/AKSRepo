import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import MaterialTable from 'material-table';
import Button from '@material-ui/core/Button';
import tabletheme from '../utils/tableTheme';


class UserCreationApproval extends Component {

	render() {
		return (
			// <div style={ { margin: '50px 50px 0 50px', boxShadow: '0px 0px 5px 2px rgba(255, 255, 255, 0.8)', borderRadius: '5px' } }>
			<MuiThemeProvider theme={tabletheme}>
				<MaterialTable title='Pending Approvals' style={ { borderRadius: '8px !important' } }
					columns={[
						{ title: 'Name', field: 'name' },
						{ title: 'Surname', field: 'surname' },
						{ title: 'Email', field: 'email' },
						{
							title: 'Country',
							field: 'country',
							lookup: { 34: 'India', 63: 'Singapore', 1: 'America', 2: 'England', 3: 'Paris' },
						},
						{
							title: 'AccountType',
							field: 'accountType',
							lookup: { 0: 'Individual', 1: 'Trust', 2: 'Entity' },
						},
						{
							title: 'Reference. No.',
							field: 'referenceNumber'
						},
					]}
					data={[
						{ name: 'Cyndy', surname: 'Gabrielli', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'breegster@msn.com' },
						{ name: 'Bernardina', surname: 'Clontz', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'kodeman@msn.com' },
						{ name: 'Juan', surname: 'Gourley', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'wonderkid@live.com' },
						{ name: 'Kaila', surname: 'Brodsky', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'gtaylor@verizon.net' },
						{ name: 'Cinda', surname: 'Poeppelman', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'rcwil@att.net' },
						{ name: 'Theda', surname: 'Quintana', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'themer@aol.com' },
						{ name: 'Roselle', surname: 'Odegaard', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'tromey@me.com' },
						{ name: 'Shanelle', surname: 'Sobolik', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'adhere@icloud.com' },
						{ name: 'Marva', surname: 'Hallum', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'seano@msn.com' },
						{ name: 'Leatrice', surname: 'Engels', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'kostas@verizon.net' },
						{ name: 'Vern', surname: 'Benz', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'saridder@yahoo.com' },
						{ name: 'Ricarda', surname: 'Dehaan', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'jipsen@hotmail.com' },
						{ name: 'Nakisha', surname: 'Vollmer', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'vlefevre@comcast.net' },
						{ name: 'Elvin', surname: 'Birdwell', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'webinc@mac.com' },
						{ name: 'Gale', surname: 'Dubberly', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'ylchang@msn.com' },
						{ name: 'Consuela', surname: 'Mcglone', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'kspiteri@gmail.com' },
						{ name: 'Janita', surname: 'Lavergne', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'killmenow@live.com' },
						{ name: 'Marci', surname: 'Albert', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'vmalik@yahoo.ca' },
						{ name: 'Bobbi', surname: 'Compos', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'dwheeler@me.com' },
						{ name: 'Katy', surname: 'Scarberry', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'okroeger@verizon.net' },
						{ name: 'Kurt', surname: 'Levis', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'benits@aol.com' },
						{ name: 'Olen', surname: 'Malin', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'adamk@aol.com' },
						{ name: 'Amada', surname: 'Ammon', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'magusnet@mac.com' },
						{ name: 'Teresita', surname: 'Done', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'heine@comcast.net' },
						{ name: 'Dedra', surname: 'Springer', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'bryanw@sbcglobal.net' },
						{ name: 'Brittani', surname: 'Thach', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'pjacklam@me.com' },
						{ name: 'Reginald', surname: 'Robins', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'gastown@yahoo.com' },
						{ name: 'Jennefer', surname: 'Rulison', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'khris@sbcglobal.net' },
						{ name: 'Marina', surname: 'Daoust', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'fglock@msn.com' },
						{ name: 'Eartha', surname: 'Erdman', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'lauronen@verizon.net' },
						{ name: 'Klara', surname: 'Blazer', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'karasik@gmail.com' },
						{ name: 'Ginny', surname: 'Burroughs', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'harpes@msn.com' },
						{ name: 'Loreta', surname: 'Romberg', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'crandall@optonline.net' },
						{ name: 'Arianna', surname: 'Baros', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'preneel@msn.com' },
						{ name: 'Mari', surname: 'Bad', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'cgarcia@att.net' },
						{ name: 'Nilsa', surname: 'Tufts', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'ournews@att.net' },
						{ name: 'Florene', surname: 'Bachus', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'jfreedma@aol.com' },
						{ name: 'Kenisha', surname: 'Painter', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'barjam@msn.com' },
						{ name: 'Brigid', surname: 'Hohlt', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'corrada@verizon.net' },
						{ name: 'Queen', surname: 'Cammarata', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'hauma@mac.com' },
						{ name: 'Ivonne', surname: 'Lentz', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'afifi@outlook.com' },
						{ name: 'Truman', surname: 'Music', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'nogin@icloud.com' },
						{ name: 'Burma', surname: 'Abbe', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'jimxugle@aol.com' },
						{ name: 'Lecia', surname: 'Wisniewski', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'grossman@icloud.com' },
						{ name: 'Rachelle', surname: 'Sobczak', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'claesjac@optonline.net' },
						{ name: 'Marissa', surname: 'Selvage', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'nweaver@live.com' },
						{ name: 'Houston', surname: 'Boso', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'birddog@gmail.com' },
						{ name: 'Wilford', surname: 'Short', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'crimsane@sbcglobal.net' },
						{ name: 'Helga', surname: 'Mauro', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'ideguy@att.net' },
						{ name: 'Isaiah', surname: 'Raskin', country: 63, accountType: 0, referenceNumber: '63544333433232', email: 'petersko@icloud.com' },
						{ name: 'John', surname: 'Baran', email: 'john@gmail.com', country: 63, accountType: 0, referenceNumber: '63544333433232' },
						{ name: 'Tom', surname: 'Obama', email: 'aks@gmail.com', country: 63, accountType: 0, referenceNumber: '63544333433232' },
						{ name: 'Dave', surname: 'Johnson', email: 'mks@gmail.com', country: 63, accountType: 0, referenceNumber: '63544333433232' },
						{ name: 'Michael', surname: 'Tan', email: 'john@gmail.com', country: 63, accountType: 0, referenceNumber: '63544333433232' },
						{ name: 'Aaron', surname: 'Han', email: 'john@gmail.com', country: 63, accountType: 0, referenceNumber: '63544333433232' },
						{ name: 'Sam', surname: 'Baran', email: 'john@gmail.com', country: 63, accountType: 0, referenceNumber: '63544333433232' },
						{ name: 'Sam2', surname: 'Obama', email: 'john@gmail.com', country: 63, accountType: 0, referenceNumber: '63544333433232' },
						{ name: 'Shams', surname: 'Johnson', email: 'john@gmail.com', country: 63, accountType: 0, referenceNumber: '63544333433232' },
						{ name: 'Pak', surname: 'Tan', email: 'john@gmail.com', country: 63, accountType: 0, referenceNumber: '63544333433232' },
						{ name: 'Aks', surname: 'Han', email: 'john@gmail.com', country: 63, accountType: 0, referenceNumber: '63544333433232' },
						{ name: 'IronMan', surname: 'Baran', email: 'john@gmail.com', country: 63, accountType: 0, referenceNumber: '63544333433232' },
						{ name: 'Hulk', surname: 'Obama', email: 'john@gmail.com', country: 63, accountType: 0, referenceNumber: '63544333433232' },
						{ name: 'Thor', surname: 'Johnson', email: 'john@gmail.com', country: 63, accountType: 0, referenceNumber: '63544333433232' },
					]}
					actions={[
						{
							icon: 'save',
							tooltip: 'Save User',
							onClick: (event, rowData) => alert('You saved' + rowData.name)
						}
					]}
					components={{
						Action: props => (
							<Button
								onClick={(event) => props.action.onClick(event, props.data)}
								color="primary"
								variant="contained"
								style={ { textTransform: 'none' } }
								size="small"
							>Approve</Button>
						),
					}}
					options={{
						filtering: false
					}}
				/>
			</ MuiThemeProvider>
			//</div>

		);
	}
}

export default UserCreationApproval;
