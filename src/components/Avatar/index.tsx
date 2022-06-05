import styles from './styles.module.css'

type Props = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  hasBorder?: boolean
}

export const Avatar = ({
  hasBorder = true,
  className = '',
  ...props
}: Props) => {
  return (
    <img
      className={`${styles.avatar} ${
        hasBorder ? styles.border : ''
      } ${className}`}
      {...props}
    />
  )
}
