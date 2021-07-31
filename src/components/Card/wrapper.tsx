import React, { FC, useState } from 'react'
import { useIntl } from 'gatsby-plugin-react-intl'
import * as SC from './wrapper.module.scss'
import { NekoButton } from 'nekohack-ui'
import Modal from '../Modal'
import Card from './index'

import IdCardSvg from '../../static/icons/id-card.svg'

type CardWrapperProps = {
    data: Array<unknown>
}

export const CardWrapper: FC<CardWrapperProps> = ({ data }) => {
  const intl = useIntl()

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <div className={`wrapper ${SC.wrapper_card}`}>
      <NekoButton onClick={handleOpen}>
        <IdCardSvg
          style={{
            width: '20px',
            height: '20px',
            marginRight: '4px',
          }}
        />
        {intl.formatMessage({ id: 'labels.business_card' })}
      </NekoButton>
      {open && (
        <Modal onClose={() => setOpen(!open)}>
          <Card data={data} />
        </Modal>
      )}
    </div>
  )
}
