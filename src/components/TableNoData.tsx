// @mui
import { TableRow, TableCell } from '@mui/material'
//
import React from 'react'
import EmptyContent from './EmptyContent'

// ----------------------------------------------------------------------

type Props = {
  isNotFound: boolean
  img?: string
  title?: string
}

export default function TableNoData({
  isNotFound,
  img,
  title = 'No Data'
}: Props) {
  return (
    <TableRow>
      {isNotFound ? (
        <TableCell colSpan={12}>
          <EmptyContent
            img={img}
            title={title}
            sx={{
              '& span.MuiBox-root': { height: 160 }
            }}
          />
        </TableCell>
      ) : (
        <TableCell colSpan={12} sx={{ p: 0 }} />
      )}
    </TableRow>
  )
}
