import React from 'react'
import PropTypes from 'prop-types'

import AspectRatio from 'react-aspect-ratio'
import { Button } from 'components'
import { Col, Grid, Row } from 'react-flexbox-grid'

import {
  SHOWCASE,
} from 'images'

import baseStyles from '../../Home.styles'
import styles from './Showcase.styles'

export default class Showcase extends React.Component {
  render() {
    const { t } = this.props
    return (
      <React.Fragment>
        <style jsx>{baseStyles}</style>
        <style jsx>{styles}</style>

        <div className='page-section showcase'>
          <Grid>
            <Row middle='xs'>
              <Col xs={10} xsOffset={1} className='hidden-md hidden-lg'>
                <h2>{t('showcase.title')}</h2>
              </Col>
              <Col md={12} lg={8}>
                <div className='showcase-container'>
                  <AspectRatio ratio='2128/1467'>
                    <img
                      src={SHOWCASE}
                      alt={t('showcase.title')}
                    />
                  </AspectRatio>
                </div>
              </Col>
              <Col xs={10} xsOffset={1} lg={4} lgOffset={0}>
                <h2 className='hidden-xs hidden-sm'>{t('showcase.title')}</h2>
                <p>{t('showcase.description')}</p>
                <div className='button-container'>
                  <Button
                    outline
                    push='/creative'
                    text='Learn More'
                  />
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

Showcase.propTypes = {
  t: PropTypes.func.isRequired,
}
