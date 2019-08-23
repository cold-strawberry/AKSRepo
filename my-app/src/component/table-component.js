import React from 'react';
import MaterialTable from 'material-table';
import { MuiThemeProvider } from '@material-ui/core/styles';
import tabletheme from '../theme/table-theme.js';
import Button from '@material-ui/core/Button';

class TableComponent extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={tabletheme}>
                <MaterialTable title='Pending Approvals'                    
                    columns={[
                      { title: 'Name', field: 'name' },
                      { title: 'Surname', field: 'surname' },
                      { title: 'Email', field: 'email' },
                      {
                        title: 'Country',
                        field: 'country',
                        lookup: { 34: 'India', 63: 'Singapore', 1: 'America', 2: 'England', 3: 'Paris' },
                      },
                      { title: 'AccountType', field: 'accountType', lookup: { 0: 'Individual', 1: 'Trust', 2: 'Entity' }, },
                      { title: 'Reference. No.', field: 'referenceNumber' },
                    ]}
                    data={[
                      { name: 'John', surname: 'Baran', email: 'john@gmail.com', country: 63, accountType: 0, referenceNumber: '63544333433232'  },
                      { name: 'Tom', surname: 'Obama', email: 'john@gmail.com', country: 63, accountType: 0, referenceNumber: '63544333433232'  },
                      { name: 'Dave', surname: 'Johnson', email: 'john@gmail.com', country: 63, accountType: 0, referenceNumber: '63544333433232'  },
                      { name: 'Michael', surname: 'Tan', email: 'john@gmail.com', country: 63, accountType: 0, referenceNumber: '63544333433232'  },
                      { name: 'Aaron', surname: 'Han', email: 'john@gmail.com', country: 63, accountType: 0, referenceNumber: '63544333433232'  },
                      { name: 'Sam', surname: 'Baran' , email: 'john@gmail.com', country: 63, accountType: 0, referenceNumber: '63544333433232'  },
                      { name: 'Sam2', surname: 'Obama', email: 'john@gmail.com', country: 63, accountType: 0, referenceNumber: '63544333433232'  },
                      { name: 'Shams', surname: 'Johnson', email: 'john@gmail.com', country: 63, accountType: 0, referenceNumber: '63544333433232'  },
                      { name: 'Pak', surname: 'Tan', email: 'john@gmail.com', country: 63, accountType: 0, referenceNumber: '63544333433232'  },
                      { name: 'Aks', surname: 'Han', email: 'john@gmail.com', country: 63, accountType: 0, referenceNumber: '63544333433232'  },
                      { name: 'IronMan', surname: 'Baran', email: 'john@gmail.com', country: 63, accountType: 0, referenceNumber: '63544333433232'  },
                      { name: 'Hulk', surname: 'Obama', email: 'john@gmail.com', country: 63, accountType: 0, referenceNumber: '63544333433232'  },
                      { name: 'Thor', surname: 'Johnson', email: 'john@gmail.com', country: 63, accountType: 0, referenceNumber: '63544333433232'  },

                    ]}        
                    actions={[
                      {
                        icon: 'save',
                        tooltip: 'Save User',
                        onClick: (event, rowData) => alert("You saved " + rowData.name)
                      }
                    ]}
                    components={{
                      Action: props => (
                        <Button
                          onClick={(event) => props.action.onClick(event, props.data)}
                          color="primary"
                          variant="contained"
                          style={{textTransform: 'none'}}
                          size="small"
                        >
                          Approve
                        </Button>
                      ),
                    }}
                    options={{
                        filtering: false
                    }}
                />
            </ MuiThemeProvider>

        );
    }
}

export default TableComponent;