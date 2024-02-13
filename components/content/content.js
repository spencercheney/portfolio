import BasicComponent from "../basic"
import { useChildrenClass, useClassList } from "./contentHooks"
import styles from  "@/styles/container.module.css"

export default function Content({ isClosed, isInitialized, children } ) {
  const classList = useClassList(isClosed, isInitialized)
  const childrenClass = useChildrenClass(isClosed)

  return (
    <main className={ classList.join(' ') }>
      <BasicComponent classname={ styles.component }>
        <article className={ childrenClass } aria-label="Container used for styling">{ children }</article>
      </BasicComponent>
    </main>
  )
}