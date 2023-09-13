import './CustomButton.css'

const CustomButton = ({variant,titulo}) => {
  return (
    <>
    <button className={variant}>{titulo}</button>
    </>
  )
}

export default CustomButton