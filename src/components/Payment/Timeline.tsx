import React from 'react'
import { useIntl } from 'gatsby-plugin-react-intl'
import * as SC from './timeline.module.scss'

const timelineItems = [
    {
        id: 1,
        text: 'confirm_policy',
    },
    {
        id: 2,
        text: 'enter_payment_method',
    },
]

export const Timeline = () => {
    const intl = useIntl()

    return (
        <ul className={SC.timeline}>
            {timelineItems.map((item) => {
                return (
                    <li key={item.id}>
                        <div className={SC.timelineNumber}>{item.id}</div>
                        <div className={SC.timelineContent}>
                            <p>
                                {intl.formatMessage({
                                    id: item.text,
                                })}
                            </p>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}
