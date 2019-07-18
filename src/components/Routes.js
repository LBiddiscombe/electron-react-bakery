import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import { useContext } from 'react'
import { __RouterContext } from 'react-router-dom'

function useRouter() {
  return useContext(__RouterContext)
}

const Routes = props => {
  return (
    <BrowserRouter>
      <AnimatedRoutes children={props.children} />
    </BrowserRouter>
  )
}

const AnimatedRoutes = props => {
  const { location } = useRouter()
  const transitions = useTransition(location, location => location.key, {
    from: {
      opacity: 0.75,
      position: 'absolute',
      width: '100%'
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    }
  })
  return transitions.map(({ item, props: transition, key }) => (
    <animated.div key={key} style={transition}>
      <Switch location={item}>{props.children}</Switch>
    </animated.div>
  ))
}

export default Routes
