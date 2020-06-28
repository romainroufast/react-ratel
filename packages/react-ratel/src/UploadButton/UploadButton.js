import React from 'react'
import Button from '../Button'

class UploadButton extends React.Component {
  constructor(props) {
    super(props)
    this.child = React.createRef()
  }

  render() {
    const { children, inputMultiple, onChosen, ...otherProps } = this.props

    return (
      <div>
        <input
          type='file'
          multiple={inputMultiple || false}
          ref={ref => this.upload = ref}
          style={{ display: 'none' }}
          onChange={e => onChosen(inputMultiple ? e.target.files : e.target.files[0])}
        />
        <Button
          {...otherProps}
          onClick={e => {
            e.preventDefault()
            this.upload.click()
          }}
        >
          { children }
        </Button>
      </div>
    )
  }
}

export default UploadButton