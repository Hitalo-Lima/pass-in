import { ComponentProps } from "react"

//o componente navlink pode receber todas as propriedades da tag <a/>
interface NavLinkProps extends ComponentProps<"a"> {
  children: string
}

export function NavLink(props: NavLinkProps) {
  return (
    <a {...props} className="font-medium text-sm">
      {props.children}
    </a>
  )
}
