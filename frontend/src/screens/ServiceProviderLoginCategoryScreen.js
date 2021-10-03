
import React from 'react'

export default function ServiceProviderLoginCategoryScreen(props) {
    return (
        <div>
            <h1>Choose a Category</h1>
        <div>
            <label />
            <button className="primary" type="submit">
              Hotel Service Provider Login
            </button>
          </div>
          <div>
            <label />
            <button className="primary"  onClick={() =>
                                props.history.push(`/guidelogin`)
                                }>
              Guide Login
            </button>
          </div>
          
      </div>
    )
}

