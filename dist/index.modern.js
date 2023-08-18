import { TableRow, TableCell, Checkbox, TableHead, TableSortLabel, Box, Typography, Stack, Card, CardHeader, TableContainer, Tooltip, IconButton, Table, TableBody, TablePagination, FormControlLabel, Switch } from '@mui/material';
import React__default, { useState, createElement } from 'react';
import { styled } from '@mui/material/styles';
import { BsFillTrash2Fill } from 'react-icons/bs';

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

function Row(_ref) {
  var selected = _ref.selected,
    onSelectRow = _ref.onSelectRow;
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

function TableEmptyRows(_ref) {
  var emptyRows = _ref.emptyRows,
    height = _ref.height;
  if (!emptyRows) {
    return null;
  }
  return React__default.createElement(TableRow, {
    sx: _extends({}, height && {
      height: height * emptyRows
    })
  }, React__default.createElement(TableCell, {
    colSpan: 9
  }));
}

var visuallyHidden = {
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
function TableHeadCustom(_ref) {
  var order = _ref.order,
    orderBy = _ref.orderBy,
    _ref$rowCount = _ref.rowCount,
    rowCount = _ref$rowCount === void 0 ? 0 : _ref$rowCount,
    headLabel = _ref.headLabel,
    _ref$numSelected = _ref.numSelected,
    numSelected = _ref$numSelected === void 0 ? 0 : _ref$numSelected,
    onSort = _ref.onSort,
    onSelectAllRows = _ref.onSelectAllRows,
    sx = _ref.sx;
  return React__default.createElement(TableHead, {
    sx: sx
  }, React__default.createElement(TableRow, null, onSelectAllRows && React__default.createElement(TableCell, {
    padding: 'checkbox'
  }, React__default.createElement(Checkbox, {
    indeterminate: numSelected > 0 && numSelected < rowCount,
    checked: rowCount > 0 && numSelected === rowCount,
    onChange: function onChange(event) {
      return onSelectAllRows(event.target.checked);
    }
  })), headLabel.map(function (headCell) {
    return React__default.createElement(TableCell, {
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
      onClick: function onClick() {
        return onSort(headCell.id);
      },
      sx: {
        textTransform: 'capitalize'
      }
    }, headCell.label, orderBy === headCell.id ? React__default.createElement(Box, {
      sx: _extends({}, visuallyHidden)
    }, order === 'desc' ? 'sorted descending' : 'sorted ascending') : null) : headCell.label);
  })));
}

var _excluded = ["title", "description", "img"];
var RootStyle = styled(Box)(function (_ref) {
  var theme = _ref.theme;
  return {
    height: '100%',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(8, 2)
  };
});
function EmptyContent(_ref2) {
  var title = _ref2.title,
    description = _ref2.description,
    img = _ref2.img,
    other = _objectWithoutPropertiesLoose(_ref2, _excluded);
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

function TableNoData(_ref) {
  var isNotFound = _ref.isNotFound,
    img = _ref.img,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? 'No Data' : _ref$title;
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

var _excluded$1 = ["dense", "actions", "rowCount", "numSelected", "onSelectAllRows", "sx"];
function TableSelectedActions(_ref) {
  var dense = _ref.dense,
    actions = _ref.actions,
    rowCount = _ref.rowCount,
    numSelected = _ref.numSelected,
    onSelectAllRows = _ref.onSelectAllRows,
    sx = _ref.sx,
    other = _objectWithoutPropertiesLoose(_ref, _excluded$1);
  return React__default.createElement(Stack, Object.assign({
    direction: 'row',
    alignItems: 'center',
    sx: _extends({
      px: 2,
      top: 0,
      left: 8,
      right: 8,
      zIndex: 9,
      height: 58,
      borderRadius: 1,
      position: 'absolute',
      bgcolor: 'secondary.custom'
    }, dense && {
      pl: 1,
      height: 38
    }, sx)
  }, other), React__default.createElement(Checkbox, {
    indeterminate: numSelected > 0 && numSelected < rowCount,
    checked: rowCount > 0 && numSelected === rowCount,
    onChange: function onChange(event) {
      return onSelectAllRows(event.target.checked);
    }
  }), React__default.createElement(Typography, {
    variant: 'subtitle1',
    sx: _extends({
      ml: 2,
      flexGrow: 1,
      color: 'primary.main'
    }, dense && {
      ml: 3
    })
  }, numSelected, " \u0111\xE3 ch\u1ECDn"), actions && actions);
}

function useTable(props) {
  var _useState = useState((props === null || props === void 0 ? void 0 : props.defaultDense) || false),
    dense = _useState[0],
    setDense = _useState[1];
  var _useState2 = useState((props === null || props === void 0 ? void 0 : props.defaultOrderBy) || 'name'),
    orderBy = _useState2[0],
    setOrderBy = _useState2[1];
  var _useState3 = useState((props === null || props === void 0 ? void 0 : props.defaultOrder) || 'asc'),
    order = _useState3[0],
    setOrder = _useState3[1];
  var _useState4 = useState((props === null || props === void 0 ? void 0 : props.defaultCurrentPage) || 0),
    page = _useState4[0],
    setPage = _useState4[1];
  var _useState5 = useState((props === null || props === void 0 ? void 0 : props.defaultRowsPerPage) || 5),
    rowsPerPage = _useState5[0],
    setRowsPerPage = _useState5[1];
  var _useState6 = useState((props === null || props === void 0 ? void 0 : props.defaultSelected) || []),
    selected = _useState6[0],
    setSelected = _useState6[1];
  var onSort = function onSort(id) {
    var isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };
  var onSelectRow = function onSelectRow(id) {
    var selectedIndex = selected.indexOf(id);
    var newSelected = [];
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
  var onSelectAllRows = function onSelectAllRows(checked, newSelecteds) {
    if (checked) {
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };
  var onChangePage = function onChangePage(event, newPage) {
    setPage(newPage);
  };
  var onChangeRowsPerPage = function onChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  var onChangeDense = function onChangeDense(event) {
    setDense(event.target.checked);
  };
  return {
    dense: dense,
    order: order,
    page: page,
    setPage: setPage,
    orderBy: orderBy,
    rowsPerPage: rowsPerPage,
    selected: selected,
    setSelected: setSelected,
    onSelectRow: onSelectRow,
    onSelectAllRows: onSelectAllRows,
    onSort: onSort,
    onChangePage: onChangePage,
    onChangeDense: onChangeDense,
    onChangeRowsPerPage: onChangeRowsPerPage
  };
}
function emptyRows(page, rowsPerPage, arrayLength) {
  return page > 0 ? Math.max(0, (1 + page) * rowsPerPage - arrayLength) : 0;
}

var ReactTableMaterial = function ReactTableMaterial(_ref) {
  var titleTable = _ref.titleTable,
    dataTable = _ref.dataTable,
    sxTableContainer = _ref.sxTableContainer,
    columns = _ref.columns,
    emptyDataURLImage = _ref.emptyDataURLImage,
    emptyTitle = _ref.emptyTitle;
  var _useTable = useTable({
      defaultOrderBy: 'name',
      defaultRowsPerPage: 10
    }),
    dense = _useTable.dense,
    page = _useTable.page,
    order = _useTable.order,
    orderBy = _useTable.orderBy,
    rowsPerPage = _useTable.rowsPerPage,
    selected = _useTable.selected,
    _onSelectRow = _useTable.onSelectRow,
    _onSelectAllRows = _useTable.onSelectAllRows,
    onSort = _useTable.onSort,
    onChangeDense = _useTable.onChangeDense,
    onChangePage = _useTable.onChangePage,
    onChangeRowsPerPage = _useTable.onChangeRowsPerPage;
  var denseHeight = dense ? 60 : 80;
  return createElement(Card, null, createElement(CardHeader, {
    title: titleTable
  }), createElement(TableContainer, {
    sx: _extends({
      minWidth: 500,
      position: 'relative'
    }, sxTableContainer)
  }, selected.length > 0 && createElement(TableSelectedActions, {
    dense: dense,
    numSelected: selected.length,
    rowCount: dataTable.length,
    onSelectAllRows: function onSelectAllRows(checked) {
      return _onSelectAllRows(checked, dataTable.map(function (row) {
        return row.id;
      }));
    },
    actions: createElement(Tooltip, {
      title: 'Delete'
    }, createElement(IconButton, {
      color: 'primary',
      onClick: function onClick() {}
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
    onSelectAllRows: function onSelectAllRows(checked) {
      return _onSelectAllRows(checked, dataTable.map(function (row) {
        return row.id;
      }));
    }
  }), createElement(TableBody, null, dataTable === null || dataTable === void 0 ? void 0 : dataTable.map(function (row) {
    return createElement(Row, {
      key: row.id,
      row: row,
      selected: selected.includes(row.id),
      onSelectRow: function onSelectRow() {
        return _onSelectRow(row.id);
      }
    });
  }), createElement(TableEmptyRows, {
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
