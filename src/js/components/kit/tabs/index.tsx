import * as React from 'react'
import {FunctionComponent, ReactElement, useState} from 'react'
import Row from 'antd/lib/row'
import 'antd/lib/row/style'
import Col from 'antd/lib/col'
import 'antd/lib/col/style'
import {Tab} from './tab'

export interface TabInterface {
    id: number;
    name: string;
    panel: ReactElement;
}

export interface TabsPropsInterface {
    tabs: TabInterface[];
    defaultActiveId: number;
    className?: string;
}

export const Tabs: FunctionComponent<TabsPropsInterface> = ({
    tabs,
    defaultActiveId,
    className,
}) => {
    const tabsElements = [],
        panelsElements = [],
        [activeId, setActiveId] = useState(defaultActiveId)

    tabs.forEach(({id, name, panel}) => {
        tabsElements.push(
            <Col key={id}>
                <Tab
                    name={name}
                    isActive={activeId === id}
                    onClick={() => setActiveId(id)}
                />
            </Col>
        )
        panelsElements.push(
            <div
                className={`tabs__panel ${
                    activeId === id ? 'tabs__panel_active' : ''
                }`}
                key={id}
            >
                {panel}
            </div>
        )
    })

    return (
        <div className={'tabs ' + className || ''}>
            <Row gutter={24} type={'flex'}>
                {tabsElements}
            </Row>
            {panelsElements}
        </div>
    )
}
