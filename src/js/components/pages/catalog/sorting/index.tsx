import * as React from 'react'
import {FunctionComponent, useState} from 'react'

// type CostSorting = 'small-to-large' | 'large-to-small' | 'none'
//
// const costSortingDefault: CostSorting = 'small-to-large'

export const Sorting: FunctionComponent = () => {
    // todo - из редакса
    // const {costSorting, setCostSorting} = useState(costSortingDefault)

    return (
        <div>
            Сортировка:
            <span>Сначала дешёвые</span>
            <span>Сначала дорогие</span>
        </div>
    )
}
