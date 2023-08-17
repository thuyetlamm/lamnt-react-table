# lamnt-react-table

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/lamnt-react-table.svg)](https://www.npmjs.com/package/lamnt-react-table) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save lamnt-react-table
```

## Usage

```tsx
import React, { Component } from 'react'

import ReactTableMaterial from 'lamnt-react-table'
import 'lamnt-react-table/dist/index.css'

class Example extends Component {
  /** 
   * @param columns
   * const TABLE_HEAD = [
  { id: 'name', label: 'Product', align: 'left' },
  { id: 'createdAt', label: 'Create at', align: 'left' },
  { id: 'inventoryType', label: 'Status', align: 'center', width: 180 },
  { id: 'price', label: 'Price', align: 'right' },
  { id: '' }
]
   * 
   * **/
  render() {
    return (
      <ReactTableMaterial
        titleTable='' // title display table
        emptyDataURLImage='' // empty data URL
        emptyTitle='' // empty title display table when no data is available
        dataTable={[]} // array List to render
        columns={[]} // array List to render header columns
        sxTableContainer={{}} // custom container sx Props
      />
    )
  }
}
```

## License

MIT © [thuyetlamm](https://github.com/thuyetlamm)
