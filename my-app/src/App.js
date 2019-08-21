import './App.css';
import { Grid, MuiThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import React, { Component } from 'react';
import MaterialTable from 'material-table';


let direction = 'ltr';
const theme = createMuiTheme({
  overrides: {
    MuiGrid: {
        container: {
          backgroundColor: 'red',
        },
        item: {
          backgroundColor: 'green',
          grid: {
            backgroundColor: 'purple',
            xs: {
              backgroundColor: 'aqua',
            }
          }
        }

    }
  },
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
      { title: 'Name', field: 'name', filterPlaceholder: 'Name filter', editable: 'true'},
      { title: 'Surname', field: 'surname', filterPlaceholder: 'Surname filter', initialEditValue: 'Surname'},
      { title: 'Marital Status', field: 'isMarried', type: 'boolean' },
      { title: 'Sex', field: 'sex', disableClick: true, editable: 'onAdd' },
      { title: 'Type', field: 'type', removable: false, editable: 'never', },
      { title: 'Birth Date', field: 'birthDate', type: 'date' },
      { title: 'City', field: 'birthCity', lookup: { 0: 'Lucknow', 1: 'Paris', 2: 'Tokyo', 3: 'Munich', 4: 'Singapore' } },
      { title: 'Date', field: 'insertDateTime', type: 'datetime'},
      { title: 'Time', field: 'time', type: 'time'},
    ],
  }

  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <div style={{ maxWidth: '100%', direction }}>
            <Grid container>
              <Grid item xs={12}>
                <MaterialTable /*style={ { backgroundColor: '#222', color: '#fff' } }*/
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
