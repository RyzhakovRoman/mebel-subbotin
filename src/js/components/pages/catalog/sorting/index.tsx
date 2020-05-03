import * as React from 'react'
import {FC} from 'react'
import './index.less'
import {SortingType} from '../../../../types'

interface SortingPropsInterface {
    sortingCost: SortingType;
    onChangeSortingCost: (sorting: SortingType) => void;
}

export const DESC = 'desc',
    ASC = 'asc',
    Sorting: FC<SortingPropsInterface> = ({
        sortingCost,
        onChangeSortingCost,
    }) => {
        console.log('sortingCost ', sortingCost)
        return (
            <div>
                <span
                    className={
                        'sorting-cost__item' +
                        (sortingCost === DESC
                            ? ' sorting-cost__item_active'
                            : '')
                    }
                    onClick={() => onChangeSortingCost(DESC)}
                >
                    Сначала дешёвые
                </span>
                <span
                    className={
                        'sorting-cost__item' +
                        (sortingCost === ASC
                            ? ' sorting-cost__item_active'
                            : '')
                    }
                    onClick={() => onChangeSortingCost(ASC)}
                >
                    Сначала дорогие
                </span>
            </div>
        )
    }

export default Sorting
