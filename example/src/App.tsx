import React from 'react'

import { ReactTableMaterial } from 'lamnt-react-table'
import 'lamnt-react-table/dist/index.css'

const TABLE_HEAD = [
  { id: 'name', label: 'Product', align: 'left' },
  { id: 'createdAt', label: 'Create at', align: 'left' },
  { id: 'inventoryType', label: 'Status', align: 'center', width: 180 },
  { id: 'price', label: 'Price', align: 'right' },
  { id: '' }
]

const App = () => {
  return (
    <ReactTableMaterial
      columns={TABLE_HEAD}
      dataTable={[]}
      titleTable="Hello I'm Lam ne 😄"
    />
  )
}

export default App
