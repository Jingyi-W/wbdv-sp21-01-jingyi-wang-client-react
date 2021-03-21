import React from 'react'

const EditButton = ({setEditing}) =>
    <i onClick={() => {
        setEditing(true)
      }} className="float-right fa fa-cog fa-lg">
    </i>

const UpdateButton = ({updateWidget, cachedWidget, setEditing, setCachedWidget}) =>
    <i onClick={() => {
      updateWidget(cachedWidget)
      setEditing(false)
      setCachedWidget({text:"", type:cachedWidget.type, size: cachedWidget.size})
    }} className="pull-right fa fa-check fa-lg"></i>

const DeleteButton = ({deleteWidget, setEditing, widget, setCachedWidget, cachedWidget}) =>
    <i onClick={() => {
      deleteWidget(widget)
      setEditing(false)
      setCachedWidget({text:"", type:cachedWidget.type, size: cachedWidget.size})
    }} className="pull-right fa fa-trash fa-lg"></i>

export default {
  EditButton, UpdateButton, DeleteButton
}