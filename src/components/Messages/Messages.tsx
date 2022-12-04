import css from './Message.module.css';
import {Button} from "../utils/Button";
import {ChangeEvent, useState} from "react";

export type PropsType = () => {
  messages: Array<MessageType>
  title: string
  // callback: (title: string) => void
}
export type MessageType = {
  id: string
  title: string
}

export const Messages = (props: PropsType) => {
  const sendClassName = css.button

  let [title, setTitle] = useState("")

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
    console.log(e.currentTarget.value)
  }
  const sendMessageHandler = () => {
    if (title.trim() !== '') {
      console.log(title)
      // props.callback(title.trim());
    }
    setTitle("");
  }

  return (
    <div className={css.messageWrapper}>
      <input value={title} onChange={onChangeHandler} type="text"/>
      <Button name={"send"} class={sendClassName} callback={sendMessageHandler} />
      {/*{props.messages.map(el => <p>{el.title}</p>)}*/}
    </div>
  )
}