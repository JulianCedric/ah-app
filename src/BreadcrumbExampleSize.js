import React from 'react'
import { Breadcrumb, Divider } from 'semantic-ui-react'

const sizes = ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive']

const BreadcrumbExampleSize = () => (
  <>
    {sizes.map((size) => (
      <React.Fragment key={size}>
        <Breadcrumb size={size}>
          <Breadcrumb.Section link>Cue</Breadcrumb.Section>
          <Breadcrumb.Divider icon='right chevron' />
          <Breadcrumb.Section link>Craving</Breadcrumb.Section>
          <Breadcrumb.Divider icon='right chevron' />
          <Breadcrumb.Section link>Response</Breadcrumb.Section>
          <Breadcrumb.Divider icon='right chevron' />
          <Breadcrumb.Section active>Reward</Breadcrumb.Section>
        </Breadcrumb>
        <Divider hidden />
      </React.Fragment>
    ))}
  </>
)

export default BreadcrumbExampleSize