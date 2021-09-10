import React, { FC } from 'react'
import { useIntl } from 'gatsby-plugin-intl'

type WorkProps = {
  data: Array<unknown>
}

const Work: FC<WorkProps> = ({ data }) => {
  const intl = useIntl()

  return (
    <div className="section">
      <h1>{intl.formatMessage({ id: 'work' })}</h1>
      <p>{intl.formatMessage({ id: 'work_experience' })}</p>
      <h2>{intl.formatMessage({ id: 'labels.related_links' })}</h2>
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
  )
}

export default Work
