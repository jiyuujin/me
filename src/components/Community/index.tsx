import React, { FC } from 'react'
import { useIntl } from 'gatsby-plugin-react-intl'
import * as SC from './index.module.scss'

type CommunityProps = {
    data: Array<unknown>
}

const Community: FC<CommunityProps> = ({ data }) => {
  const intl = useIntl()

  return (
    <div className="wrapper">
      <div className={`section ${SC.section_community}`}>
        <div className={SC.subtitle}>
          {intl.formatMessage({ id: 'community' })}
        </div>
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
                    {node.text}
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

export default Community
