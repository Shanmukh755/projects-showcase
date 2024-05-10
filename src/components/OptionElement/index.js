const OptionElement = props => {
  const {eachOption} = props
  const {id, displayText} = eachOption
  return <option value={id}>{displayText}</option>
}

export default OptionElement
