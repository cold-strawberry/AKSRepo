import './App.css';
import { Grid, MuiThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import React, { Component } from 'react';
import MaterialTable from 'material-table';

let direction = 'ltr';
const theme = createMuiTheme({
  direction: direction,
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#fff',
    }    
  }
});



class App extends Component {
  tableRef = React.createRef();

  colRenderCount = 0;

  state = {
    text: 'text',
    selecteds: 0,
    data: [
      { id: 1, name: 'Lee', surname: 'Dzouza', isMarried: false, birthDate: new Date(1987, 1, 1), birthCity: 0, sex: 'Male', type: 'Adult', insertDateTime: new Date(2018, 1, 1, 12, 23, 44), time: new Date(1900, 1, 1, 14, 23, 35) },
      { id: 2, name: 'John', surname: 'Abhraham', isMarried: false, birthDate: new Date(1987, 1, 1), birthCity: 2, sex: 'Male', type: 'Adult', insertDateTime: new Date(2018, 1, 1, 12, 23, 44), time: new Date(1900, 1, 1, 14, 23, 35) },
      { id: 3, name: 'Rishi', surname: 'Kan', isMarried: true, birthDate: new Date(1987, 1, 1), birthCity: 3, sex: 'Male', type: 'Adult', insertDateTime: new Date(2018, 1, 1, 12, 23, 44), time: new Date(1900, 1, 1, 14, 23, 35) },
      { id: 4, name: 'Ashutosh', surname: 'Tan', isMarried: true, birthDate: new Date(1987, 1, 1), birthCity: 1, sex: 'Male', type: 'Adult', insertDateTime: new Date(2018, 1, 1, 12, 23, 44), time: new Date(1900, 1, 1, 14, 23, 35) },
      { id: 5, name: 'Def', surname: 'Sopor', isMarried: true, birthDate: new Date(1987, 1, 1), birthCity: 0, sex: 'Male', type: 'Child', insertDateTime: new Date(2018, 1, 1, 12, 23, 44), time: new Date(1900, 1, 1, 14, 23, 35) },
      { id: 6, name: 'Alex', surname: 'Grinz', isMarried: true, birthDate: new Date(1987, 1, 1), birthCity: 0, sex: 'Male', type: 'Adult', insertDateTime: new Date(2018, 1, 1, 12, 23, 44), time: new Date(1900, 1, 1, 14, 23, 35) },
      { id: 7, name: 'Sophie', surname: 'Tan', isMarried: false, birthDate: new Date(1987, 1, 1), birthCity: 4, sex: 'Male', type: 'Adult', insertDateTime: new Date(2018, 1, 1, 12, 23, 44), time: new Date(1900, 1, 1, 14, 23, 35) },

    ],
    columns: [
      { title: 'Name', field: 'name', filterPlaceholder: 'Name filter', editable: 'true', cellStyle: { fontSize: '12px', borderBottom: '0.7px solid #ba9f76', backgroundColor: '#000', color: '#FFF', padding: '0 0 0 0', lineHeight: '2px' }, headerStyle: { fontSize: '12.5px',  borderBottom: '2px solid #ba9f76', borderTop: '2px solid #ba9f76', backgroundColor: '#000', color: '#FFF', padding: '0 0 0 0', lineHeight: '5px' }},
      { title: 'Surname', field: 'surname', filterPlaceholder: 'Surname filter', initialEditValue: 'Surname', cellStyle: { fontSize: '12px', borderBottom: '0.7px solid #ba9f76', backgroundColor: '#222', color: '#FFF', padding: '0 0 0 0', lineHeight: '2px' }, headerStyle: { fontSize: '12.5px',  borderBottom: '2px solid #ba9f76', borderTop: '2px solid #ba9f76', backgroundColor: '#222', color: '#FFF', padding: '0 0 0 0', lineHeight: '5px' }},
      { title: 'Marital Status', field: 'isMarried', type: 'boolean', cellStyle: { fontSize: '12px', width: '150px', borderBottom: '0.7px solid #ba9f76', backgroundColor: '#000', color: '#fff', padding: '0 0 0 0', lineHeight: '2px' }, headerStyle: { fontSize: '12.5px',  width: '150px', borderBottom: '2px solid #ba9f76', borderTop: '2px solid #ba9f76', backgroundColor: '#000', color: '#FFF', padding: '0 0 0 0', lineHeight: '5px' }},
      { title: 'Sex', field: 'sex', disableClick: true, editable: 'onAdd', cellStyle: { fontSize: '12px', borderBottom: '0.7px solid #ba9f76', backgroundColor: '#222', color: '#FFF', padding: '0 0 0 0', lineHeight: '2px' }, headerStyle: { fontSize: '12.5px',  borderBottom: '2px solid #ba9f76', borderTop: '2px solid #ba9f76', backgroundColor: '#222', color: '#FFF', padding: '0 0 0 0', lineHeight: '5px' }},
      { title: 'Type', field: 'type', removable: false, editable: 'never', cellStyle: { fontSize: '12px', borderBottom: '0.7px solid #ba9f76', backgroundColor: '#000', color: '#fff', padding: '0 0 0 0', lineHeight: '2px' }, headerStyle: { fontSize: '12.5px',  borderBottom: '2px solid #ba9f76', borderTop: '2px solid #ba9f76', backgroundColor: '#000', color: '#FFF', padding: '0 0 0 0', lineHeight: '5px' }},
      { title: 'Birth Date', field: 'birthDate', type: 'date', cellStyle: { fontSize: '12px', borderBottom: '0.7px solid #ba9f76', backgroundColor: '#222', color: '#FFF', padding: '0 0 0 0', lineHeight: '2px' }, headerStyle: { fontSize: '12.5px',  borderBottom: '2px solid #ba9f76', borderTop: '2px solid #ba9f76', backgroundColor: '#222', color: '#FFF', padding: '0 0 0 0', lineHeight: '5px' }},
      { title: 'City', field: 'birthCity', lookup: { 0: 'Lucknow', 1: 'Paris', 2: 'Tokyo', 3: 'Munich', 4: 'Singapore' }, cellStyle: { fontSize: '12px', borderBottom: '0.7px solid #ba9f76', backgroundColor: '#000', color: '#fff', padding: '0 0 0 0', lineHeight: '2px' }, headerStyle: { fontSize: '12.5px',  borderBottom: '2px solid #ba9f76', borderTop: '2px solid #ba9f76', backgroundColor: '#000', color: '#FFF', padding: '0 0 0 0', lineHeight: '5px' }},
      { title: 'Date', field: 'insertDateTime', type: 'datetime', cellStyle: { fontSize: '12px', borderBottom: '0.7px solid #ba9f76', backgroundColor: '#222', color: '#FFF', padding: '0 0 0 0', lineHeight: '2px' }, headerStyle: { fontSize: '12.5px',  borderBottom: '2px solid #ba9f76', borderTop: '2px solid #ba9f76', backgroundColor: '#222', color: '#FFF', padding: '0 0 0 0', lineHeight: '5px' }},
      { title: 'Time', field: 'time', type: 'time', cellStyle: { fontSize: '12px', borderBottom: '0.7px solid #ba9f76', backgroundColor: '#000', color: '#fff', padding: '0 0 0 0', lineHeight: '2px' }, headerStyle: { fontSize: '12.5px',  borderBottom: '2px solid #ba9f76', borderTop: '2px solid #ba9f76', backgroundColor: '#000', color: '#FFF', padding: '0 0 0 0', lineHeight: '5px' }},
    ],
  }

  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <div style={{ maxWidth: '100%', direction, /*backgroundColor: '#222'*/ }}>
            <Grid container>
              <Grid item xs={12}>
                <MaterialTable style={ { /*backgroundColor: '#222',*/ color: '#fff' } }
                  tableRef={this.tableRef}
                  columns={this.state.columns}
                  data={this.state.data}
                  title="Employees"
                  options={{
                    selection: true,
                    columnsButton: true,
                    filtering: true,
                    searchFieldStyle: {
                      //backgroundColor: '#000'
                    },
                  }}
                  onSearchChange={(e) => console.log("search changed: " + e)}
                  onColumnDragged={(oldPos, newPos) => console.log("Dropped column from " + oldPos + " to position " + newPos)}
                />
              </Grid>
            </Grid>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}


export default App;
