import React, { FC } from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import * as SC from './index.module.scss'

type WorkProps = {
  data: Array<unknown>
}

const Work: FC<WorkProps> = ({ data }) => {
  const intl = useIntl()

  return (
    <div className="wrapper">
      <div className="section">
        <div className={SC.subtitle}>{intl.formatMessage({ id: 'work' })}</div>
        <div className={SC.description}>{intl.formatMessage({ id: 'work_experience' })}</div>
        <div className={SC.subtitle}>{intl.formatMessage({ id: 'labels.related_links' })}</div>
        <div className={SC.description}>
          <ul>
            {data.map(({ node }: any) => {
              return (
                <li key={node.id}>
                  <a
                    href={node.url}
                    role="button"
                    aria-pressed="true"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {intl.formatMessage({
                      id: node.text,
                    })}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Work
