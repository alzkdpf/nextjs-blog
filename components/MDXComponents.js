const img = (props) => {
  console.log('=====', props)
  return <img src={props.src} alt={props.alt} />
}

const MDXComponents = {
  img: img,
}

export default MDXComponents
