import React, { FC } from 'react'
import { useIntl } from 'gatsby-plugin-react-intl'

type ProductProps = {
  data: Array<{
    node: {
      id: string
      title: string
      description: string[]
      skills?: Array<{
        name: string
        category: string
        status: 'active' | 'used'
      }>
      image?: string
      url?: string
      sub?: Array<{
        title: string
        skills: string[]
        url: string
      }>
    }
  }>
}

const Product: FC<ProductProps> = ({ data }) => {
  const intl = useIntl()

  return (
    <div className="section">
      <h1>{intl.formatMessage({ id: 'product' })}</h1>
      {data.map(({ node }: any) => {
        return (
          <div key={node.id}>
            <h2>{intl.formatMessage({ id: node.title })}</h2>
            {node.image && (
              <img src={node.image} alt={node.title} width={600} height={400} decoding="async" />
            )}
            {node.description.map((d: string, index: number) => {
              return (
                <p
                  key={index}
                  dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: d }) }}
                />
              )
            })}
            {node.skills && (
              <>
                <h3>{intl.formatMessage({ id: 'product_technology_used' })}</h3>
                <ul>
                  {node.skills?.map(
                    (s: { name: string; category: string; status: 'active' | 'used' }) => {
                      if (s.status !== 'active') return
                      return <li key={s.name}>{`${s.name} (${s.category})`}</li>
                    },
                  )}
                </ul>
              </>
            )}
            {node.url && (
              <>
                <h3>{intl.formatMessage({ id: 'product_url' })}</h3>
                <p>
                  <a href={node.url} target="_blank" rel="noopener noreferrer">
                    {node.url}
                  </a>
                </p>
              </>
            )}
            {node.sub && (
              <>
                <h3>{intl.formatMessage({ id: 'sub_product' })}</h3>
                <ul>
                  {node.sub?.map(
                    (
                      s: {
                        title: string
                        skills: Array<{
                          name: string
                          category: string
                          status: 'active' | 'used'
                        }>
                        url: string
                      },
                      index: number,
                    ) => (
                      <li key={index}>
                        <h4>{intl.formatMessage({ id: s.title })}</h4>
                        <h5>{intl.formatMessage({ id: 'product_technology_used' })}</h5>
                        <ul>
                          {s.skills?.map(
                            (
                              s: {
                                name: string
                                category: string
                                status: 'active' | 'used'
                              },
                              key: number,
                            ) => {
                              if (s.status !== 'active') return
                              return <li key={key}>{`${s.name} (${s.category})`}</li>
                            },
                          )}
                        </ul>
                        <h5>{intl.formatMessage({ id: 'product_url' })}</h5>
                        <p>
                          <a href={s.url} target="_blank" rel="noopener noreferrer">
                            {s.url}
                          </a>
                        </p>
                      </li>
                    ),
                  )}
                </ul>
              </>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Product
