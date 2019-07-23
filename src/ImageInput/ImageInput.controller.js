import React from 'react'

const readFileAsDataURL = (file) =>
  new Promise(resolve => {
    const reader = new FileReader()
    reader.onload = (event) => {
      resolve(event.target.result)
    }
    reader.readAsDataURL(file)
  })

class ImageInput extends React.Component {
  state = {
    value: ''
  }

  handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file && file.type.match(/^image\//)) {
      readFileAsDataURL(file).then(url => {
          this.setState({ value: url })
        })
    } else {
      this.setState({ value: '' })
    }
  }

  render() {
    const { className, name } = this.props
    const { value } = this.state
    const style = {
      position: 'relative'
    }

    if (value) {
      style.backgroundImage = `url("${value}")`
      style.backgroundRepeat = 'no-repeat'
      style.backgroundPosition = 'center'
      style.backgroundSize = 'cover'
    }

    return (
      <div className={className} style={style}>
        <input type="hidden" name={name} value={value} />
        <input type="file" onChange={this.handleFileChange} required
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0,
            cursor: 'pointer'
          }}
        />
      </div>
    )
  }
}

export default ImageInput
