import React from 'react'
import preload from '../public/data.json'

const Search = React.createClass({
  render () {
    return (
      <div className='search'>
        {/* We're displaying some pre-formatted code and that code is from data.json. */}
        <pre>
          <code>
            {JSON.stringify(preload, null, 4)}
          </code>
        </pre>
      </div>
    )
  }
})

export default Search
