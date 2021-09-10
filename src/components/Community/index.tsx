import React, { FC } from 'react'
import { useIntl } from 'gatsby-plugin-intl'

type CommunityProps = {
  data: Array<unknown>
}

const Community: FC<CommunityProps> = ({ data }) => {
  const intl = useIntl()

  return (
    <div className="section">
      <h1>{intl.formatMessage({ id: 'community' })}</h1>
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
  )
}

export default Community
