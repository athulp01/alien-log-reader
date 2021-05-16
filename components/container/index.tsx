function Container({ className = '', children }) {
  return <div className={'container mx-auto p-10 ' + className}>{children}</div>
}

export default Container
