import React, { FC } from 'react'
import { useIntl } from 'gatsby-plugin-react-intl'
import dayjs from 'dayjs'

type SlideProps = {
  data: Array<unknown>
}

const Slide: FC<SlideProps> = ({ data }) => {
  const intl = useIntl()

  const dateFormat = (d: string) => {
    return dayjs(new Date(d)).format('YYYY年MM月DD日')
  }

  return (
    <div className="section">
      <h1>{intl.formatMessage({ id: 'slide' })}</h1>
      <ul>
        {data.map(({ node }: any) => {
          return (
            <li key={node.id}>
              <p>{dateFormat(node.date)}</p>
              <p>
                {node.host}
                <br />
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
                {node.youtubeUrl && (
                  <>
                    {' / '}
                    <a
                      href={node.youtubeUrl}
                      role="button"
                      aria-pressed="true"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {intl.formatMessage({
                        id: 'labels.youtube_live',
                      })}
                    </a>
                  </>
                )}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Slide
