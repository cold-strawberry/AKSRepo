import { createMuiTheme } from '@material-ui/core/styles';
const tabletheme = createMuiTheme({
	overrides: {
		MuiPaper: {
			root: {
				margin: '50px 50px',
			},
			elevation2: {
				boxShadow: '2px 2px 2px 2px red'
			}

		},

		MuiToolbar: {
			regular: {
				minHeight: '20px',
				borderTop: '1px solid #ba9f76',
				color: '#fff',
			},
			root: {
				height: '50px',
				minHeight: '50px',
				//backgroundColor: '#000',
				backgroundColor: 'green'
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
				backgroundColor: '#000',
				//borderBottom: '1px solid #ba9f76',
			}
		},
		MuiTableRow: {
			root: {
				height: '10px',
				textAlign: 'left',
				borderTop: 'none',
				borderBottom: '0.8px solid #ba9f76',
				backgroundColor: '#000',
			},
			head: {
				height: '10px',
				borderTop: '1px solid #ba9f76',
				backgroundColor: '#000',
				textAlign: 'left'
			}
		},

		MuiTableCell: {
			root: {
				borderBottom: 'none',
			},
			body: {
				padding: 'none',
				width: 20,
				maxWidth: 50,
				color: '#fff',
				fontSize: 12,
				fontWeight: 300,
				lineHeight: '0.5 !important',
			},
			head: {
				color: '#ba9f76',
				textAlign: 'left !important',
				padding: 'none',
				fontSize: 13,
				fontWeight: 500,
				lineHeight: '0.5 !important',
				backgroundColor: '#000 !important'
			}
		},

		MuiInput: {
			underline: {
				content: 'initial',
				'&:before': {
					content: 'initial',
				},
				'&:after': {
					content: 'initial',
				}

			},
			input: {
				backgroundColor: '#222',
				borderBottom: '1px solid #ba9f76',
				height: '10px',
				color: '#fff',
				fontSize: '10px'
			}
		},
		MuiTablePagination: {
			root: {
				borderBottom: '1px solid #ba9f76',
			},

		},
		MuiButton: {
			containedPrimary: {
				minWidth: '10px',
				backgroundColor: '#ba9f76',
				height: '29px',
				marginTop: '1px',
				border: '1px solid #ba9f76',
				borderRadius: '3px',
				color: '#fff',
				fontSize: 12,
				fontWeight: 300,
				'&:hover': {
					backgroundColor: '#222',
				}
			},
			label: {
				marginTop: '-2px'
			}
		},
		MuiTypography: {
			h6: {
				marginLeft: '40vw',
				fontSize: '16px',
				fontWeight: 500,
				color: '#ba9f76'
			},
			caption: { 
				color: '#fff'
			}
		},
		MuiSelect: {
			select: {
				border: '1px solid #ba9f76',
				borderRadius: '2px',
				color: '#fff',
			}
		},
		MuiTableSortLabel: {
			root: {
				'&:hover': {
					color: '#ba9f76',
					fontSize: 12,
					fontWeight: 500,
					backgroundColor: '#000',
					'&.MuiTableSortLabel-root:hover .MuiTableSortLabel-icon': {
						color: "white !important",
					}
				},

				'&:focus': {
					color: '#ba9f76',
					fontSize: 13,
					fontWeight: 500,
					backgroundColor: '#000'
				},
				'&.MuiTableSortLabel-icon': {
					color: '#505050 !important',
				},
				'&.MuiTableSortLabel-active': {
					color: '#d49028',
					fontSize: 13,
					fontWeight: 500,
					backgroundColor: '#000'
				}

			},
			icon: {
				opacity: 1,
				height: 'auto',
				width: 'auto',
                marginLeft: 0,
                fontSize: 15,
				'&.MuiTableSortLabel-iconDirectionAsc': {
					color: '#505050 !important',
				},
				'&.MuiTableSortLabel-iconDirectionDesc': {
					color: '#505050 !important',
				},
				
			}


		},
		MuiInputBase: {
			root: {
				color: '#fff'
			}
		},
		MuiInputAdornment: {
			root: {
				'&:focus': {
					outline: 'red auto 1px',
				}
			}
		},
		MuiIcon: {
			fontSizeSmall:{
				color: '#ba9f76'
			}
		},
		MuiIconButton:{
			root: {
				color: '#ba9f76',
				'&:hover': {
					backgroundColor: 'rgba(168,146, 18, 0.6)'
					
				 },
				 '&.Mui-disabled': {
					color: 'rgba(168,146, 18, 0.6)'
					
				 }				 
			}
		},
		MuiMenu: {
			list: {
				backgroundColor: '#000',
				border: '1px solid #ba9f76',
				color: '#ba9f76',
				borderRadius: '4px'
			}
		}
		// MuiMenuItem:{
		// 	root: {
		// 		backgroundColor: '#000',
		// 		color: '#ba9f76',
		// 		border: '0.8px solid #ba9f76',
		// 		boxShadow: '2px 2px 2px 2px red',
		// 		lineHeight: 1


		// 	}
		// }
	},
});

export default tabletheme;
