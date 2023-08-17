import { Checkbox, TableCell, TableRow } from '@mui/material'
import React from 'react'

type RowProps = {
  row: any
  selected: boolean
  onEditRow?: VoidFunction
  onSelectRow: VoidFunction
  onDeleteRow?: VoidFunction
}

function Row({ row, selected, onEditRow, onSelectRow }: RowProps) {
  return (
    <TableRow hover selected>
      <TableCell padding='checkbox'>
        <Checkbox checked={selected} onClick={onSelectRow} />
      </TableCell>
    </TableRow>
  )
}

export default Row
