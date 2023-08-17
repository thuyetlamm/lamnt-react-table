/* eslint-disable react/react-in-jsx-scope */
// @mui
import { TableRow, TableCell } from '@mui/material'
import React from 'react'

// ----------------------------------------------------------------------

type Props = {
  height?: number
  emptyRows: number
}

export default function TableEmptyRows({ emptyRows, height }: Props) {
  if (!emptyRows) {
    return null
  }

  return (
    <TableRow
      sx={{
        ...(height && {
          height: height * emptyRows
        })
      }}
    >
      <TableCell colSpan={9} />
    </TableRow>
  )
}
