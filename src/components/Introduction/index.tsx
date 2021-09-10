import React, { FC } from 'react'
import { useIntl } from 'gatsby-plugin-intl'

type IntroductionProps = {
  data: any
}

const Introduction: FC<IntroductionProps> = ({ data }) => {
  const intl = useIntl()

  const positionList: string[] | undefined = data?.position?.split(',')

  return (
    <div className="section">
      <h1>{intl.formatMessage({ id: 'labels.basic_info' })}</h1>
      <p>{intl.formatMessage({ id: 'basic_biography' })}</p>
      <h2>{intl.formatMessage({ id: 'labels.position' })}</h2>
      <ul>
        {positionList?.map((p: string) => {
          return <li key={p}>{p}</li>
        })}
      </ul>
    </div>
  )
}

export default Introduction
