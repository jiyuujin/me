import React, { FC } from 'react'
import { useIntl } from 'gatsby-plugin-react-intl'
import dayjs from 'dayjs'
import * as SC from './index.module.scss'

type SlideProps = {
  data: Array<unknown>
}

const Slide: FC<SlideProps> = ({ data }) => {
  const intl = useIntl()

  const dateFormat = (d: string) => {
    return dayjs(new Date(d)).format('YYYY年MM月DD日')
  }

  return (
    <div className="wrapper">
      <div className="section">
        <div className={SC.subtitle}>{intl.formatMessage({ id: 'slide' })}</div>
        <div className={SC.description}>
          <ul>
            {data.map(({ node }: any) => {
              return (
                <li key={node.id}>
                  <div>{dateFormat(node.date)}</div>
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
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Slide
