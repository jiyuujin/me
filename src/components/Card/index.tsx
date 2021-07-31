import React, { FC } from 'react'
import { useIntl } from 'gatsby-plugin-react-intl'
import * as SC from './index.module.scss'
import LazyImage from '../LazyImage'
import { SiteMetadataTypes } from '../../types'
import { NekoButton } from 'nekohack-ui'
import PaperPlaneSvg from '../../static/icons/paper-plane.svg'

const Card: FC<any> = ({ data }: SiteMetadataTypes) => {
  const intl = useIntl()

  return (
    <div className={SC.content}>
      <div className={SC.cardInfo}>
        <div className={SC.me}>
          <LazyImage assetUrl={'me.png'} alt={'me'} />
        </div>
        <h1 className={SC.name}>{data.author}</h1>
        <ul className={SC.position}>
          {data.position.split(',').map((p: string) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <p className={SC.contact}>
          <NekoButton
            onClick={() => {
              const url =
                                'https://docs.google.com/forms/d/e/1FAIpQLSfFzwsCVnFbu-lV0Jz2fEYHR97hpBSK2g6kEwc-G1fo976ngA/viewform'
              window.open(url, '_blank')
            }}
          >
            {intl.formatMessage({ id: 'contact' })}
            <PaperPlaneSvg
              style={{
                width: '20px',
                height: '20px',
                marginLeft: '4px',
              }}
            />
          </NekoButton>
        </p>
      </div>
    </div>
  )
}

export default Card
