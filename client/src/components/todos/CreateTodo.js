import React from 'react'
import { connect } from 'react-redux'

export const CreateTodo = (props) => {
  return (
    <div>CreateTodo</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo)
