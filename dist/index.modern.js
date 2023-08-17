import { TableRow, TableCell, Checkbox, TableHead, TableSortLabel, Box, Typography, Stack, Card, CardHeader, TableContainer, Tooltip, IconButton, Table, TableBody, TablePagination, FormControlLabel, Switch } from '@mui/material';
import React__default, { useState, createElement } from 'react';
import { styled } from '@mui/material/styles';
import { BsFillTrash2Fill } from 'react-icons/bs';

function Row({
  row,
  selected,
  onEditRow,
  onSelectRow
}) {
  return React__default.createElement(TableRow, {
    hover: true,
    selected: true
  }, React__default.createElement(TableCell, {
    padding: 'checkbox'
  }, React__default.createElement(Checkbox, {
    checked: selected,
    onClick: onSelectRow
  })));
}

function TableEmptyRows({
  emptyRows,
  height
}) {
  if (!emptyRows) {
    return null;
  }
  return React__default.createElement(TableRow, {
    sx: {
      ...(height && {
        height: height * emptyRows
      })
    }
  }, React__default.createElement(TableCell, {
    colSpan: 9
  }));
}

const visuallyHidden = {
  border: 0,
  margin: -1,
  padding: 0,
  width: '1px',
  height: '1px',
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  clip: 'rect(0 0 0 0)'
};
function TableHeadCustom({
  order,
  orderBy,
  rowCount = 0,
  headLabel,
  numSelected = 0,
  onSort,
  onSelectAllRows,
  sx
}) {
  return React__default.createElement(TableHead, {
    sx: sx
  }, React__default.createElement(TableRow, null, onSelectAllRows && React__default.createElement(TableCell, {
    padding: 'checkbox'
  }, React__default.createElement(Checkbox, {
    indeterminate: numSelected > 0 && numSelected < rowCount,
    checked: rowCount > 0 && numSelected === rowCount,
    onChange: event => onSelectAllRows(event.target.checked)
  })), headLabel.map(headCell => React__default.createElement(TableCell, {
    key: headCell.id,
    align: headCell.align || 'left',
    sortDirection: orderBy === headCell.id ? order : false,
    sx: {
      width: headCell.width,
      minWidth: headCell.minWidth
    }
  }, onSort ? React__default.createElement(TableSortLabel, {
    hideSortIcon: true,
    active: orderBy === headCell.id,
    direction: orderBy === headCell.id ? order : 'asc',
    onClick: () => onSort(headCell.id),
    sx: {
      textTransform: 'capitalize'
    }
  }, headCell.label, orderBy === headCell.id ? React__default.createElement(Box, {
    sx: {
      ...visuallyHidden
    }
  }, order === 'desc' ? 'sorted descending' : 'sorted ascending') : null) : headCell.label))));
}

const RootStyle = styled(Box)(({
  theme
}) => ({
  height: '100%',
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(8, 2)
}));
function EmptyContent({
  title,
  description,
  img,
  ...other
}) {
  return React__default.createElement(RootStyle, Object.assign({}, other), img ? React__default.createElement("img", {
    alt: 'empty content',
    src: img,
    style: {
      height: 240
    }
  }) : null, React__default.createElement(Typography, {
    variant: 'h5',
    gutterBottom: true
  }, title), description && React__default.createElement(Typography, {
    variant: 'body2',
    sx: {
      color: 'text.secondary'
    }
  }, description));
}

function TableNoData({
  isNotFound,
  img,
  title = 'No Data'
}) {
  return React__default.createElement(TableRow, null, isNotFound ? React__default.createElement(TableCell, {
    colSpan: 12
  }, React__default.createElement(EmptyContent, {
    img: img,
    title: title,
    sx: {
      '& span.MuiBox-root': {
        height: 160
      }
    }
  })) : React__default.createElement(TableCell, {
    colSpan: 12,
    sx: {
      p: 0
    }
  }));
}

function TableSelectedActions({
  dense,
  actions,
  rowCount,
  numSelected,
  onSelectAllRows,
  sx,
  ...other
}) {
  return React__default.createElement(Stack, Object.assign({
    direction: 'row',
    alignItems: 'center',
    sx: {
      px: 2,
      top: 0,
      left: 8,
      right: 8,
      zIndex: 9,
      height: 58,
      borderRadius: 1,
      position: 'absolute',
      bgcolor: 'secondary.custom',
      ...(dense && {
        pl: 1,
        height: 38
      }),
      ...sx
    }
  }, other), React__default.createElement(Checkbox, {
    indeterminate: numSelected > 0 && numSelected < rowCount,
    checked: rowCount > 0 && numSelected === rowCount,
    onChange: event => onSelectAllRows(event.target.checked)
  }), React__default.createElement(Typography, {
    variant: 'subtitle1',
    sx: {
      ml: 2,
      flexGrow: 1,
      color: 'primary.main',
      ...(dense && {
        ml: 3
      })
    }
  }, numSelected, " \u0111\u00E3 ch\u1ECDn"), actions && actions);
}

function useTable(props) {
  const [dense, setDense] = useState((props === null || props === void 0 ? void 0 : props.defaultDense) || false);
  const [orderBy, setOrderBy] = useState((props === null || props === void 0 ? void 0 : props.defaultOrderBy) || 'name');
  const [order, setOrder] = useState((props === null || props === void 0 ? void 0 : props.defaultOrder) || 'asc');
  const [page, setPage] = useState((props === null || props === void 0 ? void 0 : props.defaultCurrentPage) || 0);
  const [rowsPerPage, setRowsPerPage] = useState((props === null || props === void 0 ? void 0 : props.defaultRowsPerPage) || 5);
  const [selected, setSelected] = useState((props === null || props === void 0 ? void 0 : props.defaultSelected) || []);
  const onSort = id => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };
  const onSelectRow = id => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };
  const onSelectAllRows = (checked, newSelecteds) => {
    if (checked) {
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };
  const onChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const onChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const onChangeDense = event => {
    setDense(event.target.checked);
  };
  return {
    dense,
    order,
    page,
    setPage,
    orderBy,
    rowsPerPage,
    selected,
    setSelected,
    onSelectRow,
    onSelectAllRows,
    onSort,
    onChangePage,
    onChangeDense,
    onChangeRowsPerPage
  };
}
function emptyRows(page, rowsPerPage, arrayLength) {
  return page > 0 ? Math.max(0, (1 + page) * rowsPerPage - arrayLength) : 0;
}

const ReactTableMaterial = ({
  titleTable,
  dataTable,
  sxTableContainer,
  columns,
  emptyDataURLImage,
  emptyTitle
}) => {
  const {
    dense,
    page,
    order,
    orderBy,
    rowsPerPage,
    setPage,
    selected,
    setSelected,
    onSelectRow,
    onSelectAllRows,
    onSort,
    onChangeDense,
    onChangePage,
    onChangeRowsPerPage
  } = useTable({
    defaultOrderBy: 'name',
    defaultRowsPerPage: 10
  });
  const denseHeight = dense ? 60 : 80;
  return createElement(Card, null, createElement(CardHeader, {
    title: titleTable
  }), createElement(TableContainer, {
    sx: {
      minWidth: 500,
      position: 'relative',
      ...sxTableContainer
    }
  }, selected.length > 0 && createElement(TableSelectedActions, {
    dense: dense,
    numSelected: selected.length,
    rowCount: dataTable.length,
    onSelectAllRows: checked => onSelectAllRows(checked, dataTable.map(row => row.id)),
    actions: createElement(Tooltip, {
      title: 'Delete'
    }, createElement(IconButton, {
      color: 'primary',
      onClick: () => {}
    }, createElement(BsFillTrash2Fill, {
      size: 20
    })))
  }), createElement(Table, {
    size: dense ? 'small' : 'medium',
    stickyHeader: true
  }, createElement(TableHeadCustom, {
    order: order,
    orderBy: orderBy,
    headLabel: columns,
    rowCount: dataTable.length,
    numSelected: selected.length,
    onSort: onSort,
    onSelectAllRows: checked => onSelectAllRows(checked, dataTable.map(row => row.id))
  }), createElement(TableBody, null, dataTable === null || dataTable === void 0 ? void 0 : dataTable.map(row => createElement(Row, {
    key: row.id,
    row: row,
    selected: selected.includes(row.id),
    onSelectRow: () => onSelectRow(row.id)
  })), createElement(TableEmptyRows, {
    height: denseHeight,
    emptyRows: emptyRows(page, rowsPerPage, dataTable.length)
  }), createElement(TableNoData, {
    title: emptyTitle,
    img: emptyDataURLImage,
    isNotFound: true
  })))), createElement(Box, {
    sx: {
      position: 'relative'
    }
  }, createElement(TablePagination, {
    rowsPerPageOptions: [5, 10, 25],
    component: 'div',
    count: dataTable.length,
    rowsPerPage: rowsPerPage,
    page: page,
    onPageChange: onChangePage,
    onRowsPerPageChange: onChangeRowsPerPage
  }), createElement(FormControlLabel, {
    control: createElement(Switch, {
      checked: dense,
      onChange: onChangeDense
    }),
    label: 'Dense',
    sx: {
      px: 3,
      py: 1.5,
      top: 0,
      position: {
        md: 'absolute'
      }
    }
  })));
};

export { ReactTableMaterial };
//# sourceMappingURL=index.modern.js.map
