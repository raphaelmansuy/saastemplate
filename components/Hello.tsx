import React from 'react'

type HelloWorldProps = {
  name: string
}

const Hello = ({ name }: HelloWorldProps) => {
  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-purple-600">Hello, {name}!</h1>
      <p className="mt-2 text-gray-800">
        Welcome to the world of tailwindcss, typescript and React!
      </p>
    </div>
  )
}

export default Hello
