type InputType = {
  title: string
  onChangeCallback: () => void
  onKeyPressCallback: () => void
}

export const Input = (props: InputType) => {
  const onChangeCallbackHandler = () => {
    props.onChangeCallback
  }
  const onKeyPressCallbackHandler = () => {
    props.onKeyPressCallback
  }

  return (
    <input value={props.title} onChange={onChangeCallbackHandler} onKeyPress={onKeyPressCallbackHandler} type="text"/>
  )
}