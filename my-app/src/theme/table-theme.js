import { createMuiTheme } from '@material-ui/core/styles';
const tabletheme = createMuiTheme({
  overrides: {
	MuiToolbar:{
		regular: {
			minHeight: '20px',
			borderTop: '1px solid red',
			color: '#fff',
			
		},
		root: {
			height: '50px',
			minHeight: '50px',
			backgroundColor: 'antiquewhite'
		},
	},
	MuiTable: {
    	root: {
			margin: '0',
			backgroundColor: '#000'
    	},
	},
	MuiTableBody: {
		root: {
			backgroundColor: "#000",
			borderBottom: '1px solid #ba9f76',
    	}
	},
  	MuiTableRow: {
  		root: {
			height: '10px',
			textAlign: 'left',
			borderTop: 'none',
			borderBottom: '1px solid #ba9f76',
			backgroundColor: "#000",
		},
  		head: {
			  height: '10px',
			  borderTop: '1px solid #ba9f76',
			  backgroundColor: "#000",
			  textAlign: 'left'
  		}
	},
	
    MuiTableCell: {
    	body: {
	    	//margin: 1,
			//padding: 1,
			padding: 'none',
			width: 20,
			maxWidth: 50,
			color: '#fff',
			fontSize: 12,
			fontWeight: 300,

		},
		head: {
			color: '#ba9f76',
			textAlign: 'left',
			padding: 'none',
			fontSize: '13px',
			fontWeight: 500,
		}
    },	
	  
    MuiInput: {
		underline: {
			content: 'initial',
			'&:before' : {
				content: 'initial',
			},
			'&:after' : {
				content: 'initial',
			}

		},
    	input: {
			backgroundColor: '#222',
			border: '1px solid #ba9f76',
			borderRadius: '5px',
			height: '10px',
			color: '#fff'
    	}
	},
	MuiTablePagination: {
		root: {
			border: '1px solid #ba9f76',
			color: 'red'
		},
		
	},
    MuiButton: {
    	containedPrimary: {
			backgroundColor: '#ba9f76',
			height: '18px',
			marginTop: '1px',
			border: '1px solid #ba9f76',
			borderRadius: '3px',
			'&:hover' : {
				backgroundColor: 'transparent',
			}
		},
		label: {
			marginTop: '-7px'
		}
    },
  },
});

export default tabletheme;