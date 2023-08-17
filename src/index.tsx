/* eslint-disable no-unused-vars */
import {
  Box,
  Card,
  CardHeader,
  FormControlLabel,
  IconButton,
  Switch,
  SxProps,
  Table,
  TableBody,
  TableContainer,
  TablePagination,
  Tooltip
} from '@mui/material'
import { ColumnHeader } from 'types/table'
import Row from 'components/Row'
import TableEmptyRows from 'components/TableEmptyRows'
import TableHeadCustom from 'components/TableHeadCustom'
import TableNoData from 'components/TableNoData'
import TableSelectedActions from 'components/TableSelectedActions'
import useTable, { emptyRows } from 'hooks/useTable'
import * as React from 'react'
import { BsFillTrash2Fill } from 'react-icons/bs'

interface Props {
  titleTable: string
  sxTableContainer?: SxProps
  dataTable: any[]
  columns: ColumnHeader[]
  emptyDataURLImage?: string
  emptyTitle?: string
}

export const ReactTableMaterial = ({
  titleTable,
  dataTable,
  sxTableContainer,
  columns,
  emptyDataURLImage,
  emptyTitle
}: Props) => {
  const {
    dense,
    page,
    order,
    orderBy,
    rowsPerPage,
    setPage,
    //
    selected,
    setSelected,
    onSelectRow,
    onSelectAllRows,
    //
    onSort,
    onChangeDense,
    onChangePage,
    onChangeRowsPerPage
  } = useTable({ defaultOrderBy: 'name', defaultRowsPerPage: 10 })

  const denseHeight = dense ? 60 : 80

  return (
    <Card>
      <CardHeader title={titleTable} />
      <TableContainer
        sx={{ minWidth: 500, position: 'relative', ...sxTableContainer }}
      >
        {selected.length > 0 && (
          <TableSelectedActions
            dense={dense}
            numSelected={selected.length}
            rowCount={dataTable.length}
            onSelectAllRows={(checked) =>
              onSelectAllRows(
                checked,
                dataTable.map((row) => row.id)
              )
            }
            actions={
              <Tooltip title='Delete'>
                <IconButton color='primary' onClick={() => {}}>
                  <BsFillTrash2Fill size={20} />
                </IconButton>
              </Tooltip>
            }
          />
        )}
        <Table size={dense ? 'small' : 'medium'} stickyHeader>
          <TableHeadCustom
            order={order}
            orderBy={orderBy}
            headLabel={columns}
            rowCount={dataTable.length}
            numSelected={selected.length}
            onSort={onSort}
            onSelectAllRows={(checked) =>
              onSelectAllRows(
                checked,
                dataTable.map((row) => row.id)
              )
            }
          />
          <TableBody>
            {dataTable?.map((row) => (
              <Row
                key={row.id}
                row={row}
                selected={selected.includes(row.id)}
                onSelectRow={() => onSelectRow(row.id)}
              />
            ))}
            <TableEmptyRows
              height={denseHeight}
              emptyRows={emptyRows(page, rowsPerPage, dataTable.length)}
            />

            <TableNoData
              title={emptyTitle}
              img={emptyDataURLImage}
              isNotFound
            />
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ position: 'relative' }}>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component='div'
          count={dataTable.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={onChangePage}
          onRowsPerPageChange={onChangeRowsPerPage}
        />
        <FormControlLabel
          control={<Switch checked={dense} onChange={onChangeDense} />}
          label='Dense'
          sx={{ px: 3, py: 1.5, top: 0, position: { md: 'absolute' } }}
        />
      </Box>
    </Card>
  )
}
