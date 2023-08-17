/* eslint-disable no-unused-vars */
// @mui
import { Checkbox, Typography, Stack, StackProps } from '@mui/material'
import React from 'react'

// ----------------------------------------------------------------------

interface Props extends StackProps {
  dense?: boolean
  actions?: React.ReactNode
  rowCount: number
  numSelected: number
  onSelectAllRows: (checked: boolean) => void
}

export default function TableSelectedActions({
  dense,
  actions,
  rowCount,
  numSelected,
  onSelectAllRows,
  sx,
  ...other
}: Props) {
  return (
    <Stack
      direction='row'
      alignItems='center'
      sx={{
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
      }}
      {...other}
    >
      <Checkbox
        indeterminate={numSelected > 0 && numSelected < rowCount}
        checked={rowCount > 0 && numSelected === rowCount}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          onSelectAllRows(event.target.checked)
        }
      />

      <Typography
        variant='subtitle1'
        sx={{
          ml: 2,
          flexGrow: 1,
          color: 'primary.main',
          ...(dense && {
            ml: 3
          })
        }}
      >
        {numSelected} đã chọn
      </Typography>

      {actions && actions}
    </Stack>
  )
}
