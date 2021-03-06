import React from 'react'
import PropTypes from 'prop-types'

import AspectRatio from 'react-aspect-ratio'
import { Col, Grid, Row } from 'react-flexbox-grid'

import baseStyles from '../../Home.styles'
import styles from './RefreshAtWill.styles'

export default class RefreshAtWill extends React.Component {
  render() {
    const { t } = this.props
    return (
      <React.Fragment>
        <style jsx>{baseStyles}</style>
        <style jsx>{styles}</style>

        <div className='page-section refresh'>
          <Grid>
            <Row>
              <Col xs={10} xsOffset={1} md={6} mdOffset={3}>
                <h2>{t('refresh.title')}</h2>
                <p>{t('refresh.description')}</p>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <div className='hidden-xs hidden-sm'>
                  <AspectRatio ratio='1600/800'>
                    <div className='refresh-image' />
                  </AspectRatio>
                </div>
                <div className='hidden-md hidden-lg'>
                  <AspectRatio ratio='732/499'>
                    <div className='refresh-image-small' />
                  </AspectRatio>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

RefreshAtWill.propTypes = {
  t: PropTypes.func.isRequired,
}
