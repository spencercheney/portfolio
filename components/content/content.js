import BasicComponent from "../basic"
import { useClassList } from "./contentHooks"

export default function Content({ isClosed, isInitialized, children } ) {
  const classList = useClassList(isClosed, isInitialized)

  return (
    <div className={ classList.join(' ') }>
      <BasicComponent style={{width: "100%", height: "100%"}}>
        {children}
      </BasicComponent>
    </div>
  )
}