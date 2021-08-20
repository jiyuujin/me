import React, { FC } from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import * as SC from './index.module.scss'

type IntroductionProps = {
  data: any
}

const Introduction: FC<IntroductionProps> = ({ data }) => {
  const intl = useIntl()

  const positionList: string[] | undefined = data?.position?.split(',')

  return (
    <div className="wrapper">
      <div className="section">
        <div className={SC.subtitle}>{intl.formatMessage({ id: 'labels.basic_info' })}</div>
        <div className={SC.description}>{intl.formatMessage({ id: 'basic_biography' })}</div>
        <div className={SC.subtitle}>{intl.formatMessage({ id: 'labels.position' })}</div>
        <div className={SC.description}>
          <ul>
            {positionList?.map((p: string) => {
              return <li key={p}>{p}</li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Introduction
