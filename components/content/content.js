import BasicComponent from "../basic"
import { useChildrenClass, useClassList } from "./contentHooks"

export default function Content({ isClosed, isInitialized, children } ) {
  const classList = useClassList(isClosed, isInitialized)
  const childrenClass = useChildrenClass(isClosed)

  return (
    <div className={ classList.join(' ') }>
      <BasicComponent style={{ width: "100%", height: "100%" }}>
        <div className={ childrenClass }>{ children }</div>
      </BasicComponent>
    </div>
  )
}