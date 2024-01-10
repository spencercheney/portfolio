import useToast from "../toast/useToast"
import { useHeaderClass, useIconClass, useModule, useNameClass } from "./headerHooks"

export default function Header({ location, isInitialized }) {

  const toastDispatch = useToast()
  //what will be displayed in the toast
  const toastContent = <span>
    I've always been entertained by the idea of magic; believing in powers that can't be explained. I've always thought 
    the most interesting magical being is the genie.
    <br /><br />
    One of the struggles I often face is my last name getting mispronouced. It's been pronouced ChAYnAY, ChAYnEE, and even
    ShanAYnAY which are all incorrect. The correct pronouciation is ChEEnEE. The easiest way to remember it is that it's
    pronouced the same way as genie but with a ch instead of g, Ch-enie. 
    <br /><br />
    While genies may not actually exist, they are able to magically help people remember my name. 
  </span>

  const module = useModule(isInitialized)
  const headerClass = useHeaderClass(location, module)
  const iconClass = useIconClass(location, module)
  const nameClass = useNameClass(location,  module)

  return (
    location == "none" ? <></> :
    <div className={ headerClass.join(' ') }>
      <div className={ iconClass.join(' ') } onClick={ () => toastDispatch({ type: "open", content: toastContent }) }>
        <div/>
      </div>
      <div className={ nameClass.join(' ') }>Spencer Cheney</div>
    </div>
  )
}