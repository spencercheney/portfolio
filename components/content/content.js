import BasicComponent from "../basic"
import { useClassList } from "./contentHooks"
import styles from "@/styles/container.module.css"

export default function Content({ isClosed, isInitialized, children } ) {
  const classList = useClassList(isClosed, isInitialized)

  return (
    <div className={ classList.join(' ') }>
      <BasicComponent style={{ width: "100%", height: "100%" }}>
        <div className={ styles.children }>{ children }</div>
      </BasicComponent>
    </div>
  )
}